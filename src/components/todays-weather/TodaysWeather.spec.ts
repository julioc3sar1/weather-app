import { it, describe, expect, vi } from 'vitest'
import TodaysWeather from './TodaysWeather.vue'
import { createPinia, setActivePinia } from 'pinia'
import { mount } from '@vue/test-utils'

import { usePositionStore } from '@/stores/position'
import { createTestingPinia } from '@pinia/testing'


describe('TodaysWeather', () => {
    setActivePinia(createPinia())
    const wrapper = mount(TodaysWeather, {
        props: {
            weather: {
                weather: [{
                    main: ''
                }],
                main: {}
            }
        },
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn()
                }),
            ]
        }
    })
    const positionStore = usePositionStore()
    it('should emit openNav event when click "search for places" button', () => {
        wrapper.find('button').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('openNav')
    })

    it('should execute "setCurrentCoords" store action when click', async () => {
        vi.spyOn(positionStore, 'setCurrentCoords')
        const currentLocationButton = wrapper.find('[data-test=current]')
        await currentLocationButton.trigger('click')
        expect(positionStore.setCurrentCoords).toBeCalled()
    })
})