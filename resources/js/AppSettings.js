// AppStore.js

import { reactive } from 'vue';

export const store = reactive({
  isSidebarVisible: true,
  isDarkMode: localStorage.getItem('darkMode') === 'true',

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  },

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode);
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }
});