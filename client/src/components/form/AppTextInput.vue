<template>
  <div class="mt-3">
    <label :for="name" class="block text-sm font-medium text-gray-700">{{
      capitalize(label)
    }}</label>
    <div v-if="type === 'textarea'">
      <textarea
        :name="name"
        :id="name"
        @input="onInput"
        @change="onChange"
        :placeholder="placeholder"
        class="
          mt-1
          focus:ring-indigo-500 focus:border-indigo-500
          block
          w-full
          shadow-sm
          sm:text-sm
          border-gray-300
          rounded-md
        "
      ></textarea>
    </div>
    <input
      v-else
      :type="type"
      :name="name"
      :id="name"
      :value="value"
      @input="onInput"
      @change="onChange"
      :placeholder="placeholder"
      class="
        mt-1
        focus:ring-indigo-500 focus:border-indigo-500
        block
        w-full
        shadow-sm
        sm:text-sm
        border-gray-300
        rounded-md
      "
    />
    <span v-if="error" class="error-feedback">{{ error }}</span>
  </div>
</template>

<script>
import { capitalize } from '../../utils/typography'

export default {
  name: 'AppTextInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
    error: {
      type: String,
      default: '',
    },
  },
  computed: {
    name() {
      return this.label.toLowerCase()
    },
  },
  methods: {
    onInput(event) {
      // console.log(event.target)
      this.$emit('onInput', event.target)
    },
    onChange(event) {
      // console.log(event.target)
      this.$emit('onChange', event.target)
    },
    capitalize,
  },
}
</script>

<style scoped>
[multiple],
[type='date'],
[type='datetime-local'],
[type='email'],
[type='month'],
[type='number'],
[type='password'],
[type='search'],
[type='tel'],
[type='text'],
[type='time'],
[type='url'],
[type='week'],
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  /* border-color: #6b7280;
  border-width: 1px; */
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
}
</style>
