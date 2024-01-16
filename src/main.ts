import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const myCustomLightTheme = {
    dark: false,
    colors: {
        background: "#E7ECEF",
        surface: "#f8f8f8",
        primary: "#6750A4",
        secondary: "#263238",
        error: "#CF6679",
        info: "#FFFFFF",
        success: "#12b071",
        warning: "#FB8C00",
    },
};

const myCustomDarkTheme = {
    dark: true,
    colors: {
        surface: "#1c1b20",
        primary: "#a28ed2",
        secondary: "#616161",
        error: "#CF6679",
        info: "#FFFFFF",
        success: "#0ea99a",
        warning: "#FB8C00",
    },
};

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: "myCustomDarkTheme",
        themes: {
            myCustomLightTheme,
            myCustomDarkTheme,
        },
    },
});

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify);

app.mount('#app')
