import React from 'react';

export interface MiniPlayerProps {
  audioUrl: string;
  audioTitle: string;
}

const MiniPlayer = ({ audioUrl, audioTitle }: MiniPlayerProps): JSX.Element => {
  return (
    <figure>
      <audio controls src={audioUrl}>
        Your browser does not support the audio player; you can find the source
        media <a href={audioUrl}>here</a>.
      </audio>
      <figcaption>{audioTitle}</figcaption>
    </figure>
  );
};

export default MiniPlayer;
