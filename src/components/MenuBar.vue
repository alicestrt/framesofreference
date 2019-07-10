<template>
<b-row class="mb-5-menu">
   <b-navbar toggleable="lg">
     <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
     <b-collapse id="nav-collapse" is-nav>
       <b-navbar-nav>
          <b-nav-item to='/'>Home</b-nav-item>
          <b-nav-item to='/about'>About</b-nav-item>
          <b-nav-item to='/review'>Review</b-nav-item>
          <b-nav-item to='/fulltext'>Full text</b-nav-item>
          <b-nav-item to='/video'>Video</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
   </b-navbar>
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
