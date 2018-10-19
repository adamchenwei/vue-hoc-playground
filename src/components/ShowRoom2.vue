<template>
  <component v-bind:is="bbc" class="newClasshere"></component>
</template>

<script>

import bbc from './bbc.vue';

  export default {
    name: 'ShowRoom2',
    data() {
      return {
        bbc,
      }
    }
  };
</script>