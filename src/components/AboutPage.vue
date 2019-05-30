<style scoped>

.about-text {
    font-size: 18px;
    color: #212322;
    text-align: justify;
}
h3 {
  font-family: "Open Sans", sans-serif;
  font-size: 30px;

}
p {
  font-family: "Inconsolata", monospace;
}
</style>

<template>

<div>
    <MenuBar/>
    <b-row class="about-text" align-h="center">
        <b-col cols="8">
            <h3>
    About the project</h3>
            <p class="about-text">
                I'm Alice. This website is part of my graduation project for the Master of Arts in Fine Art and Design: Experimental Publishing, in which I look at the way techno-solutionism is applied in food. More specifically, I'm deconstructing what I've identified
                as the meal-replacement phenomenon, an ideology, culture, community and, ultimately, range of products that have emerged out of Silicon Valley in the past 5 years and have spread out across the Western world.
            </p>

        </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col cols="8">
        <h3>About the essay</h3>
        <p class="about-text">
"Your Body Will Make Itself Heard" represents my masters' thesis, and takes a broader look at the historical, cultural and technological development of meal replacements.
        </p>
      </b-col>
    </b-row>

    <b-row class="about-text" align-h="center">
      <b-col cols="8">
        <h3>About the video</h3>
        <p class="about-text">
"Is It Time to Eat, or Is there No More Time to Eat" is a video essay that complements my research on meal replacements. As opposed to a broader look on the topic, the video essay focuses on the issue of solving problems through the means of techno-solutionism. It's built in the form of a vlog which responds to and exists in the same space as the sea of reviews, unpacking and tasting videos that exist around meal replacements.
        </p>
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
