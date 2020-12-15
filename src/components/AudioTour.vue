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

.interview_name {
  font-family: 'Playfair Display', serif;
  text-align: center;
  font-size: 18px;
  padding-top: 40px;
  font-weight: bold;

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




<b-col md="6" offset-md="3">
  <p class= "interview_name"> <a href="/introduction">Introduction</a>

</b-col>

<b-col md="6" offset-md="3">
  <p class= "interview_name"> <a href="/ch1d">Chapter 1</a>

</b-col>

<b-col md="6" offset-md="3">
  <p class= "interview_name"> <a href="/ch2j">Chapter 2</a>

</b-col>

<b-col md="6" offset-md="3">
  <p class= "interview_name"> <a href="/ch3j">Chapter 3</a>

</b-col>

<b-col md="6" offset-md="3">
  <p class= "interview_name"> <a href="/ch4b">Chapter 4</a>

</b-col>

<b-col md="6" offset-md="3">
  <p class= "interview_name"> <a href="/ch5l">Chapter 5</a>

</b-col>

<b-col md="6" offset-md="3">
  <p class= "interview_name"> <a href="/ch6r">Chapter 6</a>

</b-col>

<b-col md="6" offset-md="3">
  <p class= "interview_name"> <a href="/conclusion">Conclusion</a>

</b-col>

<p>The audio tour was brought together interlinking a series of interviews with architects, designers, and AI researchers about the increase of surveillance in their (and our) daily lives. Comprised during the summer months as the pandemic, track and trace paranoia, and protests ran throughout the world, the audio tour takes you along architectural highlights along the way, giving an intimate and personal look into place and structures you think you know, and allows you to reconsider your everyday surroundings as active sites of surveillance.
</p>

        </b-col>
    </b-row>


</div>

</template>




<script>

import MenuBar from './MenuBar'
export default {
    name: 'AudioTour',
    components: {
        MenuBar
    }
}

</script>
