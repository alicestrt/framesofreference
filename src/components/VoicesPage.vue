<style scoped>

.about-text {
    font-size: 18px;
    color: #212322;
    text-align: justify;
}

h3 {
    font-family: "Open Sans", sans-serif;
    font-size: 30px;
    font-weight: bold;
}

p {
    font-family: "Inconsolata", monospace;
}

a:hover {
  color: hotpink;
  text-decoration: none;

}

a {
  color: gray;
}

</style>

<template>

<div>
    <MenuBar/>
    <b-row class="about-text">
        <b-col md="10">
          <p>Voices</p>



        </b-col>
    </b-row>




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
