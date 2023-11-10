import { mount } from '@vue/test-utils'
import Menu from '@/components/header/Menu'

// get reactive array from menu
// check if is array
// check array contents are correct
// check links are correct
// check rendered in vue DOM element

describe('Display menu and router links', () => {
    const wrapper = mount(Menu)
    it('Check menu is array', () => {
        expect(Array.isArray(wrapper.vm.menu)).toBeTruthy()
    })

    it('Check name values in menu', () => {
        expect(wrapper.vm.menu.map(value => value.name)).toEqual(['Home', 'Pages', 'Membership', 'Lessons', 'News', 'Contact'])
    })

    it ('Check links in menu array', () => {
        expect(wrapper.vm.menu.map(value => value.link)).toEqual(['/', '/pages', '/membership', '/lessons', '/news', '/contact'])
    })

    it('Check render in vue DOM element', () => {
        expect(wrapper.find('ul').html()).toContain('HOME' && 'PAGES' && 'MEMBERSHIP' && 'LESSONS' && 'NEWS' && 'CONTACT')
    })
})