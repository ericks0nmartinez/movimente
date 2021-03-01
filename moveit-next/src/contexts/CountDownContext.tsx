import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountDownContextData {
    minutes: number;
    seconds: number;
    hasFinish: boolean;
    isActive: boolean;
    startCountDown: () => void;
    resetCountDown: () => void;
}

interface CountDownProviderProps{
    children: ReactNode;
}

 export const  CountDownContext = createContext({} as CountDownContextData)

export function CountDownProvider({children}: CountDownProviderProps){

    let countDownTimeOut: NodeJS.Timeout;
    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActie] = useState(false);
    const [hasFinish, setHasFinish] = useState(false);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountDown(){
        setIsActie(true)       
    }
    function resetCountDown(){
        clearTimeout(countDownTimeOut);
        setIsActie(false); 
        setTime(25 * 60);
        setHasFinish(false);
    }

    useEffect(()=>{
        if(isActive && time > 0){
            countDownTimeOut = setTimeout(()=>{
                setTime(time -1)
            },1000)
        }else if (isActive && time == 0){
            setHasFinish(true);
            setIsActie(false);
            startNewChallenge();
        }
    }, [isActive, time]);
   

    return (
        <CountDownContext.Provider value={{
            minutes,
            seconds,
            hasFinish,
            isActive,
            startCountDown,
            resetCountDown
        }}>
            {children}
        </CountDownContext.Provider>
    );
}