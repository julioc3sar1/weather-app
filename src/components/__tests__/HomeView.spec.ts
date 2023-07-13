
import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

import { setActivePinia, createPinia } from 'pinia'
import { useWeatherStore } from '@/stores/weather'
import { usePositionStore } from '@/stores/position'

describe('HomeView', () => {
    beforeEach(() => {
        // setActivePinia(createPinia())
    })

    it('renders properly', () => {
        // const wrapper = mount(HomeView)
        // expect(wrapper).toBeDefined()
    })
})