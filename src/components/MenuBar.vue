<template>
<b-row class="mb-5-menu">
   <b-navbar fixed=top toggleable="lg">
     <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
     <b-collapse id="nav-collapse" is-nav>
       <b-nav align="center">
          <b-nav-item to='/'>Home</b-nav-item>
          <b-nav-item to='/about'>About</b-nav-item>
          <b-nav-item to='/voices'>Voices</b-nav-item>


        </b-nav>
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

a {
color: blue;
}

a:hover {
  color: red;
}

</style>
