<template>
  <div>Demo</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { usedFn } from 'utils';

  export default defineComponent({
    setup() {
      usedFn();
    },
  });
</script>
