import { FaPlay, FaPause } from "react-icons/fa";

interface PlayPauseButtonProps {
  isPlaying: boolean;
  onClick: () => void;
}

export const PlayPauseButton = ({
  isPlaying,
  onClick,
}: PlayPauseButtonProps) => {
  const togglePlayPause = () => {
    onClick();
  };

  return (
    <button onClick={togglePlayPause}>
      {isPlaying ? <FaPause /> : <FaPlay />}
    </button>
  );
};
