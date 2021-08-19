<template>
  <div class="categories-view">
    <div class="header">
      <h1 class="title">Categories</h1>
    </div>
    <category-create @create-category="createCategory" />
    <CategoryListItem
      v-for="category in categories"
      :category="category"
      :key="category.id"
      @delete-category="deleteCategory"
    />
  </div>
</template>

<script>
import CategoryListItem from '@/components/categories/CategoryListItem.vue'
import CategoryCreate from '../../components/categories/CategoryCreate.vue'

export default {
  name: 'Categories',
  components: { CategoryListItem, CategoryCreate },
  data() {
    return {
      isLoading: false,
      categories: [],
    }
  },
  mounted() {},
  methods: {
    deleteCategory() {},
    async createCategory(newCategory) {
      console.log(newCategory)
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCategory),
      })
      const data = await response.json()
      console.log(data)
    },
  },
}
</script>

<style>
.categories-view .header {
  margin-bottom: 3rem;
}

.category-form {
}
</style>
