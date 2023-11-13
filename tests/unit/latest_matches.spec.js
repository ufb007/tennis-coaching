import { mount } from "@vue/test-utils";
import LatestMatches from "@/components/matches/LatestMatches"
import store from "@/store";

describe('Latest played matches', ()=> {
    const wrapper = mount(LatestMatches, {
        global: {
            plugins: [store]
        }
    })

    it('Check date format', ()=> {
        expect(wrapper.vm.getDate('2024-05-02 13:00')).toEqual({day: '02', month: 'May', year: '2024'})
    })

    it('Check time format', ()=> {
        expect(wrapper.vm.getTime('2024-05-02 13:00')).toEqual('13:00')
    })

    it('Check if store latest match review is an object', ()=> {
        expect(typeof wrapper.vm.latest).toEqual('object')
    })
})