import { mount } from "@vue/test-utils";
import Testimonials from "@/components/home/Testimonials"
import store from "@/store";

// test function for scroll to next testimonial
// test next and previous buttons 

jest.useFakeTimers()

describe('Testing testimonials', async ()=> {
    const wrapper = mount(Testimonials, {
        global: {
            plugins: [store]
        }
    })

    it('Test function for scroll', ()=> {
        jest.advanceTimersByTime(5000)

        wrapper.vm.$nextTick()

        console.log('show this after 2 seconds')

        //expect(wrapper.vm.scrollTestimonials).
    })
})