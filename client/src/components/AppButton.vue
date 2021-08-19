<template>
  <button
    class="
      custom-button
      group
      relative
      w-full
      flex
      justify-center
      py-2
      px-4
      border border-transparent
      text-sm
      font-medium
      rounded-md
      text-white
      bg-indigo-600
      hover:bg-indigo-700
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
    "
    :class="[color ? color : '', expanded ? 'expanded' : '']"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: ['type', 'disabled', 'loading', 'color', 'mode', 'expanded'],
}
</script>

<style>
.custom-button {
  background: #7b2cbf;
  color: #fff;
  border: 2px solid transparent;
}

.custom-button.primary {
  background: #7b2cbf !important;
  color: #fff !important;
}

.custom-button.primary-outlined {
  background: #fff;
  border-color: #7b2cbf !important;
  color: #7b2cbf !important;
}

.custom-button.secondary {
  background: #240046 !important;
  color: #fff;
}

.custom-button.secondary-outlined {
  background: #fff;
  border-color: #240046 !important;
  color: #240046 !important;
}

.custom-button.expanded {
  width: 100%;
}
</style>
