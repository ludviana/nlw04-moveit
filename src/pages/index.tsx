import { Profile } from '../components/Profile'
import { ExperienceBar } from '../components/ExperienceBar';
import { CompletleChallenges } from '../components/CompletedChallenges'
import { CountDown } from '../components/CountDown';

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'

function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar/>
      <section>
        <div >
          <Profile/>
          <CompletleChallenges/>
          <CountDown/>
        </div>
        <div>
        </div>
      </section>
    </div>
  );
}

export default App;
