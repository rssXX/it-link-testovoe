import React from 'react';
import Layout from "./layout";
import {CounterView} from "../atomic/templates";
import {CounterProvider} from "../components/provider/counterProvider";

const Home: React.FC = () => {
    return (
        <CounterProvider>
            <Layout>
                <CounterView/>
            </Layout>
        </CounterProvider>
    );
};

export default Home;