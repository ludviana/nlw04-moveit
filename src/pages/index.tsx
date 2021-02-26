import { Profile } from '../components/Profile'
import { ExperienceBar } from '../components/ExperienceBar';
import { CompletleChallenges } from '../components/CompletedChallenges'
import { CountDown } from '../components/CountDown';
import { ChallengeBox } from '../components/ChallengeBox';

import { CountDownProvider } from '../context/CountDownContext'
import { ChallengesProvider } from '../context/ChallengeContext' 
import { GetServerSideProps } from 'next'

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'

export default function Home(props) {
  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience} 
      challengesCompleted={props.challengesCompleted} 
    >
    
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar/>

        <CountDownProvider>
          <section>
            <div >
              <Profile/>
              <CompletleChallenges/>
              <CountDown/>
            </div>
            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies
  
  return {
    props: { 
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted) }
  }
}
