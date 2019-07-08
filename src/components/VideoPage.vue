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
        <b-col cols="4">
            <h3>Is it time to eat, or is there no more time to eat?</h3>
        </b-col>
    </b-row>
    <b-row align-h="center">
        <b-col cols="6" text-center>
          <iframe width="860" height="515" src="https://www.youtube.com/embed/S-maUIUAC3I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
