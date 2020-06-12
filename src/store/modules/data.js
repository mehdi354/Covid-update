import axios from 'axios';
import moment from "moment";
const state = {
    allDatas       : [],
    finalWorldWide : {},
    allCountry      : [],
    selectedResult: {
        countryTotalAffect :  0 ,
        countryTotalDeaths:  0 ,
        countryTotalRecovered : 0 ,
        countryNewAffect :  0 ,
        countryNewDeaths:  0 ,
        countryNewRecovered :  0 
    },
    singleCountryConfirmedData : [],
    singleCountryDeathData : [],
    singleCountryRecoveredData : [],
};
const mutations = {
    'FETCH_DATA'(state,data){
        const responseData = data;
        state.allDatas = responseData;
        // console.log( responseData );
        state.totalAffect = responseData.Global.TotalConfirmed + responseData.Global.NewConfirmed;
        state.totalDeaths = responseData.Global.TotalDeaths + responseData.Global.NewDeaths;
        state.totalRecovered = responseData.Global.TotalRecovered + responseData.Global.NewRecovered;
        state.NewConfirmed = responseData.Global.NewConfirmed;
        state.NewDeaths = responseData.Global.NewDeaths;
        state.NewlRecovered = responseData.Global.NewRecovered;
        const total = {
            totalAffect : responseData.Global.TotalConfirmed,
            totalDeaths: responseData.Global.TotalDeaths,
            totalRecovered : responseData.Global.TotalRecovered,
            NewConfirmed : responseData.Global.NewConfirmed,
            NewDeaths : responseData.Global.NewDeaths,
            NewlRecovered : responseData.Global.NewRecovered,
        }
        state.finalWorldWide = total;
        // console.log(state.finalWorldWide);
        let i = 0;
        for ( i=0 ;  i< responseData.Countries.length;i++) {
            let condata = {
                countryName: responseData.Countries[i].Country,
                CountryCode: responseData.Countries[i].CountryCode
            }
            state.allCountry.push(condata);
        }
        //  get country data



        
    },
    'COUNTRY_SUMMERY'(state,countrySlug) {
        // console.log(state.allCountry);
        const record = state.allCountry.find(country => country.CountryCode == countrySlug) ; 
        const result = state.allDatas.Countries.find(element => element.CountryCode  == record.CountryCode) ;
        if(result) {
            let matchedData =  {
                countryTotalAffect : result.TotalConfirmed + result.NewConfirmed,
                countryTotalDeaths: result.TotalDeaths + result.NewDeaths,
                countryTotalRecovered : result.TotalRecovered + result.NewRecovered,
                countryNewAffect : result.NewConfirmed,
                countryNewDeaths: result.NewDeaths,
                countryNewRecovered : result.NewRecovered
            }
            setTimeout(function(){

                state.selectedResult = matchedData;
            }, 2000);
            
        }
    },
    'FETCH_SINGLE_COUNTRY_DATA'(state, data) {
        state.singleCountryConfirmedData = [];
        state.singleCountryDeathData = [];
        state.singleCountryRecoveredData = [];
        const allData = data;
        allData.forEach (d => {
            const dates = moment( d.Date ).format('DD/MM/YYYYY');
            const {
                Confirmed,Deaths,Recovered
            } = d
            // state.singleCountryConfirmedData.push({dates, Total: Confirmed});
            state.singleCountryDeathData.push({dates, Total:Deaths});
            state.singleCountryRecoveredData.push({dates, Total:Recovered});
            state.singleCountryConfirmedData.push({dates, Total: Confirmed});

        });
        // console.log(state.singleCountryConfirmedData);
        // console.log(state.singleCountryDeathData);
    }
};
const actions = {
    async getData({commit}){
        let {data} = await axios.get('summary');
        commit('FETCH_DATA',data);
    },

    countryData({commit},countrySlug){
        commit('COUNTRY_SUMMERY',countrySlug);
    },
    async singleCountryData({commit}, countryName){
        let {data} = await axios.get(`total/country/${countryName}`);
        commit('FETCH_SINGLE_COUNTRY_DATA', data );
    }

};
const getters = {
    results:state => {
        return state.allDatas;
    },
    finalWorldWide:state =>{
        return state.finalWorldWide;
    },
    countries: state => {
        return state.allCountry;
    },
    countryResult: state => {
        return state.allDatas.Countries;
    },
    selectedResult:state => {
        return state.selectedResult;
    },
    singleCountryConfirmedResult : state => {
        return state.singleCountryConfirmedData;
    },
    singleCountryDeathResult : state => {
        return state.singleCountryDeathData;
    },
    singleCountryRecoveredResult : state => {
        return state.singleCountryRecoveredData;
    },
    // singleCountryConfirmedData : [],
    // singleCountryDeathData : [],
    // singleCountryRecoveredData : [],
};

export default {
    state,mutations,actions,getters
}
