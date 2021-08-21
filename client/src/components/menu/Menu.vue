<template>
  <div class="hidden md:block">
    <div class="ml-10 flex items-baseline space-x-4">
      <MenuItem
        v-for="menuItem in menuBlueprint"
        :key="menuItem.label"
        :menuItem="menuItem"
      />
    </div>
  </div>
</template>

<script>
import MenuItem from '@/components/menu/MenuItem'

export default {
  name: 'Menu',
  components: { MenuItem },
  props: ['menuBlueprint'],
}
</script>

<style>
.sidebar-menu {
  list-style: none;
}
</style>
