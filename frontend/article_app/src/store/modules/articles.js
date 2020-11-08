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
        commit ('setArticles', response.data)
    },
    async addArticle({ commit }, payload){
        const response = await axios.post('http://localhost:8000/api/articles/create/', payload)
        commit('addArticle', response.data)
    },
    async deleteArticle({ commit }, articleId){
        const response = await axios.delete(`http://localhost:8000/api/articles/${articleId}/delete`)
        commit('removeArticle', articleId)
    },
    async updateArticle({ commit }, payload) {
        const response = await axios.put(`http://localhost:8000/api/articles/${payload.id}/update`, payload)
        commit('updateArticle', response)
    }
}

const mutations = {
    setArticles: (state, articles) => {
        return state.articles = articles
    },
    addArticle: (state, article) => {
        state.articles.push(article)
    },
    removeArticle: (state, articleId) => {
        return state.articles = state.articles.filter(article => article.id !== articleId)
    },
    updateArticle: (state, article) => {
        return state.articles = state.articles
    }
}

export default {
    state,
    getters, 
    actions, 
    mutations,
}