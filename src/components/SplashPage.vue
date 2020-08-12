<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Noto+Sans&display=swap');

* {
  border: 0px black solid;
}

.circles {
  margin-top: 80px;
  margin-left: 20px;
  margin-right: 20px;

}

.circles img {
  width: 100%;
}

.circles img:hover {
  opacity: 50%;
}


</style>



<template>
<div>
  <MenuBar />
  <b-container fluid class="p-0">
    <div class="circles">
    <b-row>
    <b-col md="3">
      <a href="/about"> <b-img class="mx-auto" src="media/square.svg"></b-img></a>
    </b-col>
    <b-col md="3">
      <a href="/about"><b-img class="mx-auto" src="media/square.svg"></b-img></a>

    </b-col>
    <b-col md="3">
    <a href="/about">  <b-img class="mx-auto" src="media/square.svg"></b-img> </a>

    </b-col>
    <b-col md="3">
    <a href="/about">  <b-img class="mx-auto" src="media/square.svg"></b-img> </a>

    </b-col>
    </b-row>

    <b-row>
    <b-col md="3">
    <a href="/about">  <b-img class="mx-auto" src="media/square.svg"></b-img> </a>

    </b-col>
    <b-col md="3">
    <a href="/about">  <b-img class="mx-auto" src="media/square.svg"></b-img> </a>

    </b-col>
    <b-col md="3">
    <a href="/about">  <b-img class="mx-auto" src="media/square.svg"></b-img> </a>

    </b-col>
    <b-col md="3">
    <a href="/about">  <b-img class="mx-auto" src="media/square.svg"></b-img> </a>

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
