import Vue from 'vue'
import Vuex from 'vuex'
import PostsApi from '../api/posts/index'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        user:{},
        posts:[],
        user_token:null,
    },
    getters:{
        GET_USER(state){
            return state.user
        },
        GET_POSTS(state){
            return state.posts
        },
        GET_USER_TOKEN(state){
            return state.user_token
        }
    },
    mutations:{
        SET_USER(state,payload){
            state.user = payload
        },
        SET_POSTS(state,payload){
            state.posts = payload
        },
        SET_USER_TOKEN(state,payload){
            state.user_token = payload
        }
    },
    actions:{
        // async GetUserData({commit}){
        //     const {data} = await 
        // },
        async GetAllPosts({commit}){
            const { data } = await PostsApi.posts.getAllPosts()
            commit('SET_POSTS',data)
        },
        set_user_token({commit},payload){
            commit('SET_USER_TOKEN',payload)
        }
    }
})