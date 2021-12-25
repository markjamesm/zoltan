import React, { useState } from 'react'
import { Song, Track, Instrument, Effect } from 'reactronica';
import { Donut } from 'react-dial-knob'
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Col } from 'react-bootstrap';

function SynthEngine() {

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [volume, setVolume] = useState(0)
  const [delayAmount, setDelayAmount] = useState(0)
  const [distortionAmount, setDistortion] = useState(0)
  const [steps, setSteps] = useState([
    ['C3', 'E3', 'A3'],
    null,
    ['C3', 'E3', 'G3', 'B3'],
    null,
    ['C3', 'F3', 'A3'],
    null,
    ['D3', 'G3', 'B3'],
    null,
  ]);
  const [synthType, setSynthType] = useState('amSynth')


  return (
    <>
      <Song isPlaying={isPlaying}>
        <Track
          steps={steps}
          volume={volume}
        >
          <Instrument type={synthType} />
          <Effect type="feedbackDelay" wet={delayAmount} />
          <Effect type="distortion" wet={distortionAmount} />
        </Track>
      </Song>

      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" className='CenterAlign'>
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
          <label id={'delay-amount'}>Delay Amount</label>
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
            <FormControlLabel value="amSynth" control={<Radio onClick={() => setSynthType('monoSynth')} />} label="amSynth" />
            <FormControlLabel value="fmSynth" control={<Radio onClick={() => setSynthType('fmSynth')} />} label="fmSynth" />
            <FormControlLabel value="monoSynth" control={<Radio onClick={() => setSynthType('monoSynth')} />} label="monoSynth" />
          </RadioGroup>
        </FormControl>

      </Stack>
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
    </>
  );
}

export default SynthEngine;