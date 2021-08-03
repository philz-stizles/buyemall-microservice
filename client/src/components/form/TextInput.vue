<template>
  <div class="text-input">
    <label for="username">Username</label>
    <input name="username" type="text" class="form-control" />
    <span v-if="error" class="error-feedback"></span>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: ['error'],
}
</script>

<style>
.text-input input {
  width: 100%;
}
</style>
