<template>
    <div>
    <v-footer
    class="px-0 py-0"
    >
    <v-card
      flat
      tile
      width="100%"
      color="purple"
      dark
    >
      
      <v-container>
        <v-row>
          <v-col cols="6" class="py-0">
          <v-card-text class="white--text  py-0">
            <p>{{ new Date().getFullYear() }}- Made By Syed Mehdi Hasan</p>
          </v-card-text>
        </v-col>
          <v-col cols="6" class="py-0">
            <v-card-text class="px-0 py-0 text-right">
              <v-btn
                v-for="item in menuItem"
                :key="item.index"
                class="mx-4"
                icon
              >
                <router-link :to="item.path" tag="li" class="">
                  <v-icon size="24px">{{ item.icon }}</v-icon>
                </router-link>
                <!-- <v-icon size="24px">{{ item.icon }}</v-icon> -->
              </v-btn>
            </v-card-text>
          </v-col>
        
      </v-row>
      </v-container>
          

    </v-card>
    </v-footer> 
    </div>
</template>
<script>
export default {
    data(){
        return {
        menuItem : [
            { path:'/',title: 'Home', icon:'mdi-home'},
            { path:'/WorldStatus',title: 'World', icon:'mdi-earth'},
            { path:'/CountryStatus',title: 'Country', icon:'mdi-flag'},
          ]
        }
    }
}
</script>