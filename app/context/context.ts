import { create } from 'zustand'

interface BearState {
  life: number
  lostLife: () => void
}

export const useLife = create<BearState>()((set) => ({
  life: 3,
  lostLife: () => set((state) => ({ life: state.life - 1 }))
}))