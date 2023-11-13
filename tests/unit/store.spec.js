import { createStore } from "vuex";
import store from "@/store";

describe('Store module', ()=> {
    it('Test testimonials', ()=> {
        console.log('Testimonials - ', store.state.testimonials)

       expect(Array.isArray(store.state.testimonials.list)).toBeTruthy()
    })

    it('Check testimonial count which should be 3', () => {
        expect(store.state.testimonials.list.length).toEqual(3)
    })

    it('Add a tesitmonial with mutation and check length', ()=> {
        store.commit('addTestimonial', {
            message: "Here is my testimony. This site is great",
            name: 'Ufuk Bozdemir, developer'
        })

        expect(store.state.testimonials.list.length).toEqual(4)
    })
})