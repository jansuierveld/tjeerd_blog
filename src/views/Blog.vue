<template>
  <div class="blog">

    
    <router-view />
    <router-link to="/" tag="a" class="back">&laquo; Terug</router-link>
  </div>
</template>
<style lang="scss" scoped>
.blog {

  .back {
    background-color: #42a286;
    color: white;
    margin-top: 5rem;
    text-decoration: none;
    padding: 10px 15px;
    border: 1px solid currentColor;
    border-radius: .5rem;
    display: inline-block;
    margin-left:45%;
    transition: all .3s ease;
    &:hover {
      background-color: transparent;
      color: #42a286;
    }
  }
 >>> {
    h1 {
      font-size: 250%;
      margin-bottom: .2rem;
      color: #42a286;
      text-align: center;
    }
    h4 {
      margin-bottom: 3rem;
      color: #bfddd4;
      text-align: center;
    }
    pre {
      overflow-x: auto;
      background-color: #35495e;
      color: white;
      border-radius: .3rem;
      padding: 1rem;
    }
    img {
      max-width: 100%;
    }
    .small {
      font-size: 0.8rem;
      color: #35495e;
    }
  }
}
</style>
