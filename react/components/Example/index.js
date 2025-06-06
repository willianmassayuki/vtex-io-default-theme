import React from 'react';
import styles from './styles';

const Example = () => {
    return (
        <button className={`${styles['container']}`}>
            <span>
                Click me
            </span>
        </button>
    );
};

export default Example;