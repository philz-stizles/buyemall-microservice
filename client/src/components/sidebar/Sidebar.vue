<template>
  <div class="sidebar">
    <div class="header">
      <Centered>
        <Logo />
      </Centered>
    </div>
    <div class="body">
      <SidebarMenu :menuBlueprint="menuBlueprint" />
    </div>
    <div class="footer">
      <button><LogoutIcon class="h-5 w-5" /> <span>log out</span></button>
    </div>
  </div>
</template>

<script>
import { LogoutIcon } from '@heroicons/vue/outline'
import Centered from '@/components/Center'
import Logo from '@/components/Logo'
import SidebarMenu from '@/components/sidebar/SidebarMenu'

export default {
  name: 'Sidebar',
  props: ['menuBlueprint'],
  components: { LogoutIcon, Centered, Logo, SidebarMenu },
}
</script>

<style>
.sidebar {
  background: #ffffff;
  max-height: 100%;
  height: 100%;
  width: 260px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  overflow: hidden;
  overflow-y: auto;
  transition-property: top, bottom, width;
  transition-duration: 0.2s, 0.2s, 0.35s;
  transition-timing-function: linear, linear, ease;
}

.sidebar .header {
  padding: 2rem 0;
}

.sidebar .body {
  padding: 2rem 0;
  flex: 1;
}

.sidebar .footer {
  padding: 4rem 2.5rem;
}

.sidebar .footer button {
  display: flex;
  align-items: center;
  text-transform: capitalize;
  cursor: pointer;
}

.sidebar .footer button svg {
  width: 2.4rem;
  margin-right: 1.5rem;
}
</style>
