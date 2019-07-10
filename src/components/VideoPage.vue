<style scoped>

@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
#header {
    margin-top: 40px;
}

p {
    text-align: justify;
}

#introduction {
    margin-top: 30px;
}

h3 {
    text-align: center;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
}

</style>

<template>

<div>
    <MenuBar/>
    <b-row align-h="center">
        <b-col cols="10">
            <h3>Is it time to eat, or is there no more time to eat?</h3>
        </b-col>
    </b-row>
    <b-row align-h="center">
        <b-col cols="10">
          <b-embed
             type="iframe"
             aspect="16by9"
             src="https://www.youtube.com/embed/S-maUIUAC3I"
             allowfullscreen
           ></b-embed>
        </b-col>
    </b-row>
</div>

</template>

<script>

import MenuBar from './MenuBar'
export default {
    name: 'VideoPage',
    components: {
        MenuBar
    }
}

</script>
