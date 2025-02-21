<script lang="ts">
	import { sva } from 'styled-system/css'

	export type InputProps = Partial<HTMLInputElement> & {
		label: string
	}

	const inputStyle = sva({
		slots: ['label', 'input', 'textarea'],
		base: {
			label: {
				w: 'full',
				fontSize: 'sm',
				fontWeight: 'bold'
			},
			input: {
				w: 'full',
				px: 4,
				py: 3,
				outlineOffset: '2px',
				outlineColor: 'primary',
				bgColor: 'gray.100/75',
				rounded: 'sm',
				fontSize: 'sm',
				_placeholder: {
					fontSize: 'sm',
					fontWeight: 'bold'
				}
			},
			textarea: {
				w: 'full',
				px: 4,
				py: 3,
				outlineOffset: '2px',
				resize: 'none',
				outlineColor: 'primary',
				fontSize: 'sm',
				h: 40,
				bgColor: 'gray.100/75',
				_placeholder: {
					fontSize: 'sm',
					fontWeight: 'bold'
				}
			}
		}
	})

	const { id, name, placeholder, label, type, value }: InputProps = $props()
</script>

<label class={inputStyle().label} for={id}>{label}</label>
{#if type === 'textarea'}
	<textarea class={inputStyle().textarea} {id} {name} {placeholder}></textarea>
{:else if type === 'text'}
	<input class={inputStyle().input} {type} {id} {name} {placeholder} />
{/if}
