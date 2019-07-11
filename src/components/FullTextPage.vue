<style scoped>

@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

#header {
    margin-top: 40px;
}

.pdf {
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

</style>

<template>

<div>
    <MenuBar/>
    <b-row align-h="center">
        <b-col md="6" sm="12">
            <h3>Your Body Will Make Itself Heard</h3>
        </b-col>
    </b-row>
    <b-row align-h="center">
        <b-col cols="10">
            <p><a href="https://git.xpub.nl/alicestrt/Thesis" target="_blank">Download</a> the full text of my thesis.</p>
        </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col class="pdf" cols="12">
        <b-embed
          type="iframe"
          aspect="4by3"
          src="./media/thesis.pdf"
          allowfullscreen
        ></b-embed>
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
