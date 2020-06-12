<template>
    <div>
        <v-col cols="12">
        <h4 class="mb-5">Reported Cases and Deaths by Country</h4>
        <v-data-table
        :headers="headers"
        :items="countries"
        class="elevation-1"
        :search="search"
      >
      <template v-slot:top>
          <v-text-field 
           v-model="search"
            label="Search (UPPER CASE ONLY)" 
            class="mx-4"

          >
          </v-text-field>
        </template>
        <!-- <template v-slot:item="{ item }"> -->
      <template slot="items" slot-scope="props">
        <tr>
          <td class="text-xs-center">{{ props.item.Country }}</td>
          <td>{{ props.item.NewConfirmed }}</td>
          <td>{{ props.item.NewDeaths }}</td>
          <td>{{ props.item.NewRecovered }}</td>
          <td>{{ props.item.TotalConfirmed }}</td>
          <td>{{ props.item.TotalDeaths }}</td>
          <td>{{ props.item.TotalRecovered }}</td>
        </tr>
      </template>
      </v-data-table> 
            
        </v-col>   

    </div>
</template>
<script>
export default {
    data(){
        return {
             headers: [
               {text:"Country", value: 'Country'},
               {text:"NewConfirmed",value: 'NewConfirmed'},
               {text:"NewDeaths",value: 'NewDeaths'},
               {text:"NewRecovered",value: 'NewRecovered'},
               {text:"TotalConfirmed",value: 'TotalConfirmed'},
               {text:"TotalDeaths",value: 'TotalDeaths'},
               {text:"TotalRecovered",value: 'TotalRecovered'}
               ],
            search : "",
        }
    },
    computed: {
        countries(){
            return this.$store.getters.countryResult
        }
    },
    mounted(){
      return this.countries;
    }

}
</script>