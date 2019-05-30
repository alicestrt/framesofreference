<template>
<b-row class="mb-5-menu">
    <b-col md="8">
      <b-button variant="light"><router-link to='/' class='routerlink'>Home</router-link></b-button>
        <b-button variant="light"><router-link to='/about' class='routerlink'>About</router-link></b-button>
        <b-button variant="light"><router-link to='/review' class='routerlink'>Review</router-link></b-button>
  <!--      <b-button variant="light"><router-link to='/glossary' class='routerlink'>Glossary</router-link></b-button> -->
        <b-button variant="light"><router-link to='/fulltext' class='routerlink'>Full text</router-link></b-button>
        <b-button variant="light"><router-link to='/video' class='routerlink'>Full video</router-link></b-button>
    </b-col>
</b-row>
</template>

<script>
export default {
  name: 'MenuBar',
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
.mb-5-menu {
    border-bottom: 1px solid #D3D3D3;
    font-size: 18px;
    margin-bottom: 40px;
    box-shadow: 0.5px 0.5px 10px grey;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
    color: #D3D3D3;
}
.routerlink {
  display: block;
  color: #212322;
  font-family: 'Open Sans', sans-serif;
}
</style>
