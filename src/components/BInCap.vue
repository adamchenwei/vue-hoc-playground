<script>
  export default {
    name: 'BInCap',
    props: {
      msg: String,
    },
    mounted() {
      console.log('BInCap is mounted');
    },
    render() {
      if (this.func) this.func();
      return (
        <div class="BInCapMyClass">
          <h1>BInCap: <span>Pal</span> <span>{this.msg}</span></h1>
        </div>
      )
    }
  };
</script>
