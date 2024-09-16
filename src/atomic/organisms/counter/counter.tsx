import React from 'react';
import {ButtonText} from "../../molecules";
import {useCounterContext} from "../../../components/provider/counterProvider";

const Counter: React.FC = () => {
    const { increment, decrement } = useCounterContext()

    return (
        <>
            <ButtonText onClick={increment}>
                Добавить
            </ButtonText>
            <ButtonText onClick={decrement}>
                Отнять
            </ButtonText>
        </>
    );
};

export default React.memo(Counter);