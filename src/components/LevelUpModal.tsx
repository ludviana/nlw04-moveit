import { useContext } from 'react'
import { challengesContext } from '../context/ChallengeContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal(){
  const { level, closeLevelUpModal } = useContext(challengesContext)


  return(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{ level }</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo Level.</p>
        <button onClick={ closeLevelUpModal }>
          <img src="/icons/close.svg" alt="Fechar Modal"/>
        </button>
      </div>
    </div>
  )
}