import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import {createStore} from 'vuex'
// import axios from "axios";

const app = createApp(App);
// const store = createStore({
//     state() {
//         return {
//             count: 0,
//             cell: '',
//         }
//     },
//     getters: {
//         getCount(state) {
//             return state.count
//         },
//         getCell(state) {
//             return state.cell
//         },
//     },
//     mutations: {
//         increment(state) {
//             state.count++
//         },
//         setCell(state, data) {
//             state.cell = data[0].cell
//         }
//     },
//     actions: {
//         incrementCount({commit}) {
//             commit('increment')
//         },
//         async fetchRandomUser({commit}) {
//             const response = await axios.get('https://randomuser.me/api/')
//             commit('setCell', response.data.results)
//         },
//
//     },
//     modules: {}
// });

app.use(store);
app.use(router);
app.mount('#app');


