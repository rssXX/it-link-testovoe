import React from 'react';

type IButtonProps = {
    children: React.ReactNode;

    className?: string;
}

const Text: React.FC<IButtonProps> = ({ children, className = ''  }) => {
    return (
        <p className={className}>
            {children}
        </p>
    );
};

export default React.memo(Text);