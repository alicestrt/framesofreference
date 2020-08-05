<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Noto+Sans&display=swap');

* {
  border: 0px black solid;
}

.spiral {
  padding-top: 150px;
}

svg {
  margin-top: 200px;
  margin-bottom: 350px;
  padding-top: 10%;
  padding-left: 20%;
  padding-right: 20%;
}

path {
  fill: transparent;
}

text {
  fill: black;
  font-family: 'Playfair Display', serif;
  text-align: center;

}
</style>



<template>
<div>
  <MenuBar />
  <b-container fluid>

    <b-row>
      <b-col md="6" offset-md="2">
        <svg viewBox="0 0 425 300">
          <path id="curve" d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145" />
          <text x="25">
            <textPath xlink:href="#curve">
              This is some text that curves nicely up and down and then up again.
            </textPath>
          </text>
        </svg>
      </b-col>
    </b-row>

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
