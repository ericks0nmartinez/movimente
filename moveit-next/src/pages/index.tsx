import Head from "next/head";
import { GetServerSideProps } from "next";
import { ChallengeBox } from "../components/ChallengeBox";
import { CompleteedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/experienceBar";
import { Profiler } from "../components/profile";
import { CountDownProvider } from "../contexts/CountDownContext";

import styles from  '../style/pages/Home.module.css';
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | Moveit</title>
        </Head>     
        <ExperienceBar />
        <CountDownProvider>
        <section>
          <div>
            <Profiler />
            <CompleteedChallenges />
            <CountDown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const {
    level,
    currentExperience,
    challengesCompleted
  } = ctx.req.cookies
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }    
}