<template>
  <router-link
    :to="{ name: menuItem.to }"
    class="
      sidebar-menu-item
      px-4
      py-2
      rounded-md
      text-sm
      font-medium
      block
      mt-1
    "
    :class="
      isActive
        ? 'bg-gray-900 text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    "
  >
    <component :is="menuItem.icon" class="mr-2 h-5 w-5"></component>
    {{ capitalize(menuItem.label) }}
  </router-link>
</template>

<script>
import { capitalize } from '@/utils/typography'
export default {
  name: 'SidebarMenuItem',
  props: ['menuItem'],
  methods: {
    capitalize,
  },
  computed: {
    isActive() {
      return (
        this.$route.name.toLowerCase() === this.menuItem.label.toLowerCase()
      )
    },
  },
}
</script>

<style>
.sidebar-menu-item svg {
  display: inline-block;
}

.sidebar-menu-item.router-link-exact-active {
  /* background: #7b2cbf;
  border-radius: 7px;
  padding: 0.8rem 1.6rem;
  color: #fff; */
}
</style>
