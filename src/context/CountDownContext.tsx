import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { challengesContext } from './ChallengeContext'

let countdownTimeout: NodeJS.Timeout

interface CountDownContextData{
  minutes: number,
  seconds: number,
  hasFinished: boolean,
  isActive: boolean,
  startCountDown: () => void,
  resetCountDown: () => void,
}

interface CountDownProviderProps{
  children:ReactNode
}

export const CountDownContext = createContext({} as CountDownContextData)

export function CountDownProvider({ children }: CountDownProviderProps){
  const { startNewChallenge } = useContext(challengesContext)

  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  function startCountDown(){
    setIsActive(true)
  }

  function resetCountDown(){
    clearTimeout(countdownTimeout);
    setIsActive(false)
    setHasFinished(false)
    setTime( 0.05 * 60 )
  }

  useEffect(() => {
    if(isActive && time > 0){
      countdownTimeout = setTimeout(()=>{setTime(time - 1)},1000)
    }else if(isActive && time === 0){
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  return(
    <CountDownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountDown,
      resetCountDown
    }}>
      { children }
    </CountDownContext.Provider>
  )
}
