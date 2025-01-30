import { render, screen } from '@testing-library/svelte'
import { describe, it, expect } from 'vitest'
import ButtonTest from './button.test.svelte'
import ButtonSecondaryTest from './button-secondary.test.svelte'

describe('Button', () => {
	it('renders children content', () => {
		render(ButtonTest)

		const button = screen.getByRole('button', { name: 'Test Button' })

		expect(button).toBeInTheDocument()
	})

	it('applies primary variant styles by default', () => {
		render(ButtonTest)

		const button = screen.getByRole('button')

		expect(button).toHaveClass('c_white bg-c_primary hover:bg-c_primary')
	})

	it('applies secondary variant styles when specified', () => {
		render(ButtonSecondaryTest)

		const button = screen.getByRole('button')

		expect(button).toHaveClass('c_white bg-c_secondary hover:bg-c_secondary')
	})

	it('forwards HTML button attributes', () => {
		render(ButtonTest)

		const button = screen.getByRole('button')

		expect(button).toHaveAttribute('type', 'submit')
		expect(button).toHaveAttribute('aria-label', 'Test Button')
	})
})
