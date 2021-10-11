const state =  {
    item: null
}

const mutations = {
    'SET_CART' (state, productList) {
        if (productList) {
            state.item = productList;
        }
    },
}


export default {
    state,
    mutations
}
