import { useState, useEffect, useContext } from 'react';
import { CountDownContext, CountDownProvider } from '../contexts/CountDownContext';
import styles from '../style/components/CountDown.module.css';

export function CountDown() {

    const {
        minutes,
        seconds,
        hasFinish,
        isActive,
        startCountDown,
        resetCountDown
    } = useContext(CountDownContext)    

    const [minutoLeft, minutoRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')
    
//#jornadainfinita
    return (
    <div>
        <div className={styles.countDownContainer}>
            <div>
                <span>{minutoLeft}</span>
                <span>{minutoRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>
        {
            hasFinish ? (
                <button 
                    disabled                
                    type="button" className={styles.countDownButton}>
                    Ciclo encerrado
                </button>
            ): (
                <>
                    {
                        isActive ? (   
                            <button
                                onClick={resetCountDown}
                                type="button" className={`${styles.countDownButton} ${styles.countDownButtonActive}`}>
                                Abandonar ciclo
                            </button>    
                        ) : (
                            <button 
                                onClick={startCountDown}
                                type="button" className={`${styles.countDownButton}`}>
                                Iniciar ciclo
                            </button>    
            )
            }        
                </>
            )
        }       
    </div>
    );
}