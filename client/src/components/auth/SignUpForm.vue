<template>
  <form @submit.prevent="handleSignUp"></form>
</template>

<script>
export default {
  name: 'SignUpForm',
  data() {
    return {
      isLoading: false,
      message: '',
      signUpForm: {
        name: '',
        username: '',
        password: '',
      },
    }
  },
  methods: {
    handleSignUp() {
      this.isLoading = true
      this.$store.dispatch('auth/signUp', this.signUpForm).then(
        () => {
          this.$router.push('/profile')
        },
        error => {
          this.loading = false
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        }
      )
    },
  },
}
</script>

<style></style>
