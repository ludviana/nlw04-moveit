import { useContext } from 'react'
import { challengesContext } from '../context/ChallengeContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
  const { activeChallenge, resetChallenge } = useContext(challengesContext)

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
                onClick={resetChallenge}
              >
                Falhei
              </button>
              <button
                type="button"
                className={styles.ChallengeSuccedeButton}
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