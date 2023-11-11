import { createStore } from 'vuex'

// TODO State data will be requested from an API request coming from a database
export default createStore({
  state: {
    menu: [
      { name: 'Home', link: '/' },
      { name: 'Pages', link: '/pages' },
      { name: 'Membership', link: '/membership' },
      { name: 'Lessons', link: '/lessons' },
      { name: 'News', link: '/news' },
      { name: 'Contact', link: '/contact' }
    ],
    home: {
      welcome: {
        title: 'Welcome',
        subtitle: 'To Our Tennis Club',
        description: 'Founded in 1964 by a team of professional tennis players our club is based in one of the most picturesque areas of the country and is ideal for family membership.'
      },
      match_reviews: {
        next: {
          title: 'MOST TENNIS MATCHES ARE PLAYED ON SUNDAYS FROM 10 AM TO APPROXIMATELY 2 PM',
          list: [
            {
              date: '2024-05-02 13:00',
              competition: 'WTA Baku Cup',
              competing: ['Linda Carter', 'Lisa Brooks']
            },
            {
              date: '2024-30-04 12:00',
              competition: 'Australian Open',
              competing: ['Steven Ward', 'Paul Diaz']
            },
            {
              date: '2024-28-04 12:00',
              competition: 'Astana Challenger (hard)',
              competing: ['Mary Wilson', 'Helen Price']
            },
            {
              date: '2024-28-04 12:00',
              competition: 'Astana Challenger (hard)',
              competing: ['Mary Wilson', 'Helen Price']
            }
          ]
        },
        latest: {

        }
      }
    }
  },
  getters: {
    getMenu: (state) => state.menu,
    getWelcome: (state) => state.home.welcome,
    getMatchReviews: (state) => state.match_reviews,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
