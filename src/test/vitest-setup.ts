import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/svelte'
import { afterEach } from 'vitest'
import { mockMotion } from './mocks/animation-mocks'

vi.mock('motion', () => mockMotion)

// Clean up after each test
afterEach(() => {
	cleanup()
	vi.clearAllMocks()
})
