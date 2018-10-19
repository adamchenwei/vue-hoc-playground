
<script>
import { createHOC } from 'vue-hoc';
import Abc from './Abc.vue';
import AbcInJsx from './AbcInJsx.jsx'
import withCustomComponent,{ WithCustom } from './decorator/withCustomComponent.js';
import Name from './Name.vue';
import ShowRoom2Vue from './ShowRoom2.vue';

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
    name: 'ShowRoom',
    render() {
      const func = () => {console.log('a func')};
      // const NewAbc = withCustomComponent(
      //   Abc,
      //   {
      //     msg: "New message!",
      //     num: 9922.345,
      //     func: func,
      //     arr: [1,2,3],
      //     obj: {val: 'hello'},
      //     boo: false,
      //     date: new Date(),
      //   }
      // );

      // const NewAbc = createHOC({}, {
      //   name: 'NewAbc',
      //   functional: true,
      //   render() {
      //     return <Abc />;
      //   }
      // }, withCustomComponent);

      //{/* <CustomAbc /> */}
      return <ShowRoom2Vue />
      // return (
      //   <div>

      //     <NewAbc
      //       msg={"New message!"}
      //       num={9922.345}
      //       func={func}
      //       arr={[1,2,3]}
      //       obj={{val: 'hello'}}
      //       boo={false}
      //       date={new Date()} />

      //     <Component bindIs={Abc} msg={"yoyoy"}></Component>

      //     <AbcInJsx msg="wowo" />
      //   </div>
      // )
    }
  };
</script>