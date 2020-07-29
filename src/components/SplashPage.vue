<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Noto+Sans&display=swap');

* {
    border: 0px black solid;
}

.spiral {
  padding-top: 150px;
}


</style>



<template>

<div>
  <MenuBar/>
<b-container fluid>

<b-row>
    <b-col md="1"> </b-col>
    <b-col md="10">
      <b-img class="spiral" center src="media/spiral.png"></b-img>
    </b-col>
    <b-col md="1"> </b-col>
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
