<template>
  <div class="center">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Center',
}
</script>

<style>
.center {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
