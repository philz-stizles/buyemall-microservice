<template>
  <form class="mt-8 space-y-6 signup-form" @submit.prevent="handleSubmit">
    <div class="rounded-md shadow-sm -space-y-px">
      <TextInput
        label="Email"
        placeholder="Email"
        :value="formInputs.email"
        @onInput="handleInput($event)"
        @onChange="handleChange($event)"
      />
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          class="
            h-4
            w-4
            text-indigo-600
            focus:ring-indigo-500
            border-gray-300
            rounded
          "
        />
        <label for="remember-me" class="ml-2 block text-sm text-gray-900">
          Remember me
        </label>
      </div>

      <div class="text-sm">
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          Forgot your password?
        </a>
      </div>
    </div>
    <div>
      <app-button color="primary" :expanded="true" :isLoading="isLoading">
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <lock-closed-icon class="h-5 w-5" />
        </span>
        Create Account</app-button
      >
    </div>
  </form>
</template>

<script>
import TextInput from '@/components/form/TextInput'

export default {
  name: 'ForgotPasswordForm',
  components: { TextInput },
  data() {
    return {
      isLoading: false,
      message: '',
      formInputs: {
        fullname: 'Theophilus',
        email: 'theophilus@gmail.com',
        password: '12345678',
      },
      formIsValid: true,
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.formInputs)
      this.formIsValid = true
      if (!this.checkFormIsValid(this.formInputs)) {
        this.formIsValid = false
        return
      }

      this.isLoading = true
      this.$store.dispatch('auth/signUp', this.formInputs).then(
        () => {
          this.isLoading = false
          this.$router.push('/profile')
        },
        error => {
          this.isLoading = false
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        }
      )
    },
    checkFormIsValid({ fullname, email, password }) {
      return (fullname !== '' && email.includes('@')) || password.length >= 6
    },
    handleInput({ name, value }) {
      console.log(name, value)
      this.formInputs[name] = value
    },
    handleChange(target) {
      console.log(target.value)
    },
  },
}
</script>

<style></style>
