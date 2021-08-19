<template>
  <form class="mt-8 space-y-6 signup-form" @submit.prevent="handleSignUp">
    <div class="rounded-md shadow-sm -space-y-px">
      <TextInput
        label="FullName"
        placeholder="Full name"
        :value="signUpForm.fullname"
        @onInput="handleInput($event)"
        @onChange="handleChange($event)"
      />
      <TextInput
        label="Email"
        placeholder="Email"
        :value="signUpForm.email"
        @onInput="handleInput($event)"
        @onChange="handleChange($event)"
      />
      <TextInput
        type="password"
        label="Password"
        placeholder="Password"
        :value="signUpForm.password"
        @onInput="handleInput($event)"
        @onChange="handleChange($event)"
      />

      <TextInput
        type="password"
        label="Password"
        placeholder="Password"
        :value="signUpForm.password"
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
      <app-button color="primary" :expanded="true"
        ><span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <!-- Heroicon name: solid/lock-closed -->
          <svg
            class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        Create Account</app-button
      >
    </div>
  </form>
</template>

<script>
import TextInput from '@/components/form/TextInput'

export default {
  name: 'SignUpForm',
  components: { TextInput },
  data() {
    return {
      isLoading: false,
      message: '',
      signUpForm: {
        fullname: 'Theophilus',
        email: 'theophilus@gmail.com',
        password: '12345678',
      },
      formIsValid: true,
    }
  },
  methods: {
    handleSignUp() {
      console.log(this.signUpForm)
      this.formIsValid = true
      if (!this.checkFormIsValid(this.signUpForm)) {
        this.formIsValid = false
        return
      }

      this.isLoading = true
      this.$store.dispatch('auth/signUp', this.signUpForm).then(
        () => {
          this.isLoading = false
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
    checkFormIsValid({ fullname, email, password }) {
      return (fullname !== '' && email.includes('@')) || password.length >= 6
    },
    handleInput({ name, value }) {
      console.log(name, value)
      this.signUpForm[name] = value
    },
    handleChange(target) {
      console.log(target.value)
    },
  },
}
</script>

<style></style>
