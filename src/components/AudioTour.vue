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


<p>The audio tour was brought together interlinking a series of interviews with architects, designers, and AI researchers about the increase of surveillance in their (and our) daily lives. Comprised during the summer months as the pandemic, track and trace paranoia, and protests ran throughout the world, the audio tour takes you along architectural highlights along the way, giving an intimate and personal look into place and structures you think you know, and allows you to reconsider your everyday surroundings as active sites of surveillance.
</p>

<p><a href="/test">test</a></p>
<p><a href="/introduction">intro</a></p>
<p><a href="/ch1d">ch1d</a></p>
<p><a href="/ch2j">ch2j</a></p>
<p><a href="/ch3j">ch3j</a></p>
<p><a href="/ch4b">ch4b</a></p>
<p><a href="/ch5l">ch5l</a></p>
<p><a href="/ch6r">ch6r</a></p>
<p><a href="/conclusion">conclusion</a></p>



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
