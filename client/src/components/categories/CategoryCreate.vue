<template>
  <form class="category-form" @submit.prevent="handleSubmit">
    <app-text-input
      label="Name"
      :value="categoryForm.title"
      @input="onInput"
      @change="onChange"
    />
    <app-text-input
      label="Description"
      type="textarea"
      :value="categoryForm.title"
      @input="onInput"
      @change="onChange"
    />
  </form>
</template>

<script>
// import TextInput from '@/components/form/TextInput'

export default {
  name: 'CategoryCreate',
  // components: { TextInput },
  data() {
    return {
      categoryForm: {
        title: '',
        description: '',
      },
    }
  },
  methods: {
    onInput(target) {
      this.categoryForm[target.name] = target.value
    },
    // onChange(target) {
    //   console.log(target)
    // },
    handleSubmit() {
      this.$emit('create-category', this.categoryForm)
    },
  },
}
</script>

<style></style>
