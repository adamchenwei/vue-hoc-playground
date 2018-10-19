<template>
  <!-- <component v-bind:is="AMeCap" class="newClasshere1" data-event="load" msg="new message here 1">

  </component> -->
  <h1> :( </h1>
  <!-- well slot is not allowed to be root, how lol is that? -->
  <!-- <slot class="newClasshere1" data-event="load" /> -->
</template>

<script>

import bbc from './bbc.vue';
import AMeCap from './a-me-cap.vue';
import BInCapVue from './BInCap.vue';

  export default {
    name: 'ShowRoom2',
    components: {
      AMeCap,
      BInCapVue,
    },
    data() {
      return {
        bbc,
        BInCapVue,
        AMeCap,
      }
    },
    mounted() {
      console.log('hoc mounted');
    }
  };
</script>