import React from "react";
import useDebounce from "./useDebounce";

const useCounter = ({initialCount = 0, step = 1}) => {
    const [count, setCount] = React.useState(initialCount);

    const increment = useDebounce(
        () => setCount(prev => prev + step),
        100,
    )
    const decrement = useDebounce(
        () => setCount(prev => prev - step),
        100,
    )

    return {
        count,
        increment,
        decrement,
    }
}

export default useCounter