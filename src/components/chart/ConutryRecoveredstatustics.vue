<script>
// import { Line } from 'vue-chartjs';
// import {Line,mixins} from 'vue-chartjs'
// const { reactiveProp } = mixins
import {Line} from 'vue-chartjs'
export default { 
    extends: Line,
    // mixins: [reactiveProp],
    data(){
        return {
            isReturn :false
        }
    },
    props : {
        label: {
            type:String,
             default: null
        },
        chartData: {
            type : Array,
             default: null,
             required: true
        },
        options : {
            type : Object,
             default: null
        },
        chartColor: {
            type : Object
        }
    },
    computed: {
        chartDatas(){
            return this.chartData;
        }
        
    },
    mounted(){
        this.renderCharts(); 
    },

    methods : {
        renderCharts() {
            /*--------- for reverse data --------------*/ 
            // const dates = this.chartDatas.map( d => d.dates).reverse();
            // const Totals = this.chartDatas.map(d => d.Total).reverse();
            const dates = this.chartDatas.map( d => d.dates);
            const Totals = this.chartDatas.map(d => d.Total);
            const { borderColor,pointBorderColor, pointBackgroundColor, backgroundColor} = this.chartColor;
            if(this.chartDatas.length > 0) {
                this.isReturn = true
            }else {
                this.isReturn = false
            }
            if(this.isReturn) {
                this.renderChart(
                {
                labels: dates,
                datasets : [{
                    label: this.label,
                    data: Totals,
                    borderColor : borderColor,
                    pointBorderColor : pointBorderColor, 
                    pointBackgroundColor : pointBackgroundColor, 
                    backgroundColor: backgroundColor
                }
                ] 
            },
            this.options
            )     
        }

        }
    },
    watch: {
        chartData() {

            this.renderCharts();
        }
    }
}
</script>