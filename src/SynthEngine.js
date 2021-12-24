import React from "react";
import { Song, Track, Instrument } from 'reactronica';

function SynthEngine() {

    const [isPlaying, setIsPlaying] = React.useState(false);

    return (
    <>
      <Song isPlaying={isPlaying}>
        <Track steps={['C3', 'E3', 'G3', null]}>
          <Instrument type="synth" />
        </Track>
      </Song>
      <button
          style={{
            fontSize: '2rem',
          }}
          
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? 'Stop sound' : 'Play sound'}
        </button>
    </>
    );
}

export default SynthEngine;