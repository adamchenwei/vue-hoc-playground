
<script>
  import { createHOC } from 'vue-hoc';
  import Abc from './Abc.vue';
  import AbcInJsx from './AbcInJsx.jsx'
  import withCustomComponent from './decorator/withCustomComponent.js';

  export default {
    name: 'ShowRoom',
    render() {
      const func = () => {console.log('a func')};
      // const NewAbc = withCustomComponent(
      //   Abc,
        // {
        //   msg: "New message!",
        //   num: 9922.345,
        //   func: func,
        //   arr: [1,2,3],
        //   obj: {val: 'hello'},
        //   boo: false,
        //   date: new Date(),
        // }
      // );

      const NewAbc = createHOC(Abc, null, withCustomComponent);
      return (
        <div>
          <NewAbc
            msg={"New message!"}
            num={9922.345}
            func={func}
            arr={[1,2,3]}
            obj={{val: 'hello'}}
            boo={false}
            date={new Date()}
          />
          <AbcInJsx msg="wowo" />
        </div>
      )
    }
  };
</script>