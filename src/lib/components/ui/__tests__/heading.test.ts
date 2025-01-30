import { render, screen } from '@testing-library/svelte'
import { describe, it, expect } from 'vitest'
import HeadingTest from './heading.test.svelte'
import HeadingH1Test from './heading-h1.test.svelte'
import HeadingGutterTest from './heading-gutter.test.svelte'

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
    render(HeadingH1Test)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('applies gutter bottom margin when specified', () => {
    render(HeadingGutterTest)
    const heading = screen.getByRole('heading')
    expect(heading).toHaveClass('mb_10')
  })
}) 