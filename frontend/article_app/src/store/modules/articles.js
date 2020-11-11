import axios from 'axios'

const state = {
    token: localStorage.getItem("token"),
    articles: []
}

const getters = {
    allArticles: (state) => {
        return state.articles
    }
}

const actions = {
    async fetchArticles ({ commit }){
        const response = await axios.get('http://localhost:8000/api/articles/', {
            headers:{
                "Authorization": `Bearer ${state.token}`
            }
    })        
        commit ('setArticles', response.data)
    },
    async addArticle({ commit }, payload){
        const response = await axios.post('http://localhost:8000/api/articles/create/', payload, {
            headers:{
                "Authorization": `Bearer ${state.token}`
            }
        })
        commit('addArticle', response.data)
    },
    async deleteArticle({ commit }, articleId){
        const response = await axios.delete(`http://localhost:8000/api/articles/${articleId}/delete/`, {
            headers:{
                "Authorization": `Bearer ${state.token}`
            }
        })
        commit('removeArticle', articleId)
    },
    async updateArticle({ commit }, payload) {
        const response = await axios.put(`http://localhost:8000/api/articles/${payload.id}/update/`, payload, {
            headers:{
                "Authorization": `Bearer ${state.token}`
            }
        })
        commit('updateArticle', response)
    },

    async getToken({ commit }, payload) {
      const response = await axios.post('http://localhost:8000/api/token/', payload)
      commit('setToken', response.data)
    },
    async removeToken({ commit }) {
        commit('removeToken')
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
    },
    setToken: (state, response) => {
      localStorage.setItem("token", response.access)

    },
    removeToken: (state) => {
        localStorage.removeItem('token')
        state.token = null
    }
}

export default {
    state,
    getters, 
    actions, 
    mutations,
}