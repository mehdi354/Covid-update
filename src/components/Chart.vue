
<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  computed: {
        finalWorldWide(){
            return this.$store.getters.finalWorldWide
        }
    },
  async mounted () {
    await this.finalWorldWide;
    this.renderChart({
        labels: this.finalWorldWide.totalAffect
    })
  }
}

</script>