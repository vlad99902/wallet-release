import Vue from 'vue'

const state = {
    categories: {
        //ID0 USED onlu for OTHER category
        'ID0': {
            name: 'Other',
            categoryStyle: {
                background: '#A6A5AA',
                color: '#212121'
            }
        },
        'ID1': {
            name: 'Foodstuff',
            categoryStyle: {
                background: '#C6F5D9',
                color: '#15C759'
            }
        },
        'ID2': {
            name: 'Alcohol',
            categoryStyle: {
                background: '#FFEBCF',
                color: '#FE9400'
            }
        },
        'ID3': {
            name: 'Bad Habits',
            categoryStyle: {
                background: '#BADBff',
                color: '#007AFF'
            }
        },
        'ID4': {
            name: 'Eating Out',
            categoryStyle: {
                background: '#FFC9C4',
                color: '#FE3D2E'
            }
        },
        'ID5': {
            name: 'Transport',
            categoryStyle: {
                background: '#B6D6F0',
                color: '#50ABF2'
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