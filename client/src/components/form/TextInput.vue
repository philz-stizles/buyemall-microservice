<template>
  <div>
    <label :for="name" class="sr-only">{{ label }}</label>
    <div v-if="type === 'textarea'">
      <textarea
        :name="name"
        :id="name"
        @input="onInput"
        @change="onChange"
        :placeholder="placeholder"
        class="
          appearance-none
          rounded-none
          relative
          block
          w-full
          px-3
          py-2
          border border-gray-300
          placeholder-gray-500
          text-gray-900
          rounded-t-md
          focus:outline-none
          focus:ring-indigo-500
          focus:border-indigo-500
          focus:z-10
          sm:text-sm
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
        appearance-none
        rounded-none
        relative
        block
        w-full
        px-3
        py-2
        border border-gray-300
        placeholder-gray-500
        text-gray-900
        rounded-t-md
        focus:outline-none
        focus:ring-indigo-500
        focus:border-indigo-500
        focus:z-10
        sm:text-sm
      "
    />
    <span v-if="error" class="error-feedback">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
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
  },
}
</script>

<style></style>
