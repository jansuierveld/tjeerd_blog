<template>
  <div id="app">
    <navbar/>
    <div class="blog-container">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navbar from './views/Navbar'
  export default {
     components:{
         'navbar':Navbar
     }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
}
.blog-container {
    max-width: 90vw;
    margin: 8rem auto;
}
.blogheader {
  color: #0979A1;
}
.center {
    text-align: center;
}
img {
  max-width: 100%;
}
html{
  font-size:100%;
}
body {
  font-size:16px;
}
h1 {
      font-size: 250%;
      margin-bottom: .2rem;
      color: #42a286;
}
@media(max-width:320px){
  html{
    font-size: 90%;
  }
  .center {
    text-align: left;
  }
}

</style>
