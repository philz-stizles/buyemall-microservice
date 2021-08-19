<template>
  <div class="dashboard">
    <Sidebar :menuBlueprint="menuBlueprint" />
    <!-- <NewspaperIcon class="w-10 h-10" /> -->
    <div class="main">
      <DashboardNav />
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar/Sidebar'
import DashboardNav from '@/components/dashboard/DashboardNav'

export default {
  name: 'DashboardHome',
  components: { Sidebar, DashboardNav },
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
        { label: 'customers', to: 'Orders', icon: 'user-group-icon' },
        { label: 'audit', to: 'Orders', icon: 'shield-exclamation-icon' },
        { label: 'settings', to: 'Orders', icon: 'cog-icon' },
      ],
    }
  },
}
</script>

<style>
.dashboard {
  min-height: 100vh;
  position: relative;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
}

.dashboard .main {
  background-color: #f5f6f7;
  overflow: auto;
  position: relative;
  z-index: 2;
  width: calc(100% - 260px);
  min-height: 100%;
  max-height: 100%;
  height: 100%;
  transition-property: top, bottom, width;
  transition-duration: 0.2s, 0.2s, 0.35s;
  transition-timing-function: linear, linear, ease;
}

.dashboard .content {
  padding: 3rem;
}
</style>
