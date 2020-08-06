import Vue from 'vue'

const state = {
    categories: {
        //ID0 USED only for OTHER category
        'ID0': {
            name: 'Other',
            colorName: 'Shuttle Gray',
            categoryStyle: {
                background: '#5C6670',
                color: '#FFFFFF'
            }
        },
        //id 'NO_BUDGED' used to check purchases without a budget
        'NO_BUDGET': {
            name: 'Out of budget',
            colorName: 'Cameo',
            categoryStyle: {
                background: '#D8A69D',
                color: '#FFFFFF'
            }
        },
        'ID1': {
            name: 'Foodstuff',
            colorName: 'Malachite',
            categoryStyle: {
                background: '#C9FFDE',
                color: '#15C759'
            }
        },
        'ID2': {
            name: 'Alcohol',
            colorName: 'Pizazz',
            categoryStyle: {
                background: '#FFE4BE',
                color: '#FE9400'
            }
        },
        'ID3': {
            name: 'Bad Habits',
            colorName: 'Supernova',
            categoryStyle: {
                background: '#FFCC01',
                color: '#FFFFFF'
            }
        },
        'ID4': {
            name: 'Eating Out',
            colorName: 'Red Orange',
            categoryStyle: {
                background: '#FFDAD7',
                color: '#FE3D2E'
            }
        },
        'ID5': {
            name: 'Transport',
            colorName: 'Picton Blue',
            categoryStyle: {
                background: '#D6EDFF',
                color: '#50ABF2'
            }
        },
        'ID6': {
            name: 'NOT_USED',
            colorName: 'Dodger Blue',
            categoryStyle: {
                background: '#459EFF',
                color: '#FFFFFF'
            }
        },
        'ID7': {
            name: 'NOT_USED',
            colorName: 'Indigo',
            categoryStyle: {
                background: '#D2D1FF',
                color: '#5756D5'
            }
        },
        'ID8': {
            name: 'NOT_USED',
            colorName: 'Amaranth',
            categoryStyle: {
                background: '#EB4269',
                color: '#FFFFFF'
            }
        },
        'ID9': {
            name: 'NOT_USED',
            colorName: 'Lavender',
            categoryStyle: {
                background: '#F4D8FF',
                color: '#BF77DB'
            }
        },
        'ID10': {
            name: 'NOT_USED',
            colorName: 'Barley Corn',
            categoryStyle: {
                background: '#FFF1DC',
                color: '#9D8561'
            }
        },
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