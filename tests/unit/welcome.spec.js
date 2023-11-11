import { shallowMount } from "@vue/test-utils"
import Welcome from "@/components/home/Welcome"

describe('Test display text', () => {
    it('Show welcome text', () => {
        const wrapper = shallowMount(Welcome)
        expect(wrapper.find('.box h2').text()).toContain('Welcome')
    })

    it('Show subtext h4', () => {
        const wrapper = shallowMount(Welcome)
        expect(wrapper.find('.box h4').text()).toContain('To Our Tennis Club')
    })
})