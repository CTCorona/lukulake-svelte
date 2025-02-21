import { render, screen } from '@testing-library/svelte'
import { describe, it, expect } from 'vitest'
import HeadingTest from './heading.test.svelte'

describe('Heading', () => {
	it('renders children content', () => {
		render(HeadingTest)
		const heading = screen.getByRole('heading', { name: 'Test Heading' })
		expect(heading).toBeInTheDocument()
	})

	it('renders as h2 by default', () => {
		render(HeadingTest)
		const heading = screen.getByRole('heading', { level: 2 })
		expect(heading).toBeInTheDocument()
	})

	it('renders with custom heading tag when specified', () => {
		render(HeadingTest, { tag: 'h1' })
		const heading = screen.getByRole('heading', { level: 1 })
		expect(heading).toBeInTheDocument()
	})

	it('applies gutter bottom margin when specified', () => {
		render(HeadingTest, { gutterBottom: true })
		const heading = screen.getByRole('heading')
		expect(heading).toHaveClass('mb_10')
	})
})
