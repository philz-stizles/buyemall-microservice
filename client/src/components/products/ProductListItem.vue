<template>
  <h1>CategoryListItem</h1>
</template>

<script>
export default {
  name: 'ProductListItem',
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  // emits: ['delete-category'], // emits - we define which custom event this component can emit.
  // This is recommended, but not required. We do this for documentation purposes
  emits: {
    'delete-category': function (id) {
      if (id) {
        return true
      } else {
        console.warn('Id is missing')
        return false
      }
    },
  },
  methods: {
    deleteCategory() {
      this.$emit('delete-category', this.category.id)
    },
  },
}
</script>

<style></style>
