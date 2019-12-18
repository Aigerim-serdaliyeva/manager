<template>
  <div>
    <Header />

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      Footer
    </v-footer>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'App',

  components: { 
    Header  
        
  },

  data: () => ({
    //
  }),
};
</script>
