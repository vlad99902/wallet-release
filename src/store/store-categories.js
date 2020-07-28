import Vue from 'vue'

const state = {
    categories: {
        'ID1': {
            name: 'Food',
            categoryStyle: {
            background: '#F2F0F9',
            color: '#6E6893'
            }
        },
        'ID2': {
            name: 'Alcohol',
            categoryStyle: {
            background: '#FFDE8A',
            color: '#FDA701'
            }
        },
        'ID3': {
            name: 'Bad Habits',
            categoryStyle: {
            background: '#FFE0E0',
            color: '#D30000'
            }
        },
        'ID4': {
            name: 'Lifestyle',
            categoryStyle: {
            background: '#BEBEFF',
            color: '#4A4AFF'
            }
        },
        'ID5': {
            name: 'Home',
            categoryStyle: {
            background: '#CDFFCD',
            color: '#007F00'
            }
        }
    }
}

const mutations = {

}

const actions = {

}

const getters = {
    categories: state => {
        return state.categories
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}