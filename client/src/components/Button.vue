<template>
  <button :disabled="disabled"><slot></slot></button>
</template>

<script>
export default {
  name: 'Button',
  props: ['disabled', 'loading'],
}
</script>

<style></style>
