import { createStore } from "vuex";
import storeModule from "@/store";

describe('Store module', ()=> {
    let store

    beforeEach(()=> {
        store = createStore(storeModule)
    })

    it('Test testimonials', ()=> {
        console.log('Testimonials - ', store.state.testimonials)

       // expect(Array.isArray(store.state.testimonials.list)).toBeTruthy()
    })
})