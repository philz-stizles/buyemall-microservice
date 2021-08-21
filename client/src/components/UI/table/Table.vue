<template>
  <div class="flex flex-col my-10">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <TableHead :columns="columns" />
            <TableBody :rows="rows" />
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableHead from '@/components/UI/table/TableHead'
import TableBody from '@/components/UI/table/TableBody'

export default {
  name: 'Table',
  props: ['columns', 'rows'],
  components: { TableHead, TableBody },
}
</script>

<style></style>
