<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Raleway:wght@300;400&display=swap');


* {
border: 0px black solid;
}
.bios {
  padding-top: 50px;
}

.everyonebio {
  margin-top: 60px;
  font-family: 'Raleway', sans-serif;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
}

.circle {
  width: 80%;
  padding-top: 100px;
}

.name {
  font-family: 'Playfair Display', serif;
  color: black;
  font-size: 18px;

}
</style>






<template>

<div>
    <MenuBar/>

    <div class="everyonebio">

    <b-row>
        <b-col md="5"> </b-col>
        <b-col md="2">
          <b-img class="circle" center src="media/spiral.png"></b-img>
        </b-col>
        <b-col md="5"> </b-col>
    </b-row>


    <b-row class="bios">
        <b-col md="2"> </b-col>
        <b-col md="8">
          <a href="/RezaNik">  <p class="name">Reza Nik</p> </a>
            <p> On fear, scaffolding, loosely adaptable infastructures, eyes on the street, architecture, zig zaggy. On fear, scaffolding, loosely adaptable infastructures, eyes on the street, architecture, zig zaggy.</p>
        </b-col>
        <b-col md="2"> </b-col>
    </b-row>


    <b-row>
        <b-col md="5"> </b-col>
        <b-col md="2">
          <b-img class="circle" center src="media/spiral.png"></b-img>
        </b-col>
        <b-col md="5"> </b-col>
    </b-row>


    <b-row class="bios">
        <b-col md="2"> </b-col>
        <b-col md="8">
          <a href="/RezaNik">  <p class="name">Reza Nik</p> </a>
            <p> On fear, scaffolding, loosely adaptable infastructures, eyes on the street, architecture, zig zaggy.</p>
        </b-col>
        <b-col md="2"> </b-col>
    </b-row>


    <b-row>
        <b-col md="5"> </b-col>
        <b-col md="2">
          <b-img class="circle" center src="media/spiral.png"></b-img>
        </b-col>
        <b-col md="5"> </b-col>
    </b-row>


    <b-row class="bios">
        <b-col md="2"> </b-col>
        <b-col md="8">
          <a href="/RezaNik">  <p class="name">Reza Nik</p> </a>
            <p> On fear, scaffolding, loosely adaptable infastructures, eyes on the street, architecture, zig zaggy.</p>
        </b-col>
        <b-col md="2"> </b-col>
    </b-row>


</div>

</div>

</template>

<script>

import MenuBar from './MenuBar'
export default {
    name: 'VoicesPage',
    components: {
        MenuBar
    }
}

</script>
