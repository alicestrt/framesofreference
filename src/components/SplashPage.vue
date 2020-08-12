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

@media (max-width: 575px) {
.circles {
  padding-top: 100px;
}


}


</style>



<template>
<div>
  <MenuBar />
  <b-container fluid class="p-0">
    <div class="circles">
    <b-row>
    <b-col md="3">
      <a href="/RezaNik"> <b-img class="mx-auto" src="media/reza.svg"></b-img></a>
    </b-col>
    <b-col md="3">
      <a href="/Veravanderburg"><b-img class="mx-auto" src="media/vera.svg"></b-img></a>

    </b-col>
    <b-col md="3">
    <a href="/EmmaFagan">  <b-img class="mx-auto" src="media/emma.svg"></b-img> </a>

    </b-col>
    <b-col md="3">
    <a href="/LukeMurphy">  <b-img class="mx-auto" src="media/luke.svg"></b-img> </a>

    </b-col>
    </b-row>

    <b-row>
    <b-col md="3">
    <a href="/DorothyCheung">  <b-img class="mx-auto" src="media/dorothy.svg"></b-img> </a>

    </b-col>
    <b-col md="3">
    <a href="/JoannettevanderVeer">  <b-img class="mx-auto" src="media/joannette.svg"></b-img> </a>

    </b-col>
    <b-col md="3">
    <a href="/FrancisMay">  <b-img class="mx-auto" src="media/francis.svg"></b-img> </a>

    </b-col>
    <b-col md="3">
    <a href="/BeaPero">  <b-img class="mx-auto" src="media/bea.svg"></b-img> </a>

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
