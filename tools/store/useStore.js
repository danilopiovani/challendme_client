import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// STORE
const createStore = (set) => ({
  userObject: {
    userId: null,
    name: null,
    email: null,
    genre: null,
    birthDate: null,
  },

  setChallenges: () => {
    set((state) => ({
      ...state,
      modal: {
        ...state.modal,
        isOpen: isOpen ?? !state.modal.isOpen,
        modalName: modalName ?? state.modal.modalName,
        modalProps,
      },
    }));
  },
});

// SETTINGS SUCH AS COLORS
let store = devtools(createStore); // may be removed in production
store = persist(store, { name: 'userSettings' });

// STORES
export const useStore = create(store);
