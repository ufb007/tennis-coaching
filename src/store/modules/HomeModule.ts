import { Module } from "vuex"
import { ReviewNextType, ReviewLatestType } from "@/types/MatchReviewType"
import { WelcomeType } from "@/types/WelcomeType"

type HomeModuleType = {
    welcome: WelcomeType,
    match_reviews: {
        next: ReviewNextType,
        latest: ReviewLatestType
    }
}

const homeModule: Module<HomeModuleType, any> = {
    state: {
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
                    venue: 'WTA Baku Cup',
                    competing: ['Linda Carter', 'Lisa Brooks']
                },
                {
                    date: '2024-04-30 12:00',
                    venue: 'Australian Open',
                    competing: ['Steven Ward', 'Paul Diaz']
                },
                {
                    date: '2024-04-28 12:00',
                    venue: 'Astana Challenger (hard)',
                    competing: ['Mary Wilson', 'Helen Price']
                },
                {
                    date: '2024-04-28 12:00',
                    venue: 'Astana Challenger (hard)',
                    competing: ['Mary Wilson', 'Helen Price']
                }
                ]
            },
            latest: {
                title: 'Last Match Review',
                description: 'WE ARE VERY EXCITED TO GO OVER THIS EXCEPTIONAL TOURNAMENT THAT LITERALLY LEFT THE PLAYERS AND THE CROWD BREATHLESS!',
                match: {
                    date: '2024-05-02 13:00',
                    venue: 'WTA Baku Cup',
                    score: '3-0',
                    competing: [
                        { name: 'Linda Carter', img: '/images/matches/player-4-420x420.jpg' }, 
                        { name: 'Lisa Brooks', img: '/images/matches/image-21-420x420.jpg' }
                    ]
                }
            }
        }
    },
    getters: {
        getWelcome: (state) => state.welcome,
        getNextMatchReviews: (state) => state.match_reviews.next,
        getLatestMatchReviews: (state) => state.match_reviews.latest,
    },
    mutations: {},
    actions: {}
}

export default homeModule