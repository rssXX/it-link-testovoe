import React from 'react';
import {Button, Text} from "../../atoms";

interface IButtonTextProps {
    children: string | number | React.ReactNode | React.ReactNode[],

    onClick: () => void,
}

const ButtonText: React.FC<IButtonTextProps> = ({children, onClick}) => {
    return (
        <Button onClick={onClick}>
            <Text>
                {children}
            </Text>
        </Button>
    );
};

export default React.memo(ButtonText);