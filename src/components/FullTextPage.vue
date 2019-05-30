<template>
<div>
  <MenuBar/>

<h3>Your Body Will Make Itself Heard</h3>
<p>Download the full text of my thesis.</p>
</div>
</template>

<script>
import MenuBar from './MenuBar'
export default {
  name: 'FullTextPage',
  components: {
    MenuBar}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
#header{
        margin-top: 40px;
      }
p {
        text-align: justify;
      }
#introduction{
        margin-top: 30px;

}

</style>
