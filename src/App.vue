<template>
  <v-app>
    <v-content transition="slide-x-transition">
      <Header />
      <v-container>
        <div class="contents">
          <router-view></router-view>
        </div>
      </v-container>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Header,Footer
  },

  data: () => ({
  }),
  created() {
      return this.$store.dispatch('getData')
    },
};
</script>
