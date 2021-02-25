import { useContext } from 'react'
import { challengesContext } from '../context/ChallengeContext'
import styles from '../styles/components/Profile.module.css'


export function Profile(){

  const { level } = useContext(challengesContext) 
  
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/ludviana.png" alt="Lucas Damasceno"/>
      <div>
        <strong>Lucas Damasceno</strong>
        <p>
        <img src='icons/level.svg' alt='level'/>
          Level { level }
        </p>
      </div>
    </div>
  )
}