import React from 'react';
import Layout from "./layout";

const Home: React.FC = () => {
    const [index, setIndex] = React.useState(0);
    const increment = () => setIndex(index + 1);
    const decrement = () => setIndex(index - 1);

    return (
        <Layout>
            <span>{index}</span>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </Layout>
    );
};

export default Home;