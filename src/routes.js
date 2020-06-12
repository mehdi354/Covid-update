import Home from './components/Home.vue';
import WorldStatus from './components/WorldStatus.vue';
import CountryStatus from './components/CountryStatus.vue';
export const routes = [
    {path: "/" , component: Home},
    {path: "/WorldStatus" , component: WorldStatus},
    {path: "/CountryStatus" , component: CountryStatus},
]