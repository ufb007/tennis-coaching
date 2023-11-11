import { createStore } from 'vuex'

export default createStore({
  state: {
    menu: [
      { name: 'Home', link: '/' },
      { name: 'Pages', link: '/pages' },
      { name: 'Membership', link: '/membership' },
      { name: 'Lessons', link: '/lessons' },
      { name: 'News', link: '/news' },
      { name: 'Contact', link: '/contact' }
    ]
  },
  getters: {
    getMenu(state) {
      return state.menu
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
