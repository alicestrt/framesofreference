<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');




a {
color: black;
font-family: 'Playfair Display', serif;
font-size: 24px;
}

a:hover {
  color: gray;
}

.navbar {
  background-color: white;

}

</style>










<template>
<b-row>
   <b-navbar fixed=top toggleable="sm" >
     <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
     <b-collapse id="nav-collapse" is-nav>
       <b-nav class="justify-content-center mx-auto w-100">
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
