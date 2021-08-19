<template>
  <li class="sidebar-menu-item">
    <router-link :to="{ name: menuItem.to }" class="sidebar-menu-link">
      <component :is="menuItem.icon" class="h-5 w-5"></component>
      <!-- <i :class="menuItem.icon"></i> -->
      <p>{{ menuItem.label }}</p>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'SidebarMenuItem',
  props: ['menuItem'],
}
</script>

<style>
.sidebar-menu-item {
  position: relative;
  display: block;
  padding: 0.8rem 2.4rem;
}

.sidebar-menu-link {
  display: flex;
  align-items: center;
  color: #66615b;
  /* padding: 0.8rem 2.4rem; */
  opacity: 0.7;
  white-space: nowrap;
  transition: all 0.3s;
}

.sidebar-menu-link p {
  line-height: 30px;
  font-weight: 500;
  text-transform: capitalize;
  position: relative;
  transform: translateZ(0);
  opacity: 1;
  display: block;
  height: auto;
  white-space: nowrap;
}

.sidebar-menu-link svg {
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 1.5rem;
}

.sidebar-menu-link.router-link-exact-active {
  background: #7b2cbf;
  border-radius: 7px;
  padding: 0.8rem 1.6rem;
  color: #fff;
}
</style>
