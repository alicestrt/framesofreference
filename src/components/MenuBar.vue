<template>
<b-row class="mb-5-menu">
    <b-col md="8">
      <b-button variant="light" to='/'>Home</b-button>
        <b-button variant="light" to='/about'>About</b-button>
        <b-button variant="light" to='/review'>Review</b-button>

<b-button variant="light" to='/fulltext'>Full text</b-button>
        <b-button variant="light" to='/video'>Video</b-button>
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
    box-shadow: 0px 0.5px 8px #D3D3D3;
}
.routerlink {
  display: block;
  color: #212322;
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  font-weight: bold;

}
</style>
