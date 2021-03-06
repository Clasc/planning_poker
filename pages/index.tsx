import Head from 'next/head';
import React from 'react';
import CreateGame from '../components/CreateGame';
import JoinGame from '../components/JoinGame';
import styles from '../styles/Home.module.css';



const TestPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Planning Poker</title>
            </Head>
            <main>
                <h1>Planning Poker</h1>
                <div className='poker-container'>
                    <div>
                        <h2>Create a Game:</h2>
                        <CreateGame />

                        <h2>Join a Game:</h2>
                        <JoinGame />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default TestPage;