<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Noto+Sans&display=swap');

* {
    border: 1px black solid;
}
.title {
  margin-top: 60px;
  font-family: 'Merriweather', serif;
  text-align: center;
  font-size: 40px;

}



</style>

<template>

<div>
  <MenuBar/>
<b-container fluid>
<b-row>
  <b-col md="4"> 
  </b-col>

  <b-col md="4">
    <p class="title">WELCOME
    </p>

  </b-col>

  <b-col md="4">
  </b-col>

</b-row>
</b-container>


</div>

</template>

<script>
import MenuBar from './MenuBar'
export default {
    name: 'SplashPage',
    components: {
        MenuBar
    }
}

</script>
