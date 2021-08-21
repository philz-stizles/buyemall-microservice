<template>
  <div
    class="
      signup
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-50
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-md w-full transform -translate-y-6">
      <div>
        <div class="logo-wrapper">
          <router-link :to="{ name: 'Home' }"
            ><img class="logo" src="@/assets/images/crown.svg" alt="app logo"
          /></router-link>
        </div>
        <h2 class="mt-6 text-center text-2xl font-bold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <SignInForm />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SignInForm from '@/components/auth/SignInForm'

export default {
  name: 'SignUp',
  components: { SignInForm },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
  created() {
    if (this.isAuthenticated) {
      this.$router.push({ name: 'Overview' })
    }
  },
}
</script>

<style>
.signup {
  background: #e9e8fa;
}

.signup .logo-wrapper {
  display: flex;
  justify-content: center;
}
</style>
