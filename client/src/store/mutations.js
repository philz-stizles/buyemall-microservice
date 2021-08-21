export default {
  openDrawer(state) {
    state.isDrawerOpen = true
  },
  closeDrawer(state) {
    state.isDrawerOpen = false
  },
  toggleDrawer(state) {
    state.isDrawerOpen = !state.isDrawerOpen
  },
}
