<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Noto+Sans&display=swap');

* {
  border: 0px black solid;
}

.photo {
  width: 150%;

}

.circles {
  margin-top: 100px;
  padding-left: 50px;
  padding-right: 80px;
}

.circles img {
  width: 120%;
}

.circles a:hover {
  opacity: 50%;
}

</style>



<template>
<div>
  <MenuBar />
  <b-container fluid>
    <div class="circles">
    <b-row>
    <b-col md="3">
      <a href="/about"> <b-img center src="media/square.svg"></b-img></a>
    </b-col>
    <b-col md="3">
      <b-img center src="media/square.svg"></b-img>

    </b-col>
    <b-col md="3">
      <b-img center src="media/square.svg"></b-img>

    </b-col>
    <b-col md="3">
      <b-img center src="media/square.svg"></b-img>

    </b-col>
    </b-row>

    <b-row>
    <b-col md="3">
      <b-img center src="media/square.svg"></b-img>

    </b-col>
    <b-col md="3">
      <b-img center src="media/square.svg"></b-img>

    </b-col>
    <b-col md="3">
      <b-img center src="media/square.svg"></b-img>

    </b-col>
    <b-col md="3">
      <b-img center src="media/square.svg"></b-img>

    </b-col>
    </b-row>
  </div>

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
