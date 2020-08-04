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
  text-align: justify;
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
  text-align: center;

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

        <b-col md="2" offset-md="5">
          <b-img class="circle" center src="media/spiral.png"></b-img>
        </b-col>

    </b-row>


    <b-row class="bios">

        <b-col md="6" offset-md="3">
            <p class="name"> <a href="/RezaNik">Reza Nik</a></p>
            <p>The way I see it is that data tracking for the corona virus still implicitly relies on trust in the user to be honest, which if the Internet has taught us anything, it’s that you cannot trust the user to be honest. There is a dominant sub culture to use the Internet to mask our selves and be bolder, louder, prettier, more interesting and more perfect. Because to put up a less than perfect facade is to be on stage inviting the criticisms of others emboldened and protected by the distance of the Internet to judge you. </p>

          <p> On fear, scaffolding, loosely adaptable infastructures, eyes on the street, architecture, <a href="/RezaNik"> zig zaggy.</a></p>

        </b-col>

    </b-row>


    <b-row>

        <b-col md="2" offset-md="5">
          <b-img class="circle" center src="media/spiral.png"></b-img>
        </b-col>

   </b-row>


    <b-row class="bios">

        <b-col md="6" offset-md="3">
          <a href="/Veravanderburg">  <p class="name">Vera van der Burg</p> </a>
            <p> Machine learning, labeling, technological solutionism.</p>
        </b-col>

    </b-row>


    <b-row>

        <b-col md="2" offset-md="5">
          <b-img class="circle" center src="media/spiral.png"></b-img>
        </b-col>

    </b-row>


    <b-row class="bios">

        <b-col md="6" offset-md="3">
          <a href="/EmmaFagan">  <p class="name">Emma Fagan</p> </a>
            <p> On fear, scaffolding, loosely adaptable infastructures, eyes on the street, architecture, zig zaggy.</p>
        </b-col>

    </b-row>

    <b-row>

        <b-col md="2" offset-md="5">
          <b-img class="circle" center src="media/spiral.png"></b-img>
        </b-col>

    </b-row>


    <b-row class="bios">

        <b-col md="6" offset-md="3">
          <a href="/LukeMurphy">  <p class="name">Luke Murphy</p> </a>
            <p> Start ups, media coverage of tech, encryption, hope, alternative structures of technology.</p>
        </b-col>

    </b-row>

    <b-row>

        <b-col md="2" offset-md="5">
          <b-img class="circle" center src="media/spiral.png"></b-img>
        </b-col>

    </b-row>

    <b-row class="bios">

        <b-col md="6" offset-md="3">
          <a href="/DorothyCheung">  <p class="name">Dorothy Cheung</p> </a>
            <p> Public conversation, awareness, participation in systems, opting out, everyday tracking, differences between countries they marketing versus realities.</p>
        </b-col>

    </b-row>

    <b-row>

        <b-col md="2" offset-md="5">
          <b-img class="circle" center src="media/spiral.png"></b-img>
        </b-col>

    </b-row>

    <b-row class="bios">

        <b-col md="6" offset-md="3">
          <a href="/JoannettevanderVeer">  <p class="name">Joannette van der Veer</p> </a>
            <p> On fear, scaffolding, loosely adaptable infastructures, eyes on the street, architecture, zig zaggy.</p>
        </b-col>

    </b-row>

    <b-row>

        <b-col md="2" offset-md="5">
          <b-img class="circle" center src="media/spiral.png"></b-img>
        </b-col>

    </b-row>

    <b-row class="bios">

        <b-col md="6" offset-md="3">
          <a href="/FrancisMay">  <p class="name">Francis May</p> </a>
            <p> Government funding, privacy, public health, data gathering, Canada ,Health tracking. </p>

        </b-col>

    </b-row>

    <b-row>
        <
        <b-col md="2" offset-md="5">
          <b-img class="circle" center src="media/spiral.png"></b-img>
        </b-col>

    </b-row>

    <b-row class="bios">

        <b-col md="6" offset-md="3">
          <a href="/BeaPero">  <p class="name">Beatriz Pero Gianni</p> </a>
            <p> CCTV sidewalks, public space, </p>
        </b-col>

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
