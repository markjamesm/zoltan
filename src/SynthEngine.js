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

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [volume, setVolume] = useState(0)
  const [delayAmount, setDelayAmount] = useState(0)
  const [distortionAmount, setDistortion] = useState(0)
  const [reverbAmount, setReverbAmount] = useState(0)
  const [autoFilterAmount, setAutoFilterAmount] = useState(0)
  const [tremoloAmount, setTremoloAmount] = useState(0)
  const [steps] = useState([
    ['C3', 'E3', 'A3'],
    null,
    ['C3', 'E3', 'G3', 'B3'],
    null,
    ['C3', 'F3', 'A3'],
    null,
    ['D3', 'G3', 'B3'],
    null,
  ]);
  const [oscillatorType, setOscillatorType] = useState('sine')
  const [synthType, setSynthType] = useState('amSynth')

  return (
    <>
      <Song isPlaying={isPlaying}>
        <Track
          steps={steps}
          volume={volume}
        >
          <Instrument type={synthType} oscillator = {oscillatorType} />

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
            donutColor: 'darkred'
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
            donutColor: 'red'
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
          value={delayAmount}
          theme={{
            donutColor: 'purple'
          }}
          onValueChange={setDelayAmount}
          ariaLabelledBy={'delay-amount'}
        >
          <label id={'delay-amount'}>Delay</label>
        </Donut>
      </Stack>

      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" className='CenterAlign'>

        <Donut
          diameter={100}
          min={0}
          max={1}
          step={.25}
          value={reverbAmount}
          theme={{
            donutColor: 'orange'
          }}
          onValueChange={setReverbAmount}
          ariaLabelledBy={'reverb'}
        >
          <label id={'reverb'}>Reverb</label>
        </Donut>

        <Donut
          diameter={100}
          min={0}
          max={1}
          step={.25}
          value={autoFilterAmount}
          theme={{
            donutColor: 'green'
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
            donutColor: 'blue'
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
            defaultValue="amSynth"
            name="radio-buttons-group"
          >
            <FormControlLabel value="amSynth" control={<Radio onClick={() => setSynthType('amSynth')} />} label="amSynth" />
            <FormControlLabel value="fmSynth" control={<Radio onClick={() => setSynthType('fmSynth')} />} label="fmSynth" />
            <FormControlLabel value="monoSynth" control={<Radio onClick={() => setSynthType('monoSynth')} />} label="monoSynth" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="oscillators">Oscillator Type</FormLabel>
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
            fontSize: '2rem',
          }}

          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? 'Stop' : 'Play sequence'}
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