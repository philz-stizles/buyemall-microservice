<template>
  <div class="signup">
    <!-- <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      /> -->
    <SignUpForm />
  </div>
</template>

<script>
import { mapGetters } from 'vue'
import SignUpForm from '@/components/form/SignUpForm'

export default {
  name: 'SignUp',
  components: { SignUpForm },
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
