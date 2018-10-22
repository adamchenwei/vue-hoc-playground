<template>
  <!-- Funny that template is not the root lolololol -->
  <div>
    <component class="newClasshere1" data-event="load" msg="new message here 1"></component>
    <component v-bind:is="BInCapVue" class="newClasshere2" data-event="load" msg="new message here 2"></component>
  </div>
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
    }
  };
</script>