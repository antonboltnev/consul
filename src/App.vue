<template>
  <v-layout>
    <v-navigation-drawer
        :rail="!navOpened"
        permanent
        @click="rail = false"
    >
      <v-list-item>
        <img src="@/assets/images/logo.png" alt="logo" />
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home" title="Dashboard" @click="router.push({ name: 'Dashboard' })"></v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" title="Employees" @click="router.push({ name: 'Employees' })"></v-list-item>
        <v-list-item prepend-icon="mdi-wallet-travel" title="Trips" @click="router.push({ name: 'Trips' })"></v-list-item>
        <v-list-item prepend-icon="mdi-book-open-blank-variant" title="EU Compliance" @click="router.push({ name: 'EU Compliance' })"></v-list-item>
        <v-list-item prepend-icon="mdi-text-box-multiple-outline" title="History and reports" @click="router.push({ name: 'History And Reporting' })"></v-list-item>
      </v-list>
    </v-navigation-drawer>
      <v-app-bar
          color="primary"
          density="compact"
      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="navOpened = !navOpened"></v-app-bar-nav-icon>
        </template>

        <template v-slot:append>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-chip
                  class="ma-2"
                  v-bind="props"
                  label
              >
                <v-icon start icon="mdi-account-circle-outline" />
                John Leider
                <v-icon end icon="mdi-chevron-down" />
              </v-chip>
            </template>
            <v-list class="pa-0">
              <v-list-item  prepend-icon="mdi-account" @click="">
                  Account
              </v-list-item>
              <v-list-item class="text-error"  prepend-icon="mdi-logout" @click="">
                Logout
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-app-bar>

      <v-main style="width: 100%">
        <v-container>
          <RouterView />
        </v-container>
      </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const navOpened = ref(true);
const rail = ref(true)
</script>
