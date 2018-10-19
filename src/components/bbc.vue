<script>
  export default {
    name: 'bbc',
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
      console.log('bbc is mounted');
    },
    render() {
      if (this.func) this.func();
      return (
        <div class="bbcMyClass">
          <h1>bbc: <span>Pal</span> <span>{this.msg}</span></h1>
        </div>
      )
    }
  };
</script>
