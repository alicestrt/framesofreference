<style scoped>

@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
    border: 0px black solid;
}

.row_title {
    font-size: 30px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 10px;

}

.item_title {
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;

}
#myname {
  font-size: 30px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
}

a:hover {
  color: hotpink;
  text-decoration: none;

}

a {
  color: black;
}



</style>

<template>

<div>
  <MenuBar/>
<b-container fluid>
<b-row>
  <b-col md="4">
  <p id='myname'>
This is a website  </p>
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
