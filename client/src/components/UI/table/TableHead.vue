<template>
  <thead class="bg-gray-50">
    <tr>
      <th
        v-for="column in columns"
        :key="column.id"
        scope="col"
        class="
          px-6
          py-3
          text-left text-xs
          font-medium
          text-gray-500
          uppercase
          tracking-wider
        "
      >
        {{ column }}
      </th>
      <th scope="col" class="relative px-6 py-3">
        <span class="sr-only">Edit</span>
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'TableHead',
  props: ['columns'],
}
</script>

<style></style>
