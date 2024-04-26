"use client";
import { useState } from "react";
import Image from "next/image";
import { useInterval } from "@/hooks/useInterval";
import { PlayPauseButton } from "../PlayPauseButton";

const oneSecondInMs = 1000;

interface FramePlayerProps {
  frames: string[];
  fps: number;
  className: string;
}

function FramePlayer({ className, frames, fps }: FramePlayerProps) {
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const frameDuration = Math.floor(1000 / fps);
  const totalDuration = (frameDuration * frames.length) / 1000;

  useInterval(
    () => {
      setCurrentFrame((currentFrame + 1) % frames.length);
    },
    frameDuration,
    isPlaying
  );

  useInterval(
    () => {
      time === totalDuration - 1 ? setTime(0) : setTime(time + 1);
    },
    oneSecondInMs,
    isPlaying
  );

  const handleFrameClick = (frameIndex: number) => {
    setIsPlaying(false);
    setCurrentFrame(frameIndex);
    setTime((frameDuration * frameIndex) / 1000);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <Image
          src={frames[currentFrame]}
          alt="Frame"
          className="mt-4 object-cover"
          width={200}
          height={300}
          priority
        />
      </div>
      <div className="flex items-center mt-4">
        {frames.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 flex items-center justify-center cursor-pointer rounded-full ml-1 mr-1 ${
              index === currentFrame ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={() => handleFrameClick(index)}
          >
            {index === currentFrame && (
              <div className="bg-white rounded-full w-1 h-1" />
            )}
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-bold mt-4">Tempo: {time}s</h1>
      <div className="flex items-center mt-4">
        <PlayPauseButton isPlaying={isPlaying} onClick={handlePlayPause} />
      </div>
    </>
  );
}

export default FramePlayer;
