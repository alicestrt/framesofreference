<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');


.navbar-center {
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  padding-top: 50px;

}

a {
color: black;
font-family: 'Playfair Display', serif;
font-size: 24px;
}

a:hover {
  color: gray;
}

.menurectangle {
  background-color: white;
  width: 100%;
}

</style>










<template>
<b-row>
   <b-navbar fixed=top toggleable="sm"  class="menurectangle">
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
