import {create} from 'zustand';

export const useAppStore = create(set => ({
  answers: [],
  addAnswer: answer => set(state => ({answers: [...state.answers, answer]})),
  reset: () => set({answers: []}),
}));
