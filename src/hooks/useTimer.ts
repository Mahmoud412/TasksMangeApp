import {View, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

export const useTimer = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const handleStart = (): void => {
    if (!isRunning) {
      startTimeRef.current = Date.now() - time;
    }
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime(Date.now() - (startTimeRef.current || 0));
    }, 1000);
  };

  const handleStop = (): void => {
    setIsRunning(false);
    intervalRef.current && clearInterval(intervalRef.current);
  };

  const formattedTime = (): string => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      Number(seconds) < 10 ? '0' : ''
    }${Number(seconds) < 10 ? '0' : ''}${seconds}`;
  };
  useEffect(() => {
    return () => {
      intervalRef.current && clearInterval(intervalRef.current);
    };
  }, []);
  return {handleStart, handleStop, formattedTime, isRunning, time};
};
