<template>
  <!-- <component v-bind:is="AMeCap" class="newClasshere1" data-event="load" msg="new message here 1">

  </component> -->
  <slot class="newClasshere1" data-event="load" />
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