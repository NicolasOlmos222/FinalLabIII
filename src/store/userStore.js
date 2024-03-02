import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'usuario',
  state: () => ({
    usuarioID: ''
  }),
  actions: {
    setUser(nuevoUsuario) {
      this.usuarioID = nuevoUsuario;
    }
  },
  getters: {
    getUser() {
      return this.usuarioID;
    }
  }
});
