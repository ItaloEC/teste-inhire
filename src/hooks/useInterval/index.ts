import { useRef, useEffect } from "react";
import { noop } from "@/utils/noop";

export function useInterval(
  callback: () => void,
  intervalDurationMs: number,
  isPlaying: boolean
): void {
  const savedRefCallback = useRef<() => void>();
  const intervalRef = useRef<number>();

  useEffect(() => {
    savedRefCallback.current = callback;
  });

  function internalCallback() {
    savedRefCallback.current?.();
  }

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(
        internalCallback,
        intervalDurationMs
      );

      return () => {
        window.clearInterval(intervalRef.current);
      };
    } else {
      intervalRef.current && window.clearInterval(intervalRef.current);
    }

    return noop;
  }, [isPlaying]);
}
