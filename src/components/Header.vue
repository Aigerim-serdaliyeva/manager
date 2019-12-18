<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>Logo</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn>
        Выход
      </v-btn>
    </v-app-bar>
    <MainMenu />
  </div>
</template>

<script>
import MainMenu from './MainMenu.vue'

export default {
  components: { 
    MainMenu,
  }
}
</script>