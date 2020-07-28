<template>
<b-row class="mb-5-menu">
   <b-navbar toggleable="lg">
     <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
     <b-collapse id="nav-collapse" is-nav>
       <b-navbar-nav>
          <b-nav-item to='/'>Home</b-nav-item>
          <b-nav-item to='/about'>About</b-nav-item>
          <b-nav-item to='/voices'>Voices</b-nav-item>


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

</style>
