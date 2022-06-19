import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: 'pinia',
    isLogin: false,
    account: '',
  }),
  getters: {
    getIsLogin: (state) => state.isLogin,
    getAccount: (state) => state.account,
  },
  actions: {
    resetAuth() {
      this.token = '';
      this.isLogin = false;
      this.account = '';
    },
    setAccount(account) {
      this.account = account;
      this.isLogin = true;
    },
  },
});
