<template>
    <div v-if="ifHasData" >
    <v-row>     
        <v-col cols="12">
            <h4>World Statistics</h4>
            <hr>
        </v-col>
        <v-col md="4" sm="4" xs="12" class="px-4">
            <div class="py-4 text-center deep-purple white--text single-element">
                <p class="mb-1">Globally Total Confirmed</p>
                <h2 v-if="finalWorldWide.totalAffect"> {{ finalWorldWide.totalAffect | numberformat }} </h2>
                <h2 v-else> 0 </h2>
            </div>
        </v-col>
        <v-col md="4" sm="4" xs="12" class="px-4">
            <div class="py-4 text-center red darken-3 white--text single-element">
                <p class="mb-1">Globally Total Death</p>
                <h2 v-if="finalWorldWide.totalDeaths"> {{ finalWorldWide.totalDeaths | numberformat }} </h2>
                <h2 v-else> 0 </h2>
            </div>
        </v-col>
        <v-col md="4" sm="4" xs="12" class="px-4">
            <div class="py-4 text-center green lighten-2 white--text single-element">
                <p class="mb-1">Globally Total Recovered</p>
                <h2 v-if="finalWorldWide.totalRecovered"> {{ finalWorldWide.totalRecovered | numberformat }} </h2>
                <h2 v-else> 0 </h2>
            </div>
        </v-col>

        <v-col md="4" sm="4" xs="6" class="px-4">
            <div class="py-4 text-center deep-purple white--text single-element">
                <p class="mb-1">Globally New Confirmed</p>
                <h2 v-if="finalWorldWide.NewConfirmed"> {{ finalWorldWide.NewConfirmed | numberformat }} </h2>
                <h2 v-else> 0 </h2>
            </div>
        </v-col>
        <v-col md="4" sm="4" xs="12" class="px-4">
            <div class="py-4 text-center red darken-3 white--text single-element">
                <p class="mb-1">Globally Total Death</p>
                <h2 v-if="finalWorldWide.NewDeaths"> {{ finalWorldWide.NewDeaths | numberformat }} </h2>
                <h2 v-else> 0 </h2>
            </div>
        </v-col>
        <v-col md="4" sm="4" xs="12" class="px-4">
            <div class="py-4 text-center green lighten-2 white--text single-element">
                <p class="mb-1">Globally Total Recovered</p>
                <h2 v-if="finalWorldWide.NewlRecovered"> {{ finalWorldWide.NewlRecovered | numberformat }} </h2>
                <h2 v-else> 0 </h2>
            </div>
        </v-col>

        <v-col cols="12" class="px-4">
            <div class="">
                <Datatables />
                <p class="mb-1">Visual data </p>
                <!-- <Chart /> -->
            </div>
        </v-col>
    </v-row>
    </div>
</template>
<script>
// import Chart from './Chart';
import Datatables from './Datatables';
export default {
    data() {
        return {
            isdataShowing: false
        }
    },
    components: {
        //Chart,
        Datatables,
    },
    methods : {
        ifHasData(){
            if (this.finalWorldWide) {
                this.isdataShowing = true;
            }
        }
    },
    computed: {
        finalWorldWide(){
            return this.$store.getters.finalWorldWide;
        },

    },
    mounted() {
        this.finalWorldWide;
    }
}
</script>