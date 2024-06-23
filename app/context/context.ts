import { create } from 'zustand'

interface BearState {
  stateGame: string
  lifes: number
  setLife : (life: number) => void
  endGame : () => void  
}

const statesGame = ["start", "lose"]

export const useLife = create<BearState>()((set) => ({
  stateGame: statesGame[0],
  lifes : 0,
  setLife: (life) => set((state) => ({ lifes : life })),
  endGame: () => set((state) => ({ stateGame: statesGame[1]}))
}))