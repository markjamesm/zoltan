import GenerateSequence from './NotesGeneration';
import React, { useState } from 'react'
import { Song, Track, Instrument, Effect } from 'reactronica';
import { Donut } from 'react-dial-knob'
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

function SynthEngine() {

  /* Declare state variables */
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [volume, setVolume] = useState(-3)
  const [delayAmount, setDelayAmount] = useState(0)
  const [distortionAmount, setDistortion] = useState(0)
  const [reverbAmount, setReverbAmount] = useState(0)
  const [autoFilterAmount, setAutoFilterAmount] = useState(0)
  const [tremoloAmount, setTremoloAmount] = useState(0)
  const [steps, setSteps] = useState([["C3"]]);
  const [oscillatorType, setOscillatorType] = useState('sine')
  const [synthType, setSynthType] = useState('fmSynth')

  return (
    <>
      <Song isPlaying={isPlaying}>
        <Track
          steps={steps}
          volume={volume}

          // Callback for every step
          onStepPlay={(step: any, index: any) => {
            console.log(step, index);
          }}
        >
          <Instrument type={synthType} oscillator={oscillatorType} />

          {/* Setup the effect chain */}
          <Effect type="tremolo" wet={tremoloAmount} />
          <Effect type="distortion" wet={distortionAmount} />
          <Effect type="freeverb" wet={reverbAmount} />
          <Effect type="feedbackDelay" wet={delayAmount} />
          <Effect type="autoFilter" wet={autoFilterAmount} />
        </Track>
      </Song>

      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" className='CenterAlign'>
        <Donut
          diameter={100}
          min={0}
          max={1}
          step={.25}
          value={tremoloAmount}
          theme={{
            donutColor: 'darkred',
            donutThickness: 14
          }}
          onValueChange={setTremoloAmount}
          ariaLabelledBy={'tremolo-amount'}
        >
          <label id={'tremolo-amount'}>Tremolo</label>
        </Donut>

        <Donut
          diameter={100}
          min={0}
          max={1}
          step={.25}
          value={distortionAmount}
          theme={{
            donutColor: 'red',
            donutThickness: 14
          }}
          onValueChange={setDistortion}
          ariaLabelledBy={'delay-amount'}
        >
          <label id={'delay-amount'}>Distortion</label>
        </Donut>

        <Donut
          diameter={100}
          min={0}
          max={1}
          step={.25}
          value={reverbAmount}
          theme={{
            donutColor: 'orange',
            donutThickness: 14
          }}
          onValueChange={setReverbAmount}
          ariaLabelledBy={'reverb'}
        >
          <label id={'reverb'}>Reverb</label>
        </Donut>
      </Stack>

      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" className='CenterAlign'>
      <Donut
          diameter={100}
          min={0}
          max={1}
          step={.25}
          value={delayAmount}
          theme={{
            donutColor: 'purple',
            donutThickness: 14
          }}
          onValueChange={setDelayAmount}
          ariaLabelledBy={'delay-amount'}
        >
          <label id={'delay-amount'}>Delay</label>
        </Donut>

        <Donut
          diameter={100}
          min={0}
          max={1}
          step={.25}
          value={autoFilterAmount}
          theme={{
            donutColor: 'green',
            donutThickness: 14
          }}
          onValueChange={setAutoFilterAmount}
          ariaLabelledBy={'delay-amount'}
        >
          <label id={'delay-amount'}>AutoFilter</label>
        </Donut>

        <Donut
          diameter={100}
          min={-50}
          max={10}
          step={1}
          value={volume}
          theme={{
            donutColor: 'blue',
            donutThickness: 14
          }}
          onValueChange={setVolume}
          ariaLabelledBy={'volume'}
        >
          <label id={'volume'}>Volume</label>
        </Donut>
      </Stack>

      <br />
      <br />

      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" className='CenterAlign'>
        <FormControl component="fieldset">
          <FormLabel component="legend">Synth Engine</FormLabel>
          <RadioGroup
            aria-label="synth-engine"
            defaultValue="fmSynth"
            name="radio-buttons-group"
          >
            <FormControlLabel value="amSynth" control={<Radio onClick={() => setSynthType('amSynth')} />} label="amSynth" />
            <FormControlLabel value="fmSynth" control={<Radio onClick={() => setSynthType('fmSynth')} />} label="fmSynth" />
            <FormControlLabel value="duoSynth" control={<Radio onClick={() => setSynthType('duoSynth')} />} label="duoSynth" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend">Oscillator Type</FormLabel>
          <RadioGroup
            aria-label="synth-engine"
            defaultValue="sine"
            name="radio-buttons-group"
          >
            <FormControlLabel value="sine" control={<Radio onClick={() => setOscillatorType('sine')} />} label="Sine" />
            <FormControlLabel value="triangle" control={<Radio onClick={() => setOscillatorType('triangle')} />} label="Triangle" />
            <FormControlLabel value="square" control={<Radio onClick={() => setOscillatorType('square')} />} label="Square" />
          </RadioGroup>
        </FormControl>
      </Stack>

      <Stack alignItems="center">

      <button
          style={{
            fontSize: '1.5rem',
          }}

          onClick={() => {
            var generatedSequence = GenerateSequence;
            setSteps(generatedSequence);

          }}
        >
          {'Generate sequence'}
        </button>

        <br />

        <button
          style={{
            fontSize: '2rem',
          }}

          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? 'Stop' : 'Play'}
        </button>

        <br />
        <br />
        <br />
        <br />
        <br />

      </Stack>
    </>
  );
}

export default SynthEngine;