import React from 'react';

export enum ButtonType {
    BUTTON = 'button',
}

interface IButtonProps  {
    children: React.ReactNode | React.ReactNode[],

    type?: ButtonType,
    onClick?: () => void,
    className?: string,
    disabled?: boolean,
}

const Button: React.FC<IButtonProps> = ({
    children,
    type = ButtonType.BUTTON,
    onClick = () => {},
    className = '',
    disabled= false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default React.memo(Button)