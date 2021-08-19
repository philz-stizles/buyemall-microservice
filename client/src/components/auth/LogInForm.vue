<template>
  <form @submit.prevent="handleLogin">
    <div class="title">
      <h1>Welcome back!</h1>
      <p>Please login using your account</p>
    </div>
    <TextInput label="Username" :value="signUpForm.username" />
    <TextInput label="Password" :value="signUpForm.password" />
    <Button>Login</Button>
    <p class="actions">
      <span>Forgot your password?</span>
      <span class="reset">Reset password</span>
    </p>
    <app-button color="secondary">Create an account</app-button>
  </form>
</template>

<script>
import TextInput from '@/components/form/TextInput'

export default {
  name: 'LogInForm',
  components: { TextInput },
  data() {
    return {
      isLoading: false,
      message: '',
      logInForm: {
        username: '',
        password: '',
      },
      isFormValid: true
    }
  },
  methods: {
    handleLogin() {
      this.isLoading = true
      this.$store.dispatch('auth/signUp', this.logInForm).then(
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
