import { defineConfig } from 'vitest/config'
import { sveltekit } from '@sveltejs/kit/vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import { svelteTesting } from '@testing-library/svelte/vite'

export default defineConfig({
	resolve: process.env.VITEST ? { conditions: ['browser'] } : undefined,
	plugins: [enhancedImages(), sveltekit(), svelteTesting()],
	server: {
		fs: {
			allow: ['styled-system']
		}
	},
	test: {
		globals: true,
		include: ['src/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom',
		setupFiles: ['./vitest-setup.ts'],
		coverage: {
			provider: 'v8',
			include: ['src/**/*.{ts,js,svelte}'],
			exclude: [
				'src/lib/assets/**',
				'src/modules/**',
				'src/**/__tests__/**',
				'src/**/*.d.ts',
				'src/**/types/**'
			]
		}
	}
})
