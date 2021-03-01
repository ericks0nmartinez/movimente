import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../style/components/ChallengeBox.module.css'

export function ChallengeBox(){
    const {
        activeChallenges,
        resetChallenge,
        compleChallenge
    } = useContext(ChallengesContext);

    const {resetCountDown } = useContext(CountDownContext)

    function handleChallengeSucceeded(){
        compleChallenge();
        resetCountDown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountDown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
           {
           activeChallenges ? (
               <div className={styles.challengeBoxActive}>
                   <header>Ganhe {activeChallenges.amount} px</header>
                   <main>
                       <img src={`icons/${activeChallenges.type}.svg`} />
                       <strong>Novo desafio</strong>
                       <p>
                           {activeChallenges.description}
                       </p>
                   </main>
                   <footer>
                       <button 
                        type="button"
                        className={styles.challengeSuceedButton}
                        onClick={handleChallengeSucceeded}

                       >
                           Completei
                        </button>
                       
                       <button 
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={handleChallengeFailed}
                       >
                           Falhei
                       </button>
                   </footer>
               </div>
           ) : (
               <div className={styles.challengeBoxNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level UP" />
                    Avance de Level completando desafios.
                </p>
            </div>
            )
        }
        </div>
    )
}