import { vi } from 'vitest'

export const mockMotion = {
	animate: vi.fn(),
	inView: vi.fn((element, callback) => {
		callback({ target: element })
		return vi.fn()
	}),
	scroll: vi.fn().mockImplementation(() => vi.fn())
}
