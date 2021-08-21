<template>
  <div class="categories">
    <SectionHeader
      title="Categories"
      subTitle="Create categories and sub-categories to which products you are offering belong"
    >
      <template v-slot:action1>
        <app-button :outlined="true" type="button">
          <upload-icon class="mr-2 h-5 w-5" />
          Upload
        </app-button>
      </template>
      <template v-slot:action2>
        <app-button :outlined="true" type="button">
          <download-icon class="mr-2 h-5 w-5" />
          Download
        </app-button>
      </template>
      <app-button @click="openModal" type="button">
        <plus-sm-icon class="mr-2 h-5 w-5" />
        New
      </app-button></SectionHeader
    >
    <Table :columns="columns" :rows="categories" />
    <app-modal
      v-if="isModalShowing"
      @modalClick="closeModal"
      icon="document-add-icon"
      title="Create category"
    >
      <template #default>
        <CategoryCreate />
      </template>
      <template v-slot:actions>
        <app-modal-button type="button"> Submit </app-modal-button>
        <app-modal-button :outlined="true" type="button" @click="closeModal">
          Cancel
        </app-modal-button>
      </template>
    </app-modal>
  </div>
</template>

<script>
import SectionHeader from '@/components/dashboard/SectionHeader'
import Table from '@/components/UI/table/Table'
import CategoryCreate from '@/components/categories/CategoryCreate'

export default {
  name: 'Categories',
  components: { SectionHeader, Table, CategoryCreate },
  data() {
    return {
      isLoading: false,
      // categories: [],
      columns: ['NAME', 'DESCRIPTION', 'STATUS', 'DATE CREATED'],
      isModalShowing: false,
    }
  },
  mounted() {},
  computed: {
    categories() {
      return this.$store.getters['categories/getCategories']
    },
  },
  methods: {
    loadCategories() {
      return this.$store.dispatch({
        type: 'categories/getCategories',
      })
    },
    openModal() {
      console.log('here')
      this.isModalShowing = true
    },
    closeModal() {
      console.log('here')
      this.isModalShowing = false
    },
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

<style></style>
