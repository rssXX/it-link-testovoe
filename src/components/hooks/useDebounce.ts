import React from "react";


function useDebounce(callback: () => void, delay: number) {
    const timer = React.useRef<NodeJS.Timeout | undefined>();

    return React.useCallback(() => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            callback();
        }, delay);
    }, [callback, delay]);
}

export default useDebounce;