import { mount } from "@vue/test-utils";
import MatchReviews from '@/components/home/MatchReviews';
import store from '@/store'

// Check if array on Next Matches
// Check date format
// Check name of title in div
// Test getDateTime method
// Test getTime method

describe('Testing Match reviews component', () => {
    const wrapper = mount(MatchReviews, {
        global: {
            plugins: [store]
        }
    })

    it('Check array next matches list exists and is an array', () => {
        expect(Array.isArray(wrapper.vm.nextMatches.list)).toBeTruthy()
    })

    it('Check date format of 2024-05-02 13:00', ()=> {
        expect(wrapper.vm.getDateTime('2024-10-02 13:00')).toEqual({day: '02', month: 'Oct', year: '2024'})
    })

    it('Check and seperate time with intl', ()=> {
        expect(wrapper.vm.getTime('2024-10-02 13:00')).toEqual('13:00')
    })
})