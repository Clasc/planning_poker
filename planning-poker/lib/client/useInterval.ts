
import React, { useState, useEffect, useRef } from 'react';

export const useInterval = (callback: () => void, delay: number) => {

    const savedCallback = useRef(() => { });

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);


    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        }
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
}