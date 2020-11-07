import axios from 'axios'

const state = {
    articles: []
}

const getters = {
    allArticles: (state) => {
        return state.articles
    }
}

const actions = {
    async fetchArticles ({ commit }){
        const response = await axios.get('http://localhost:8000/api/articles/')
        console.log("data articles: ", response.data)
        commit ('setArticles', response.data)
    },
    async addArticle({ commit }, payload){
        console.log("11111111111111111")
        const response = await axios.post('http://localhost:8000/api/articles/create/', payload)
        console.log("res: ", response.data)
        commit('addArticle', response.data)
    }
}

const mutations = {
    setArticles: (state, articles) => {
        return state.articles = articles
    },
    addArticle: (state, article) => {
        state.articles.push(article)
    }
}

export default {
    state,
    getters, 
    actions, 
    mutations,
}