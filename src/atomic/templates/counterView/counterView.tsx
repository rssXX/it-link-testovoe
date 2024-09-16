import React from 'react';
import {Counter} from "../../organisms";
import {useCounterContext} from "../../../components/provider/counterProvider";


const CounterView: React.FC = () => {
    const {count} = useCounterContext()

    return (
        <>
            {count}
            <Counter />
        </>
    );
};

export default React.memo(CounterView);