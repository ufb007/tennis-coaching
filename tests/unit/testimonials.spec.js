import { mount } from "@vue/test-utils";
import Testimonials from "@/components/home/Testimonials"
import store from "@/store";
import { watch } from "vue";

// test function for scroll to next testimonial
// test next and previous buttons 

//jest.useFakeTimers()

describe('Testing testimonials', ()=> {
    const wrapper = mount(Testimonials, {
        global: {
            plugins: [store],
            provide: {
                SvgIcon: 'SvgIcon'
            }
        }
    })

    it('Test function for scroll', ()=> {
        watch(wrapper.vm.testimonialsList, () => {
            expect(wrapper.vm.testimonialsList.length).toEqual(4)
        })
    })

    it('Button click events for scrolling testimonials', async ()=> {
        const scrollTestimonials = jest.spyOn(wrapper.vm, 'scrollTestimonials');
        
        await wrapper.find('button').trigger('click')
        expect(wrapper.vm.scrollTestimonials).toHaveBeenCalled()
    })
})