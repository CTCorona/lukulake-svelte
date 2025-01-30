import { render, screen } from '@testing-library/svelte'
import { describe, it, expect, vi } from 'vitest'
import AnimationTest from './animation.test.svelte'
import AnimationWithDelay from './animation-w-delay.test.svelte'
import { animate } from 'motion'

vi.mock('motion', () => ({
	inView: vi.fn((element, callback) => {
		callback({ target: element })
		return vi.fn()
	}),
	animate: vi.fn()
}))

describe('Animation', () => {
	test('renders children content', () => {
		render(AnimationTest)

		const text = screen.getByText('Test Content')

		expect(text).toBeInTheDocument()
	})

	it('applies correct wrapper classes', () => {
		const { container } = render(AnimationTest)

		const wrapper = container.querySelector('.animation-wrapper')
		expect(wrapper).toHaveClass('animation-wrapper')

		const child = container.querySelector('.animation-child')
		expect(child).toHaveClass('animation-child')
	})

	it('accepts delay prop', () => {
		const { container } = render(AnimationWithDelay)

		const child = container.querySelector('.animation-child')

		expect(child).toHaveClass('animation-child')
		expect(vi.mocked(animate)).toHaveBeenCalledWith(
			expect.any(Element),
			{ y: ['100%', 0] },
			{ duration: 0.5, delay: 0.5 }
		)
	})
})
