<template>
  <router-link
    :to="{ name: menuItem.to }"
    class="
      text-gray-300
      hover:bg-gray-700 hover:text-white
      px-3
      py-2
      rounded-md
      text-sm
      font-medium
    "
  >
    <component :is="menuItem.icon" class="h-5 w-5"></component>
    {{ menuItem.label }}
  </router-link>
</template>

<script>
export default {
  name: 'MenuItem',
  props: ['menuItem'],
}
</script>

<style>
.menu-item {
}
</style>
