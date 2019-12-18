<template>
  <v-tabs>
    <v-tab>
      <router-link active-class="active" to="/main" >Главная</router-link>
    </v-tab>
    <v-tab>
      <router-link active-class="active" to="/applications">Заявки</router-link>
    </v-tab>
    <v-tab>
      <router-link active-class="active" to="/management" >Менеджмент</router-link>
    </v-tab>
    <v-tab>
      <router-link active-class="active" to="/directories">Справочники</router-link>
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
   data () {
    
  },
}
</script>