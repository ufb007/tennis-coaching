import { mount } from "@vue/test-utils"
import Welcome from "@/components/home/Welcome"
import store from "@/store"

describe('Test display text', () => {
    const wrapper = mount(Welcome, {
        global: {
            plugins: [store]
        }
    })

    const { title, subtitle } = store.getters.getWelcome;

    it('Show welcome text', () => {
        expect(wrapper.find('.box h2').text()).toContain(title)
    })

    it('Show subtext h4', () => {
        expect(wrapper.find('.box h4').text()).toContain(subtitle)
    })
})