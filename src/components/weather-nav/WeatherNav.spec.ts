import { it, expect, describe, beforeEach, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import WeatherNavVue from './WeatherNav.vue'

import { setActivePinia, createPinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { usePositionStore } from '@/stores/position'
import { nextTick } from 'vue'

describe('WeatherNav', () => {

    setActivePinia(createPinia())
    const wrapper = mount(WeatherNavVue, {
        props: {
            isActive: false,
        },
        global: {
            plugins: [createTestingPinia({
                initialState: {
                    position: {
                        locations: []
                    }
                },
                createSpy: vi.fn(),
                // stubActions: false
            })]
        }
    })
    const positionStore = usePositionStore()

    beforeEach(async () => {

    })

    it('Nav not to contain !left-0 class', () => {
        // const nav = wrapper.find()
        expect(wrapper.classes('!left-0')).toBe(false)
    })

    it('Button Should emit closeNav Event', () => {
        wrapper.find('button').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('closeNav')
    })

    it('Locations search results do not render', () => {
        expect(wrapper.find('#locations_result').exists()).toBe(false)
    })

    it('Locations search results exists if locations > 0', async () => {
        positionStore.locations = [
            {
                country: "Venezuela",
                lat: 50,
                lon: -10,
                name: "Paraguachi",
                state: "Nueva Esparta"
            }
        ]
        await flushPromises()
        expect(wrapper.find('#locations_result').exists()).toBe(true)
    })

    it('Text should be displayed if no search is active', async () => {
        positionStore.locations = []
        await nextTick()
        expect(wrapper.find('p').exists()).toBe(true)
    })

    it('getGeoLocations fn should be called when search is not empty', async () => {
        vi.spyOn(positionStore, 'getGeoLocations')
        wrapper.find('input').setValue('porlamar')
        const searchButton = wrapper.find('[data-test=search]')
        await searchButton.trigger('click')
        console.log(positionStore.locations)
        expect(positionStore.getGeoLocations).toHaveBeenCalled()
    })
})