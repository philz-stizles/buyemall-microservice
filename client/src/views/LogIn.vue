<template>
  <div class="login">
    <!-- <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      /> -->
    <LogInForm />
  </div>
</template>

<script>
import LogInForm from '@/components/form/LogInForm'
import { mapGetters } from 'vue'

export default {
  name: 'LogIn',
  components: { LogInForm },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
  created() {
    if (this.isAuthenticated) {
      this.$router.push({ name: 'Profile' })
    }
  },
}
</script>

<style></style>
