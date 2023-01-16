<template>
  <p>{{ title }}</p>
</template>

<script>
export default {
  setup() {
    const { title } = useAppConfig();
    return {
      title,
    };
  },
};
</script>
