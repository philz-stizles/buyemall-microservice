<template>
  <nav
    :class="{ block: open, hidden: !open }"
    class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto"
  >
    <SidebarMenuItem
      v-for="menuItem in menuBlueprint"
      :key="menuItem.label"
      :menuItem="menuItem"
    />
  </nav>
</template>

<script>
import SidebarMenuItem from './SidebarMenuItem'

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
