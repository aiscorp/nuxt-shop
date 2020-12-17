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
    document.body.classList.add("my-class");
    state.isOpen = true;
  },
  closeBasket(state) {
    document.body.classList.remove("my-class");
    state.isOpen = false;
    if (state.isOrdered === true) {
      state.isOrdered = false
    }
  },
  addItem(state, item) {
    const newItem = {...item};
    state.items.push(newItem);
  },
  deleteItem(state, item) {
    state.items = state.items.filter(i => i.id !== item.id);
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

