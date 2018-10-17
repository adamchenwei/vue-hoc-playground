<script>
  export default {
    name: 'Abc',
    props: {
      msg: String,
      num: Number,
      func: Function,
      arr: Array,
      obj: Object,
      boo: Boolean,
      date: Date,
    },
    mounted() {
      console.log('Abc is mounted');
    },
    render() {
      this.func();
      return (<div class="abcMyClass">
        <h1>ABC: <span>Pal</span></h1>
        <code>
          this.msg: {this.msg}<br />
          this.num: {this.num}<br />
          this.func: {JSON.stringify(this.func)}<br />
          this.arr: {this.arr}<br />
          this.obj: {JSON.stringify(this.obj)}<br />
          this.boo: {JSON.stringify(this.boo)}<br />
          this.date: {this.date}<br />
        </code>
      </div>)
    }
  };
</script>
