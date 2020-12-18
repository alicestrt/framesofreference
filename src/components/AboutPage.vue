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
padding-top: 20px;
font-size: 16px;
text-align: justify;
padding-left: 20px;
padding-right: 20px;
font-weight: 500;
}

.interview_name {
  font-family: 'Playfair Display', serif;
  text-align: left;
  font-size: 18px;
  padding-top: 40px;
  font-weight: bold;

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

  a {
      color: black;
  }


  a:hover {
    color: black;
    text-decoration: none;
    font-weight: bold;
}

  .stimlogo {
    width: 50%;
  }

}

a {
    color: black;
}

a:hover {
  color: black;
  text-decoration: none;
  font-weight: bold;
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

    <b-row>
        <b-col md="6" offset-md="3">
          <p class= "interview_name"> About the project </p>
        </b-col>
    </b-row>

    <b-row class="content">
        <b-col md="6" offset-md="3">
          <p>It is safe to say that in the Spring of 2020 all of our plans went on hold or completely went awry as the world went into various stages of quarantine. My own plans to conduct public workshops exploring the relationship with AI based surveillance and the human body was cancelled.  </p>



<p>My research shifted to a similar topic in the news. Multiple countries were rolling out either mandatory, or voluntary track and trace apps, increasing surveillance for incoming travelers or those returning to their home country. Surveillance capitalism was already here and thriving but the pandemic provided the perfect set of conditions towards full normalization.  </p>



<p>I was tired of reading expert reports, and wanted to know more about what did those around me think? How did they feel? What were their experiences? Did they even care at all? The following are a series of conversations with my peers who I felt had an interest in surveillance and public space, design, art, artificial intelligence, technology and social justice. Here, personal anecdotes triumph over professional opinions and the thoughts of the amateur matter more than the expert.  </p>



<p>Why circles? In the summer many city parks across Europe and North America were adorned with this new type of graphic, dually functioning as both décor and safety regulation to keep us separate and safe while outside. Finally, a circle never ends. There are no linear routes and no clear answers to living in our surveillance society. Round and round we go, trying to keep afloat from drowning in the ever-expanding rapids of digital literacy. Never before has the movement of human bodies through space been more important, more controlled and more scrutinized by the governments and the powers that be. This is an attempt to listen to the emotional and personal impacts that surveillance has on us and on our human bodies.
</p>

<p><a href="/https://gillbaldwin.com/There-is-Something-I-ve-Been-Meaning-to-Ask-You"> There Is Something I’ve Been Meaning to Ask You </a>, an interactive audio tour throughout the city center of Rotterdam was created as a reflection on these interviews. You can access the audio <a href="/AudioTour"> here </a>and download the booklet to take the tour here.
</p>

<p>Special thanks to Alice Strete for technical support and the Stimulerings Fonds for suppporting the project.</p>


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
