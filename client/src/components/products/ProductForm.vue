<template>
  <form @submit.prevent="handleSubmitForm">
    Product title
    <TextInput :name="productForm.title" />
  </form>
</template>

<script>
import TextInput from '@/components/form/TextInput'

export default {
  name: 'ProductForm',
  components: { TextInput },
  data() {
    return {
      categories: [],
      subcategories: [],
      productForm: {
        title: '',
        description: '',
        price: '',
      },
    }
  },
  mounted() {
    return
  },
  methods: {
    handleSubmitForm() {},
  },
}
</script>

<style></style>
