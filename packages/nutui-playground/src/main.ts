import { createApp } from 'vue';
import App from './App.vue';
import '@vue/repl/style.css';
import './style.css';

// @ts-expect-error Custom window property
window.VUE_DEVTOOLS_CONFIG = {
  defaultSelectedAppId: 'repl'
};

createApp(App).mount('#app');
