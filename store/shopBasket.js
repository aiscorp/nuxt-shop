export const state = () => ({
  items: [],
  isOpen: false,
  isOrdered: false,
  customer: {
    name: "",
    email: "",
    phone: ""
  }
})

export const actions = {
  async checkout({commit, state}, oderinfo) {
    try {
      commit('checkoutSuccess')
      console.log('Заказ был сделан', oderinfo)
    } catch (e) {
      console.log(e);
    }
  }
}

export const mutations = {
  openBasket(state) {
    state.isOpen = true;
  },
  closeBasket(state) {
    state.isOpen = false;
    if (state.isOrdered === true) {
      state.isOrdered = false
    }
  },
  addItem(state, item) {
    const newItem = {...item, id2: Math.random().toString(36).substr(2, 9)};
    state.items.push(newItem);
  },
  deleteItem(state, item) {
    state.items = state.items.filter(i => i.id2 !== item.id2);
  },
  checkoutSuccess(state) {
    state.items = [];
    state.isOrdered = true;
  }
}

export const getters = {
  items: s => s.items,
  itemsCount: state => {
    return state.items.length;
  },
  isOpen: s => s.isOpen,
  isNotEmpty: state => {
    return state.items.length !== 0 ? true : false;
  },
  isOrdered: s => s.isOrdered,
  customer: s => s.customer
}

