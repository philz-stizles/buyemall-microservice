<template>
  <button
    class="
      inline-flex
      items-center
      px-4
      py-2
      border
      rounded-md
      shadow-sm
      text-sm
      font-medium
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
    "
    :class="[
      color ? color : '',
      expanded ? 'w-full relative flex justify-center' : '',
      outlined
        ? 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
        : 'border-transparent text-white bg-indigo-600 hover:bg-indigo-700',
    ]"
    :disabled="disabled"
  >
    <app-loader v-if="isLoading"></app-loader>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: ['isLoading', 'color', 'mode', 'expanded', 'outlined'],
}
</script>

<style></style>
