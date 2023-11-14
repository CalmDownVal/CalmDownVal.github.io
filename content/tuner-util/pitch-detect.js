function createEnvelopeObserver({ binsPerSecond, onBinAvailable }) {
	const samplesPerBin = sampleRate / binsPerSecond;

	let currentBinMax = 0;
	let currentBinCount = 0;

	return sample => {
		if (++currentBinCount >= samplesPerBin) {
			onBinAvailable(1.0 - (1.0 - currentBinMax) ** 5);
			currentBinMax = 0;
			currentBinCount = 0;
		}

		currentBinMax = Math.max(currentBinMax, sample);
	};
}

function createYinPitchDetector({ fMin, fMax, windowSize, windowOffset, threshold, onPitchAvailable }) {
	const tauMin = Math.trunc(sampleRate / fMax);
	const tauMax = Math.trunc(sampleRate / fMin);

	const buffer = new Float32Array(windowSize + windowOffset);
	const diff = new Float32Array(tauMax);
	const mean = new Float32Array(tauMax);

	const getPitch = () => {
		let tau;
		let iMax;
		let i;
		let delta;
		let sum = 0.0;

		// diff function
		for (tau = 1; tau < tauMax; ++tau) {
			diff[tau] = 0.0;
			iMax = windowSize - tau;
			for (i = 0; i < iMax; ++i) {
				delta = buffer[i] - buffer[i + tau];
				diff[tau] += delta * delta;
			}
		}

		// cumulative mean
		for (i = 1; i < tauMax; ++i) {
			sum += diff[i];
			mean[i] = diff[i] * i / sum;
		}

		mean[0] = 1.0;

		// get pitch
		for (tau = tauMin; tau < tauMax; ++tau) {
			if (mean[tau] < threshold) {
				while (tau + 1 < tauMax && mean[tau + 1] < mean[tau]) {
					++tau;
				}

				return sampleRate / tau;
			}
		}

		return 0;
	};

	let index = 0;
	return sample => {
		buffer[index] = sample;
		if (++index >= windowSize + windowOffset) {
			buffer.copyWithin(0, windowOffset);
			index = windowSize;

			const pitch = getPitch();
			if (pitch > 0) {
				onPitchAvailable(pitch);
			}
		}
	};
}

class PitchDetectProcessor extends AudioWorkletProcessor {
	pitchDetector;
	envelopeObserver;

	constructor() {
		super();
		this.port.start();

		this.pitchDetector = createYinPitchDetector({
			fMin: 50, // MIDI: ~31
			fMax: 2500, // MIDI: ~99
			windowSize: 2048,
			windowOffset: 512,
			threshold: 0.3,
			onPitchAvailable: value => {
				this.port.postMessage({
					kind: 'pitch',
					value
				});
			}
		});

		this.envelopeObserver = createEnvelopeObserver({
			binsPerSecond: 16,
			onBinAvailable: value => {
				this.port.postMessage({
					kind: 'bin',
					value
				});
			}
		});
	}

	process(inputs, _outputs, _params) {
		if (inputs.length !== 1 || inputs[0].length !== 1) {
			return true;
		}

		const samples = inputs[0][0];
		const { length } = samples;
		const { pitchDetector, envelopeObserver } = this;

		let i = 0;
		for (; i < length; ++i) {
			pitchDetector(samples[i]);
			envelopeObserver(samples[i]);
		}

		return true;
	}
}

registerProcessor('pitch-detect', PitchDetectProcessor);
