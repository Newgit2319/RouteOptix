import { useEffect, useState } from "react";

export default function useReplay(steps) {

    const [replayIndex, setReplayIndex] = useState(0);

    const [isPlaying, setIsPlaying] =
        useState(false);

    useEffect(() => {

        if (!isPlaying)
            return;

        if (replayIndex >= steps.length)
            return;

        const timer =
            setTimeout(() => {

                setReplayIndex(
                    prev => prev + 1
                );

            }, 700);

        return () =>
            clearTimeout(timer);

    }, [
        replayIndex,
        isPlaying,
        steps
    ]);

    return {

        replayIndex,

        setReplayIndex,

        isPlaying,

        setIsPlaying,

    };

}