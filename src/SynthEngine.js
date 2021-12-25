import React, { useState } from 'react'
import { Song, Track, Instrument, Effect } from 'reactronica';
import { Donut } from 'react-dial-knob'
import Stack from '@mui/material/Stack';
import { Col } from 'react-bootstrap';

function SynthEngine() {

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [volume, setVolume] = useState(0)
  const [delayAmount, setDelayAmount] = useState(0)
  const [distortionAmount, setDistortion] = useState(0)


  return (
    <>
      <Song isPlaying={isPlaying}>
        <Track
          steps={[['C3', 'E3', 'G3'], ['G3', 'B4', 'D4']]}
          volume={volume}
        >
          <Instrument type="synth" />
          <Effect type="feedbackDelay" wet={delayAmount} />
          <Effect type="distortion" wet={distortionAmount} />
        </Track>
      </Song>

      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" className='Donut'>
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