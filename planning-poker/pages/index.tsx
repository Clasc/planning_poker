import Head from 'next/head';
import React from 'react';
import { PlayerAdd } from '../components/PlayerAdd';
import { makeIdGenerator } from '../lib/idGenerator/idGenderator';
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
                        <PlayerAdd></PlayerAdd>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default TestPage;