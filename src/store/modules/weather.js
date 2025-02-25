import axios from "axios";

const state = {
    weather: []
};

const getters = {
    allWeather: (state) => state.weather
};

const actions = {
    async fetchWeather({ commit }) {
        const key = "9e3c85d67975431bba9135323222005"
        const response = await axios.get("http://api.weatherapi.com/v1/current.json?q=Lagos", {
            headers: {
                'Content-Type': 'application/json',
                "Authorization" : `API ${key}`
            }
        });
        console.log(response.data);
        commit("setWeather", response.data);
        
    }
};

const mutations = {
    setWeather: (state, weather) => (state.weather = weather)
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}