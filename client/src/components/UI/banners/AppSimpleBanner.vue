<template>
  <p
    class="
      bg-indigo-600
      h-10
      flex
      items-center
      justify-center
      text-sm
      font-medium
      text-white
      px-4
      sm:px-6
      lg:px-8
    "
  >
    {{ content }}
  </p>
</template>

<script>
export default {
  name: 'AppSimpleBanner',
  props: ['content'],
}
</script>

<style></style>
