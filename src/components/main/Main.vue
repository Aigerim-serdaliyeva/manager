<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col md="5" >
          <v-item>
            <v-card
              class="d-flex align-center justify-center flex-column"
              height="250"
            >
              <h1>Стр заявки</h1>
              <router-link to="/" >Создание стр заявки</router-link>
              <router-link to="/" >Просмотр всех заявок</router-link>
            </v-card>
          </v-item>
        </v-col>

        <v-col md="5" >
          <v-item>
            <v-card
              class="d-flex align-center justify-center flex-column"
              height="250"
            >
              <h1>Оперативные заявки</h1>
              <router-link to="/" >Создание оперативной заявки</router-link>
              <router-link to="/" >Просмотр всех заявок</router-link>
            </v-card>
          </v-item>
        </v-col>

        <v-col md="5" >
          <v-item>
            <v-card
              class="d-flex align-center justify-center flex-column"
              height="250"
            >
              <h1>Материальные заявки</h1>
              <router-link to="/" >Создание материальной заявки</router-link>
              <router-link to="/" >Просмотр всех заявок</router-link>
            </v-card>
          </v-item>
        </v-col>

        <v-col md="5" >
          <v-item>
            <v-card
              class="d-flex align-center justify-center flex-column"
              height="250"
            >
              <h1>Оплаты</h1>
              <router-link to="/" >Добавление оплаты</router-link>
              <router-link to="/" >Просмотр оплат</router-link>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>