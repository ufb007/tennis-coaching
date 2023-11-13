import { createStore } from "vuex";
import homeModule from "@/store/modules/HomeModule";

describe('Home Module', ()=> {
    let store

    beforeEach(()=> {
        store = createStore(homeModule)
    })

    it('Test welcome is an array', () => {
        expect(typeof store.state.welcome).toEqual('object')
    })

    it ('Get property names of welcome', ()=> {
        expect(Object.getOwnPropertyNames(store.state.welcome)).toEqual(['title', 'subtitle', 'description'])
    })
})