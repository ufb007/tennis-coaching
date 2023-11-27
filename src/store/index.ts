import { createStore } from 'vuex'
import homeModule from '@/store/modules/HomeModule'
import StoreType from '@/types/StoreType'

// TODO State data will be populated from an API request coming from a database
// Maybe using GraphQL or Rest
export default createStore<StoreType>({
  modules: {
    homeModule,
  },
  state: {
    menu: [
      { name: 'Home', link: '/' },
      { name: 'Pages', link: '/pages' },
      { name: 'Membership', link: '/membership' },
      { name: 'Lessons', link: '/lessons' },
      { name: 'News', link: '/news' },
      { name: 'Contact', link: '/contact' }
    ],
    testimonials: {
      title: 'Testimonials',
      list:[
        {
          message: 'PHASELLUS DAPIBUS ELEIFEND LEO, SIT AMET ACCUMSAN RISUS ORNARE IN. MAURIS VITAE EUISMOD QUAM. MAECENAS ALIQUET ORCI ELEIFEND QUAM PRETIUM SCELERISQUE..',
          name: 'Lisa Kudrow, Manager'
        },
        {
          message: 'EXCELLENT PROJECT THAT HELPS DISCOVERING YOUNG TALENTS AND KEEP US HEALTHY. PROFESSIONAL COACHES AND STAFF ARE DOING GREAT JOB!',
          name: 'Martin Moore, Manager'
        },
        {
          message: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. PELLENTESQUE VULPUTATE SED LOREM A CONGUE. DONEC CONSEQUAT ET SEM IN PORTA.',
          name: 'John Snow, CEO'
        },
        {
          message: 'EXCELLENT PROJECT THAT HELPS DISCOVERING YOUNG TALENTS AND KEEP US HEALTHY. PROFESSIONAL COACHES AND STAFF ARE DOING GREAT JOB!',
          name: 'Mehmet Bozdemir, Senior Developer'
        }
      ]
    },
  },
  getters: {
    getMenu: (state) => state.menu,
    getTestimonials: (state) => state.testimonials
  },
  mutations: {
    addTestimonial: (state, data) => {
      return state.testimonials.list.push(data)
    }
  },
  actions: {
  }
})
