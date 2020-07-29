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

a {
    color: black;
}

a:hover {
  color: gray;
  text-decoration: none;
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
            <p class="name"> <a href="/RezaNik">Reza Nik</a></p>
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
          <a href="/RezaNik">  <p class="name">Vera van de Berg</p> </a>
            <p> Machine learning, labeling, technological solutionism.</p>
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
          <a href="/RezaNik">  <p class="name">Emma Fagan</p> </a>
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
          <a href="/RezaNik">  <p class="name">Luke Murphy</p> </a>
            <p> Start ups, media coverage of tech, encryption, hope, alternative structures of technology.</p>
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
          <a href="/RezaNik">  <p class="name">Dorothy Cheung</p> </a>
            <p> Public conversation, awareness, participation in systems, opting out, everyday tracking, differences between countries they marketing versus realities.</p>
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
          <a href="/RezaNik">  <p class="name">Joanette van der Ver</p> </a>
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
          <a href="/RezaNik">  <p class="name">Francis May</p> </a>
            <p> Government funding, privacy, public health, data gathering, Canada ,Health tracking. </p>

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
          <a href="/RezaNik">  <p class="name">Beatriz Pero Gianni</p> </a>
            <p> CCTV sidewalks, public space, </p>
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
