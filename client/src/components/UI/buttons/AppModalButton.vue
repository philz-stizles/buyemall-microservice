<template>
  <button
    class="
      mt-3
      w-full
      inline-flex
      justify-center
      rounded-md
      border
      shadow-sm
      px-4
      py-2
      text-base
      font-medium
      focus:outline-none focus:ring-2 focus:ring-offset-2
      sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
    "
    :class="[
      color ? color : '',
      expanded ? 'expanded' : '',
      outlined
        ? 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500'
        : 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
    ]"
    :disabled="disabled"
  >
    <app-loader v-if="isLoading"></app-loader>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  name: 'AppModalButton',
  props: ['isLoading', 'color', 'mode', 'expanded', 'outlined'],
}
</script>

<style></style>
