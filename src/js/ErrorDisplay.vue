<template>
  <p v-if="validator.$errors.length">
    <span
      v-for="error in validator.$errors"
      :key="error.$validator"
      class="absolute -bottom-6 text-sm text-red-700"
    >
      {{ error.$message }}
    </span>
  </p>
</template>

<script>
export default {
  name: "ErrorDisplay",
  props: {
    validator: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
