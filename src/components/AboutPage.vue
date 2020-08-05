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
          <p>My new plan is to conduct an online interview series on personal experiences with surveillance. The interview series would be posted on its own website set up for the purpose with a feel towards informal conversations rather than the formal question and answer interview process. </p>



<p>Currently around the world over 28 countries have swiftly adopted comprehensive surveillance measure in an attempt to control covid-19. Last Monday The Netherlands have introduced the idea of two possible apps that seem to propose a similar solution to easing the lockdown conditions. This generates a whole new meaning for surveillance in regards to the body and its relationship to AI technologies.</p>



<p>Right now we are in an in-between period before these changes are put into place, we can still question and discuss these possible changes. I want to understand how others feel, and get a more diverse viewpoint on opinions about surveillance in general.</p>



<p>I will integrate memories and personal photos, for example ask my participants about the first time they remember scanning their thumb print, describe the process and send a picture of their thumb. Ask each participant to draw their route to the grocery store, speak about their first memory on camera etc and send a picture from that time. I believe that this process is a strong research component to developing an artistic work later in the year. Some of my participants have different skill sets, for example one is an AI researcher so I would adapt my questions accordingly to their background.</p>

<p>Special thanks to Alice Strete for technical collaboration and the Stimulerings Fonds for suppporting the project.</p>

        </b-col>
    </b-row>

    <b-row>
        <b-col md="8" offset-md="2">
          <b-img class="stimlogo" center src="media/stim.jpg"></b-img>
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
