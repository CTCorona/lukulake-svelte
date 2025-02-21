import { render, screen } from '@testing-library/svelte'
import { describe, it, expect } from 'vitest'
import InputTest from './input.test.svelte'

describe('Input', () => {
  it('renders text input with label', () => {
    render(InputTest, { 
      label: 'Name',
      type: 'text',
      id: 'name',
      placeholder: 'Enter name'
    })

    const label = screen.getByText('Name')
    const input = screen.getByPlaceholderText('Enter name')

    expect(label).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('id', 'name')
  })

  it('renders textarea with label', () => {
    render(InputTest, {
      label: 'Message',
      type: 'textarea',
      id: 'message',
      placeholder: 'Enter message'
    })

    const label = screen.getByText('Message')
    const textarea = screen.getByPlaceholderText('Enter message')

    expect(label).toBeInTheDocument() 
    expect(textarea.tagName).toBe('TEXTAREA')
    expect(textarea).toHaveAttribute('id', 'message')
  })

  it('applies correct styles to text input', () => {
    render(InputTest, {
      label: 'Email',
      type: 'text',
      id: 'email'
    })

    const input = screen.getByRole('textbox')
    
    expect(input).toHaveClass('w_full px_4 py_3')
  })

  it('applies correct styles to textarea', () => {
    render(InputTest, {
      label: 'Bio',
      type: 'textarea',
      id: 'bio'
    })

    const textarea = screen.getByRole('textbox')
    
    expect(textarea).toHaveClass('w_full px_4 py_3')
    expect(textarea).toHaveClass('resize_none')
  })
}) 