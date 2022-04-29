import Head from 'next/head';
import React from 'react';
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

                    </div>
                </div>
            </main>
        </div>
    );
}

export default TestPage;