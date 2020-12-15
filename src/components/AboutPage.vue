<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Raleway:wght@300;400&display=swap');

* {
border: 0px black solid;
}
.title {
  text-align: center;
padding-top: 100px;
color: hotpink;
}
.content
{
font-family: 'Raleway', sans-serif;
padding-top: 100px;
font-size: 16px;
text-align: justify;
padding-left: 20px;
padding-right: 20px;
font-weight: 500;
}

.stimlogo {
  width: 30%;
  padding-top: 50px;
  padding-bottom: 100px;

}

@media (max-width: 575px) {
  .content {
    text-align: left;
    padding-left: 25px;
    padding-right: 25px;
  }

  .stimlogo {
    width: 50%;
  }
}

</style>

<template>

<div>
    <MenuBar/>
    <b-row class="title">
        <b-col md="4" offset-md="4">
          <p></p>
        </b-col>
    </b-row>

    <b-row class="content">
        <b-col md="6" offset-md="3">
          <p>In the spring of 2020 all of our plans either went on hold or completely went to shit. My own plans to conduct public workshops and work in computer labs exploring the relationship with AI based surveillance and the human body was canceled. </p>



<p>I decided to shift my research focus to a similar topic in the news. Multiple countries were rolling out either mandatory, or voluntary track and trace apps, or increasing surveillance for incoming travelers or those returning to their home country. The mass super structure of surveillance capitalism is already here and thriving, this was just one step closer to full normalization. I was tired of reading expert reports, and wanted to know what did those around me think? How did they feel? What were their experiences, and did they even care at all? The following are a series of conversations with those near to me who I felt had an interest in surveillance and public space, design, art, artificial intelligence, technology and social justice. </p>



<p>The research became less about my own opinions, and more about what others had to say and how to best present their lived experiences. Here, personal anecdotes triumph over professional opinions and the thoughts of the amateur matter more than the expert. </p>



<p>Never before has the movement of human bodies through space been more important, more controlled and more scrutinized by the governments and the powers that be. This is an attempt to listen to the emotional and personal impacts that surveillance has on us and on our human bodies.
</p>

<p>Why circles? Many city parks across Europe and North America are adorned with this new type of marking, functioning both as décor and safety regulation. Circles sprayed onto the grass as a sort of suggested guideline to keep groups away from others. The circle also never ends. There is no linear routes, no finish lines or answers to our surveillance society. We keep traveling round and round, trying to keep aware and keep afloat from drowning in the rapids of digital literacy.
</p>

<p>Special thanks to Alice Strete for teaching me how to build a website from scratch and the Stimulerings Fonds for suppporting the project.</p>

<p><a href="/AudioTour"> There is Something I've Been Meaning To Ask You...</a></p>
        </b-col>
    </b-row>

    <b-row>
        <b-col md="8" offset-md="2">
          <b-img class="stimlogo" center src="media/stim.jpg"></b-img>
        </b-col>
    </b-row>


</div>

</template>




<script>

import MenuBar from './MenuBar'
export default {
    name: 'AboutPage',
    components: {
        MenuBar
    }
}

</script>
