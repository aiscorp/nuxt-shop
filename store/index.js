export const state = () => ({
    items: []
  }
)

export const actions = {
  async nuxtServerInit({commit}) {
    // Api with 200 request limit per day
    // const items = await this.$axios.$get('https://api.mockaroo.com/api/af756e80?count=100&key=beedb770')
    const items = await this.$axios.$get('https://api.mockaroo.com/api/8f8fe7c0?count=50&key=46dbe7a0')
    commit('setItems', items)
  }
}

export const mutations = {
  setItems(state, items) {
    state.items = items
  }
}

export const getters = {
  items: state => state.items,
  getItemById: state => id => {
    return state.items.find(item => item.id === id)
  },
  getFirstItem: state => state.items.length ? state.items[0] : undefined
}
