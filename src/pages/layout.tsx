import React from 'react';
import {LayoutProps} from "@/components/types";

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <main>
            {children}
        </main>
    );
};

export default Layout;