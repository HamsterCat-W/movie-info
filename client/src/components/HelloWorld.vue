<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img
      src="http://localhost:3000/67a9fb93206b777bb9cb3311711873b6168e20c38e13d-cMCPgX_fw658.jpg"
    />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
