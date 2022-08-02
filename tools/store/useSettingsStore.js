import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// SETTING STORE
const createSettingsStore = (set) => ({
  darkMode: false,
  navbar: false,
  modal: {
    isOpen: false,
    modalName: null,
    modalProps: {},
  },
  drawer: {
    isOpen: false,
    drawerName: null,
    drawerProps: {},
  },

  toggleDarkMode: () =>
    set((state) => ({
      darkMode: !state.darkMode,
    })),

  toggleNavBar: () =>
    set((state) => ({
      navbar: !state.navbar,
    })),

  setModal: (isOpen, modalName, modalProps) => {
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

  setDrawer: (isOpen, drawerName, drawerProps) => {
    set((state) => ({
      ...state,
      drawer: {
        ...state.drawer,
        isOpen: isOpen ?? !state.drawer.isOpen,
        drawerName: drawerName ?? state.drawer.drawerName,
        drawerProps,
      },
    }));
  },
});

// SETTINGS SUCH AS COLORS
let settingsStore = devtools(createSettingsStore); // may be removed in production
settingsStore = persist(settingsStore, { name: 'userSettings' });

// STORES
export const useSettingsStore = create(settingsStore);
