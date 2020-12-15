<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');


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
  padding-bottom: 100px;
  font-weight: 500;
  font-size: 16px;


}

.circle {
  width: 80%;
  padding-top: 80px;
}

.name {
  font-family: 'Playfair Display', serif;
  color: black;
  font-size: 18px;
  text-align: center;

}

.everyonebio a:hover {
  opacity: 50%;
}

.bios a {
  color: black;
  text-decoration: none;
}

.bios a:hover {
  opacity: 50%;
}
@media (max-width: 575px) {
  .everyonebio {
    text-align: left;
    padding-left: 25px;
    padding-right: 25px;
  }
  .bios a {
text-decoration: underline;
  }
  .name a {
    text-decoration: none;
  }
}
</style>






<template>

<div>
    <MenuBar/>

    <div class="everyonebio">

    <b-row>

        <b-col md="4" offset-md="4">
        <a href="/RezaNik">  <b-img class="circle" center src="media/reza.svg"></b-img></a>
        </b-col>

    </b-row>


    <b-row class="bios">

        <b-col md="6" offset-md="3">
            <p class="name">Reza Nik</p>
            <p>Reza Nik is the founder of an experimental architecture studio called <a href="https://sheeep.ca/">SHEEEP.</a> He is an Iranian-Canadian architect, artist and educator based in Toronto, Canada. Reza has a background in art history and he teaches at the University of Toronto’s Faculty of Architecture. He is passionate about closing the gap between practice & academia, experimental & social and art & architecture. Reza is also one of the founding members of the Toronto chapter of the <a href="https://msha.ke/taltoronto/"> Architecture Lobby</a> and currently acts as the Research and Education coordinator. </p>

          <p> Read Reza’s interview about the architectural construct of surveillance and its physical manifestation in the built environment. We discuss misconceptions of fear and chaos that lead to over policing measures as well as alternative structures <a href="/RezaNik">here</a>.</p>

        </b-col>

    </b-row>


    <b-row>

      <b-col md="4" offset-md="4">
        <a href="/Veravanderburg">  <b-img class="circle" center src="media/vera.svg"></b-img></a>
        </b-col>

   </b-row>


    <b-row class="bios">

        <b-col md="6" offset-md="3">
        <p class="name">Vera van der Burg</p>
          <p> Vera van der Burg is an interdisciplinary designer and researcher, focussing on Artificial Intelligence and how it can operate in the field of Art & Design. Previously schooled as a neuroscientist, she operates on the intersection of design, art and theoretical research. In her work, she tries to connect and integrate insights and methods from different fields of expertise in which human perception plays a central role. Her main topics of interest are Artificial Intelligence, Machine Learning, Image/Object Recognition, Semiotics and Human Perception Systems. Take a look at her work
            <a href="https://veravanderburg.nl/"> here.</a>
 </p>
            <p> Read Vera’s interview about AI’s role as a pattern recognizer, its strengths and weaknessess when it's applied to complexity and its potential for future use <a href="/Veravanderburg">here</a>.</p>
        </b-col>

    </b-row>


    <b-row>

      <b-col md="4" offset-md="4">
          <a href="/EmmaFagan"><b-img class="circle" center src="media/emma.svg"></b-img></a>
        </b-col>

    </b-row>


    <b-row class="bios">

        <b-col md="6" offset-md="3">
        <p class="name">Emma Fagan</p>

            <p>Emma Fagan has read a lot of books. Emma Fagan is good at finding niche internet content. Emma Fagan loves to talk about these two things. She is currently based in London. </p>

          <p> Read Emma’s interview about trusting the void, fear, and her relationship with using everyday tracking apps <a href="/EmmaFagan">here</a>.</p>
        </b-col>

    </b-row>

    <b-row>

      <b-col md="4" offset-md="4">
        <a href="/LukeMurphy">  <b-img class="circle" center src="media/luke.svg"></b-img></a>
        </b-col>

    </b-row>


    <b-row class="bios">

        <b-col md="6" offset-md="3">
        <p class="name">Luke Murphy</p>
              <p>Luke Murphy is a programmer and researcher based in Rotterdam, whose interests currently revolve around peer-to-peer systems, cypherspace, low-tech constraints, DIWO approaches, counterfoil research and community organising. He is a proud member of Varia Centre for Everyday Technology. His website is
              <a href="https://decentral1.se"> here.</a></p>

            <p> Read Luke’s interview about start up culture, media coverage of tech and encryption, shreds of hope and alternative structures of technology <a href="/LukeMurphy">here</a>.</p>
        </b-col>

    </b-row>

    <b-row>

      <b-col md="4" offset-md="4">
          <a href="/DorothyCheung"><b-img class="circle" center src="media/dorothy.svg"></b-img></a>
        </b-col>

    </b-row>

    <b-row class="bios">

        <b-col md="6" offset-md="3">
        <p class="name">Dorothy Cheung</p>

          <p>Dorothy Cheung is a writer and filmmaker, currently based in Hong Kong. Her works explore ideas of identities and home through a double perspective - personal and political, memory and forgetfulness. Take a look at her work
            <a href="https://www.dorothycheung.com"> here.</a></p>

            <p>Read Dorothy’s interview about the importance of awareness and participation in political systems, opting out from daily surveillance opportunities and considering what happens when your previous perception of government turns out to be different than your lived experience  <a href="/DorothyCheung">here</a>.</p>
        </b-col>

    </b-row>

    <b-row>

      <b-col md="4" offset-md="4">
          <a href="/JoannettevanderVeer"><b-img class="circle" center src="media/joannette.svg"></b-img></a>
        </b-col>

    </b-row>

    <b-row class="bios">

        <b-col md="6" offset-md="3">
          <p class="name">Joannette van der Veer</p>

          <p>Joannette van der Veer is a curator and writer based in Rotterdam. She works in the field of design, art and culture. Take a look at her work <a href="https://www.dorothycheung.com"> here.</a></p>

            <p> Read Joannette’s interview about her relationship with privacy and surveillance and the covid-19 tracking app, her experience with drones as a way of policing, and the myth that all software is created in a vacuum <a href="/JoannettevanderVeer">here</a>.</p>
        </b-col>

    </b-row>

    <b-row>

      <b-col md="4" offset-md="4">
          <a href="/FrancisMay"><b-img class="circle" center src="media/francis.svg"></b-img></a>
        </b-col>

    </b-row>

    <b-row class="bios">

        <b-col md="6" offset-md="3">
          <p class="name">  Francis May</p>


            <p>Francis May is a freelance writer and an administrator for the <a href="http://torontosocietyofarchitects.ca">Toronto Society of Architects.</a> </p>

              <p> Read Francis’s interview about Canada’s health data gathering system, issues of access to the covid-19 app, and the private companies involved handling our personal bodily data <a href="/FrancisMay">here</a>.</p>

        </b-col>

    </b-row>

    <b-row>
      <b-col md="4" offset-md="4">
          <a href="/BeaPero"><b-img class="circle" center src="media/bea.svg"></b-img></a>
        </b-col>

    </b-row>

    <b-row class="bios">

        <b-col md="6" offset-md="3">
          <p class="name">Beatriz Pero Giannini</p>

          <p> Beatriz is a Peruvian-Italian architect, researcher, and designer based in Rotterdam.  She graduated cum laude from the Piet Zwart Institute, Master Interior Architecture: Research + Design in 2019 in Rotterdam, and in the top 10% of her class at Universidad Peruana de Ciencias Aplicadas, Lima (PE). She is a collaborator of Goodmesh, and founder of LLAQTA an architectural studio that explores the collision of the urban and human scales.The studio is critically interested in the socio-cultural implications of design and how it produces meaning in everyday life, and committed to challenging established conceptions and norms to generate positive change through design and research.</p>

          <p> Read Beatriz’s interview on her research into sidewalks, the politics of public space in Lima, and the perpetual myth that CCTV increases public safety <a href="/BeaPero">here</a>.</p>

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
