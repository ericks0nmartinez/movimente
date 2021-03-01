import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../style/components/ExperienceBar.module.css';

export function ExperienceBar(){

    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    const porcentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
    
    return (
        <header className={style.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: `${porcentToNextLevel}%`}}></div>
                <span  style={{left: `${porcentToNextLevel}%`}} className={style.currentExperience}>{ currentExperience } px</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}