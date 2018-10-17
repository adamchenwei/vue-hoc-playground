export default {
  name: 'AbcInJsx',
  props: {
    msg: String,
  },
  render() {
    return (<div><h1>AbcInJsx Hello <span>Pal</span>: and I want to say: {this.msg} <br /> </h1></div>)
  }
};