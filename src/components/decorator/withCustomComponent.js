
export default function withCustomComponent(InnerComponent) {
  return {
    mounted() {
      console.log('withCustomComponent is mounted');
    },
    render() {
      const myarr = [
        {a: 'haha',},
        {b: 'yoyo',}
      ];
      const myobj = {
        a: 'some',
        b: 'kind',
      };
      console.log(myarr);
      play(myobj);
      console.log(props);
      return <InnerComponent
        class="myinner"
        data-event="load"
        />;
    }
  }
}

function play({a,b}) {
  console.log('play')
  console.log(JSON.stringify(a));
  console.log(`${a} ${b}`);
}

function fakeCall(params, callback) {
  setTimeout(() => {
    callback('https://avatars0.githubusercontent.com/u/6078720?s=200&v=4')
  }, 1000);
}
