<style scoped>

@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
#header {
    margin-top: 40px;
}

p {
    text-align: center;
}

h3 {
    text-align: center;
    font-size: 30px;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
}
iframe {
  position: absolute;
  width: 800px;
  height: 900px;
}

</style>

<template>

<div>
    <MenuBar/>
    <b-row align-h="center">
        <b-col cols="6">
            <h3>Your Body Will Make Itself Heard</h3>
        </b-col>
    </b-row>
    <b-row align-h="center">
        <b-col cols="6">
            <p><a href="https://git.xpub.nl/alicestrt/Thesis" target="_blank">Download</a> the full text of my thesis.</p>
        </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="8">
    <iframe style="left: 145px; right: 145px;" src="./media/thesis.pdf"></iframe>
  </b-col>
  </b-row>
</div>

</template>

<script>

import MenuBar from './MenuBar'
export default {
    name: 'FullTextPage',
    components: {
        MenuBar
    }
}

</script>
