<script lang="ts">
  import Input, { type InputProps } from '../input.svelte'
  
  const { label, type, id, placeholder }: InputProps = $props()
</script>

<Input {label} {type} {id} {placeholder} /> 