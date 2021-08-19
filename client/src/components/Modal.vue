<template>
  <div class="backdrop">
    <div class="modal">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="body">
        <slot></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
}
</script>

<style></style>
