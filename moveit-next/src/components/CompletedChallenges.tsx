import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../style/components/CompleteedChallenges.module.css';

export function CompleteedChallenges () {
    const {challengesCompleted} = useContext(ChallengesContext)

    return (
        <div className={styles.completeedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}