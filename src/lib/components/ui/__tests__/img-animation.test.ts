import { render, screen } from '@testing-library/svelte'
import { describe, it, expect, vi } from 'vitest'
import ImgAnimationTest from './img-animation.test.svelte'
import { animate, scroll } from 'motion'

// Mock motion library
vi.mock('motion', () => ({
	animate: vi.fn(),
	scroll: vi.fn().mockImplementation(() => vi.fn())
}))

describe('ImgAnimation', () => {
	it('renders children content', () => {
		const { container } = render(ImgAnimationTest)
		const img = container.querySelector('img')

		expect(img).toBeInTheDocument()
		expect(img).toHaveAttribute('src', '/test-image.jpg')
		expect(img).toHaveAttribute('alt', 'Test image')
	})

	it('applies correct container styles', () => {
		const { container } = render(ImgAnimationTest)
		const wrapper = container.querySelector('.img-container')

		expect(wrapper).toHaveClass('img-container ov_hidden')
	})

	it('initializes scroll animation with correct parameters', () => {
		render(ImgAnimationTest)

		// First verify the animate call
		expect(animate).toHaveBeenCalledWith(
			expect.any(HTMLImageElement), 
			{ y: [-70, 70] }
		)

		// Then verify the scroll call
		expect(scroll).toHaveBeenCalledWith(
			undefined, // The first param is undefined since we're mocking the animate return
			{
				target: expect.any(HTMLImageElement),
				offset: ['start end', 'end start']
			}
		)
	})

	it('forwards additional props to container div', () => {
		const { container } = render(ImgAnimationTest)
		const wrapper = container.querySelector('.img-container')
		expect(wrapper).toHaveAttribute('data-testid', 'img-wrapper')
	})
})
