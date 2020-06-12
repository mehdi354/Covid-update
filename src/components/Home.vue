<template>
    <div>
        
        <h2>Coronavirus pandemic: Tracking the global outbreak</h2>
        <p>The human cost of coronavirus has continued to mount, with more than 6.69m cases confirmed globally and more than 388,700 people known to have died.&nbsp; The World Health Organization has declared the outbreak&nbsp;a pandemic and it has spread to more than 200 countries around the world.&nbsp; This page provides an up-to-date visual narrative of the spread of Covid-19, so please check back regularly because we will be refreshing it with new graphics and features as the story evolves.</p>
        <p>The outbreak was declared a global pandemic by the World Health Organization (WHO) on 11 March. This is when an infectious disease is passing easily from person to person in many parts of the world at the same time.</p>
        <p>The WHO has warned that the pandemic is a long way from being over and says people should be prepared for new outbreaks to build up very quickly - especially in areas where lockdowns are eased.</p>
        <Datatables />
    </div>
</template>
<script>
import Datatables from './Datatables';
export default {
    components: {
        Datatables
    },
    computed: {
    },

}
</script>