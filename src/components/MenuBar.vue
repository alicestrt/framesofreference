<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');




a {
color: black;
font-family: 'Playfair Display', serif;
font-size: 24px;
}

a:hover {
  color: black;
opacity: 50%;
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
          <b-nav-item to='/'>HOME</b-nav-item>
          <b-nav-item to='/about'>ABOUT</b-nav-item>
          <b-nav-item to='/voices'>VOICES</b-nav-item>


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
