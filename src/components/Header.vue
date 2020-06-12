<template>
	<v-toolbar color="purple" dark>
		<!-- <v-navigation-drawer></v-navigation-drawer> -->
		<v-container>
			<v-row>
				<v-toolbar-title>
					<router-link to="/" color="white">
						Covid19<strong>Tracker</strong>
					</router-link>
				</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-toolbar-items v-for="item in menuItem" :key="item.index" class="pl-5">
					<router-link :to="item.path" tag="li" activeClass="active">
						<v-btn text small><v-icon class="pr-1">{{ item.icon }}</v-icon> {{item.title}}</v-btn>
					</router-link>
				</v-toolbar-items>
			</v-row>
		</v-container>
	</v-toolbar>
</template>
<script>
export default {
	data(){
		return{
			menuItem : [
				{ path:'/',title: 'Home', icon:'mdi-home'},
				{ path:'/WorldStatus',title: 'World', icon:'mdi-earth'},
				{ path:'/CountryStatus',title: 'Country', icon:'mdi-flag'},
			]
		}
	}
}
</script>