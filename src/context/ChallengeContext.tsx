import { createContext, useState, ReactNode } from 'react'
import challenges from '../../challenges.json'

interface challenge{
  type: 'body' | 'eye',
  description: string,
  amount: number,
}


interface ChallengesContextData{
  level: number, 
  experienceToNextLevel: number,
  currentExperience: number,
  challengesCompleted: number,
  activeChallenge: challenge,
  levelUp: () => void,
  startNewChallenge: () => void,
  resetChallenge: () => void
}

interface ChallengesProviderProps{
  children:ReactNode
}

export const challengesContext = createContext({} as ChallengesContextData )

export function ChallengesProvider({ children }: ChallengesProviderProps){
  const [ level, setLevel ] = useState(3)
  const [ currentExperience, setCurrentExperience ] = useState(30)
  const [ challengesCompleted, setChallengesCompleted ] = useState(3)
  const [ activeChallenge, setActiveChallenge ] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1 ) * 4 , 2)

  function levelUp(){
    setLevel( level + 1 );
  }
  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random()*challenges.length)
    const challenge = challenges[randomChallengeIndex]
    
    setActiveChallenge(challenge)
  }

  function resetChallenge(){
    setActiveChallenge(null)
  }

  return (
    <challengesContext.Provider 
    value={{ 
      level, 
      levelUp,
      experienceToNextLevel,
      currentExperience,
      challengesCompleted,
      startNewChallenge,
      activeChallenge,
      resetChallenge
     }}>
     {children}
    </challengesContext.Provider>
  )
}