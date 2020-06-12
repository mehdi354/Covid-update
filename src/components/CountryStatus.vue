<template>
        
        <v-row>
            <v-col cols="12">
                <h4>Country Statistics</h4>
                <hr>
            </v-col>
             <v-col cols="12"> 
                <p v-if="isSelected" >You have selected: <strong> {{countryModal.countryName}} </strong> </p>
                <p v-else> <strong>Please select a country to check</strong> </p> 
            </v-col>
            
            <v-col cols="12">
                <v-col cols="3">
                    <v-card-text 
                        class="px-0 py-0 v-card__text white--text"
                       >
                        <v-autocomplete class="py-0" 
                        v-model="countryModal"
                        label="Type Country Name" 
                        :items="countries"
                        item-text="countryName"
                        @change = "changeCountry"
                        return-object
                        />
                    </v-card-text>
                </v-col>
                <!-- :items="{
                        text : countries.countryName,
                        value: countries.CountryCode
                        }"  -->
                
            </v-col>

            <v-row v-if="isSelected">
                <v-col md="4" sm="4" xs="12" class="px-4">
                    <div class="py-4 text-center deep-purple white--text single-element">
                        <p class="mb-1">Country Total Affected</p>
                        <h2 v-if="matchedResult.countryTotalAffect"> {{  matchedResult.countryTotalAffect | numberformat  }} </h2>
                        <h2 v-else> 0 </h2>
                    </div>
                </v-col>
                <v-col md="4" sm="4" xs="12" class="px-4">
                    <div class="py-4 text-center red darken-3 white--text single-element">
                        <p class="mb-1">Country Total Death</p>
                        <h2 v-if="matchedResult.countryTotalDeaths"> {{  matchedResult.countryTotalDeaths | numberformat  }} </h2>
                        <h2 v-else> 0 </h2>
                    </div>
                </v-col>
                <v-col md="4" sm="4" xs="12" class="px-4 single-element">
                    <div class="py-4 text-center green lighten-2 white--text">
                        <p class="mb-1">Country Total Recovered</p>
                        <h2 v-if="matchedResult.countryTotalRecovered"> {{  matchedResult.countryTotalRecovered | numberformat  }} </h2>
                        <h2 v-else> 0 </h2>
                    </div>
                </v-col>

                <v-col md="4" sm="4" xs="12" class="px-4">
                    <div class="py-4 text-center deep-purple white--text single-element">
                        <p class="mb-1">Country New Confirmed</p>
                        <h2 v-if="matchedResult.countryNewAffect"> {{  matchedResult.countryNewAffect | numberformat  }} </h2>
                        <h2 v-else> 0 </h2>
                    </div>
                </v-col>
                <v-col md="4" sm="4" xs="12" class="px-4">
                    <div class="py-4 text-center red darken-3 white--text single-element">
                        <p class="mb-1">Country New Death</p>
                        <h2 v-if="matchedResult.countryNewDeaths"> {{  matchedResult.countryNewDeaths | numberformat  }} </h2>
                        <h2 v-else> 0 </h2>
                    </div>
                </v-col>
                <v-col md="4" sm="4" xs="12" class="px-4 single-element">
                    <div class="py-4 text-center green lighten-2 white--text">
                        <p class="mb-1">Country New Recovered</p>
                        <h2 v-if="matchedResult.countryNewRecovered"> {{  matchedResult.countryNewRecovered | numberformat  }} </h2>
                        <h2 v-else> 0 </h2>
                    </div>
                </v-col>


                <v-col cols="6" class="px-4">
                    <div  class="pb=10" v-if="isSelected">
                        <h3>Confirmed</h3>
                        <ConutryConfirmedstatustics
                         :chartData="singleCountryConfirmedData"
                         :options ="chartOptions"
                         :chartColor ="confirmedchartColor"
                         :label = "labelPositive"
                        ></ConutryConfirmedstatustics>
                    </div>
                    
                </v-col>

                <v-col cols="6" class="px-4">
                    <div  class="pb=10" v-if="isSelected">
                        <h3>Death</h3>
                        <CountryDeathstatistics
                         :chartData="singleCountryDeathData"
                         :options ="chartOptions"
                         :label = "labelDeath"
                          :chartColor = "deathchartColor"
                        ></CountryDeathstatistics>
                    </div>
                    
                </v-col>

                <v-col cols="6" class="px-4">
                    <div  class="pb=10" v-if="isSelected">
                        <h3>Recovered</h3>
                        <ConutryRecoveredstatustics
                         :chartData="singleCountryRecoveredData"
                         :options ="chartOptions"
                         :chartColor ="recoveredchartColor"
                         :label = "labelRecovered"
                        ></ConutryRecoveredstatustics>
                    </div>
                    
                </v-col>

                

                <!-- <Conutrystatustics 
                    :countryModal="countryModal" 
                    :singleCountryConfirmedData="singleCountryConfirmedData"
                    :singleCountryDeathData="singleCountryDeathData"
                    :singleCountryRecoveredData="singleCountryRecoveredData"
                    /> -->

            </v-row>
            <div v-else>
                <h4 class="px-5"> No Data is Selected </h4>
            </div>
        </v-row>
</template>

<script>
import ConutryConfirmedstatustics from './chart/ConutryConfirmedstatustics.vue';
import CountryDeathstatistics from './chart/CountryDeathstatistics.vue';
import ConutryRecoveredstatustics from './chart/ConutryRecoveredstatustics.vue';
export default {
    components: {
        ConutryConfirmedstatustics,
        CountryDeathstatistics,
        ConutryRecoveredstatustics
    },
    data(){
        return{
            isSelected: false,
            countryModal: 'Not selected yet',
            chartOptions :{
                responsive: true,
                maintainAspectRatio: false
            },
            labelPositive: 'Positive',
            labelDeath: 'Death',
            labelRecovered: 'Recovered',
            confirmedchartColor : {
                borderColor : '#273c75',
                pointBorderColor : '#273c75', 
                pointBackgroundColor : '#273c75', 
                backgroundColor: 'rgba(39, 60, 117,.5)'
            },
            deathchartColor : {
                borderColor : '#e84118',
                pointBorderColor : '#e84118', 
                pointBackgroundColor : '#e84118', 
                backgroundColor: 'rgba(232, 65, 24,.5)'
            },
            recoveredchartColor : {
                borderColor : '#4cd137',
                pointBorderColor : '#4cd137', 
                pointBackgroundColor : '#4cd137', 
                backgroundColor: 'rgba(94, 239, 72,.5)'
            }
        }
    },
    computed: {
        countries(){
            return this.$store.getters.countries
        },
        matchedResult() {
            return this.$store.getters.selectedResult
        },
        singleCountryConfirmedData() {
             return this.$store.getters.singleCountryConfirmedResult
        },
        singleCountryDeathData() {
             return this.$store.getters.singleCountryDeathResult
        },
        singleCountryRecoveredData() {
            return this.$store.getters.singleCountryRecoveredResult
        },
    },
    methods:{
        changeCountry(country){
            console.log(this.countryModal);
            this.$store.dispatch('countryData',country.CountryCode); 
            if(country) {
                this.$store.dispatch('singleCountryData',country.countryName); 
                 this.isSelected = true;  
            }
           
        }
    },
    async mounted(){
        
        return this.changeCountry;
    },
    created() {
        //this.$store.dispatch('singleCountryData',country.countryName); 
    }

    // created(){
    //     return this.$store.dispatch('getCountryData');    
    // }
}
</script>