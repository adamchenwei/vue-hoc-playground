<template>
  <component v-bind:is="bbc"></component>
</template>

<script>

import bbc from './bbc.vue';

  export default {
    name: 'ShowRoom2',
  };
</script>