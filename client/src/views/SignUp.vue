<template>
  <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
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
    <div class="max-w-md w-full space-y-8">
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
      <SignUpForm />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SignUpForm from '@/components/auth/SignUpForm'

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

<style>
.signup {
  background: #e9e8fa;
}

.signup .logo-wrapper {
  display: flex;
  justify-content: center;
}
</style>
