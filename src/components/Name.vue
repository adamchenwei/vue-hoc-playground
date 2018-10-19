<script>
  export default {
    name: 'Name',
    props: {
      name: String,
    },
    mounted() {
      console.log('Name is mounted');
    },
    render() {
      if (this.func) this.func();
      return (
        <div class="NameMyClass">
          <h1>Name: <span>{this.name}</span></h1>
        </div>
      )
    }
  };
</script>
