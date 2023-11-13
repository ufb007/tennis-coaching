import { mount, RouterLinkStub } from '@vue/test-utils'
import Menu from '@/components/header/Menu'
import store from '@/store'

jest.mock('vue-router', () => ({
    useRoute: jest.fn(() => ({ name: 'Home' }))
}))

describe('Display menu and router links', () => {
    const wrapper = mount(Menu, {
        global: {
            plugins: [store],
            provide: {
                'SvgIcon': 'SvgIcon'
            },
            stubs: {
                RouterLink: RouterLinkStub
            }
        }
    })

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

    it('Click trigger of burger menu bar', async () => {
        const sideMenuOpen = jest.spyOn(wrapper.vm, 'sideMenuOpen');
        
        await wrapper.find('.burger-menu').trigger('click')
        expect(sideMenuOpen).toHaveBeenCalled()
    })
})