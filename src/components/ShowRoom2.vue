<template>
  <component v-bind:is="bbc"></component>
</template>

<script>

import { createHOC } from 'vue-hoc';
// import Abc from './Abc.vue';
// import AbcInJsx from './AbcInJsx.jsx'
import withCustomComponent,{ WithCustom } from './decorator/withCustomComponent.js';
import Name from './Name.vue';
import bbc from './bbc.vue';

// const CustomAbc = {
//     name: 'CustomAbc',
//     render() {
//       console.log('custom abc')
//       // return (
//       //   <h1>1</h1>
//       // )
//       return (
//         <WithCustom>
//           <Abc />
//         </WithCustom>
//       )
//     }
//   };

  export default {
    name: 'ShowRoom2',
  };
</script>