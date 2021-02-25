import { useContext } from 'react'
import { challengesContext } from '../context/ChallengeContext'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletleChallenges(){
  const { challengesCompleted } = useContext(challengesContext)
  
  return(
    <div className={styles.CompletedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{ challengesCompleted }</span>
    </div>
  )
}
