<template>
  <form class="category-form" @submit.prevent="handleSubmit">
    <text-input
      label="title"
      :value="categoryForm.title"
      @input="onInput"
      @change="onChange"
    />
    <text-input
      type="textarea"
      label="description"
      :value="categoryForm.description"
      @input="onInput"
      @change="onChange"
    />
    <app-button>Create Category <i class="fa fa-plus"></i></app-button>
  </form>
</template>

<script>
import TextInput from '@/components/form/TextInput'

export default {
  name: 'CategoryCreate',
  components: { TextInput },
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

<style>
.category-form {
  box-shadow: 0 6px 10px -4px rgb(0 0 0 / 15%);
  background: #fff;
  width: 50%;
  border-radius: 7px;
  padding: 3rem 3rem 1rem 3rem;
}
</style>
