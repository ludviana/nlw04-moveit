import { useContext } from 'react'
import { challengesContext } from '../context/ChallengeContext'
import { CountDownContext } from '../context/CountDownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(challengesContext)
  const { resetCountDown } = useContext(CountDownContext)

  function handleChallengeSucceeded(){
    completeChallenge()
    resetCountDown()
  }

  function handleChallengeFailed(){
    resetChallenge()
    resetCountDown()
  }

  return(
    <div className={styles.ChallengeBoxContainer}>
       { activeChallenge ? (
         <div className={styles.ChallengeActive}>
           <header>Ganhe {activeChallenge.amount} xp</header>
            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type}/>
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>
            <footer>
              <button
                type="button"
                className={styles.ChallengeFailedButton}
                onClick={handleChallengeFailed}
              >
                Falhei
              </button>
              <button
                type="button"
                className={styles.ChallengeSuccedeButton}
                onClick={handleChallengeSucceeded}
              >
                Completei
              </button>
            </footer>
         </div>
       ) : (

         <div className={styles.ChallengeNotActive}>
          <strong>Finaliza um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios
          </p>
         
         </div>
       ) }
    </div>
  )
}