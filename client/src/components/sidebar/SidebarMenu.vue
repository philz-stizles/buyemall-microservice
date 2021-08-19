<template>
  <ul class="sidebar-menu">
    <SidebarMenuItem
      v-for="menuItem in menuBlueprint"
      :key="menuItem.label"
      :menuItem="menuItem"
    />
  </ul>
</template>

<script>
import SidebarMenuItem from '@/components/sidebar/SidebarMenuItem'

export default {
  name: 'SidebarMenu',
  components: { SidebarMenuItem },
  props: ['menuBlueprint'],
}
</script>

<style>
.sidebar-menu {
  list-style: none;
}
</style>
