<template>
<b-row>
   <b-navbar fixed=top toggleable="md" >
     <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
     <b-collapse id="nav-collapse" is-nav>
       <b-nav class="navbar-center">
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

.navbar-center {
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  padding-top: 18px;
}

a {
color: blue;
}

a:hover {
  color: red;
}

</style>
