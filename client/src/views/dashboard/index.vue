<template>
  <div
    class="dashboard-home md:flex flex-col md:flex-row md:min-h-screen w-full"
  >
    <Sidebar :menuBlueprint="menuBlueprint" />
    <main class="bg-gray-100 p-10">
      <router-view></router-view>
    </main>
  </div>
  <app-drawer v-if="isDrawerOpen" title="Notifications"></app-drawer>
</template>

<script>
import Sidebar from '@/components/sidebar/Sidebar'

export default {
  name: 'DashboardHome',
  components: { Sidebar },
  data() {
    return {
      menuBlueprint: [
        {
          label: 'overview',
          to: 'Overview',
          icon: 'chart-pie-icon',
        },
        {
          label: 'categories',
          to: 'Categories',
          icon: 'view-grid-add-icon',
        },
        {
          label: 'products',
          to: 'Products',
          icon: 'shopping-bag-icon',
        },
        {
          label: 'coupons',
          to: 'Coupons',
          icon: 'gift-icon',
        },
        { label: 'orders', to: 'Orders', icon: 'shopping-cart-icon' },
        { label: 'customers', to: 'Customers', icon: 'user-group-icon' },
        { label: 'audit', to: 'Audit', icon: 'shield-exclamation-icon' },
        { label: 'settings', to: 'Settings', icon: 'cog-icon' },
        { label: 'profile', to: 'Profile', icon: 'cog-icon' },
      ],
    }
  },
  computed: {
    isDrawerOpen() {
      return this.$store.getters.getIsNotificationOpen
    },
  },
}
</script>

<style></style>
