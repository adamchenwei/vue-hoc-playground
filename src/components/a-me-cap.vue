<script>
  export default {
    name: 'a-me-cap',
    props: {
      msg: String,
    },
    mounted() {
      console.log('a-me-cap is mounted');
    },
    render() {
      if (this.func) this.func();
      return (
        <div class="a-me-capMyClass">
          <h1>a-me-cap: <span>Pal</span> <span>{this.msg}</span></h1>
        </div>
      )
    }
  };
</script>
