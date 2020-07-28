<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
* {
border: 1px black solid;
}
.title {
  text-align: center;
padding-top: 50px;
color: hotpink;
}
.content
{
font-family: 'Noto Sans', sans-serif;
padding-top: 40px;
font-size: 18px;
}

.metadata {
  font-weight: bold;
}

.interviewbody {
  text-align: justify;
}
</style>

<template>

<div>
    <MenuBar/>
    <b-row class="title">
    <b-col md="4"> </b-col>
        <b-col md="4">
          <p>RezaNik</p>



        </b-col>
          <b-col md="4"> </b-col>
    </b-row>

    <b-row class="content">
    <b-col md="2"> </b-col>
        <b-col md="8">
          <p class="metadata">On June 4th 2020 at 6:05 pm Gill wrote:</p>

          <p class="interviewbody">Lately I've been thinking about a possible dual nature of surveillance.
On one hand with the development and soon release of a corona-virus track and trace application, that is being marketed as a (positive) technique to control the spread of virus.
Then with the protests around the world for the Black Lives Matter movent, police and government tracking surveillance measures are heavily being deployed against protestors in public spaces. I’m very curious to know your opinion on all this, as I find (could be projecting here) that a lot of your work has an activist quality to it and both the corona virus and protests, are concentrated on trying to control movements of individuals through public space.
 </p>

  <p class="metadata">On June 4th 2020 at 7:34 pm Reza wrote: </p>

<p class="interviewbody">I definitely try to question all forms of control, whether it's the government, the police, the institutions or the architectural associations. I think we have this underlying misconception that without "control", there's chaos. I inherently disagree with this.</p>

<p class="interviewbody">I like to think of the systems that we need as "scaffolding" as opposed to a "permanent structure" or "superstructure" I've been thinking about this analogy on various forms of my practice.  And I think it applies here. To me surveillance can be effective if it's more flexible, much like scaffolding is.... and it becomes a problem when it is seen as a superstructure which is necessary to hold everything together.</p>

<p class="interviewbody">I don't think that surveillance is that important, it plays a role, but not as much as we think it does. How many times have houses or stores been robbed when there are cameras everywhere, or alarms, or security guards or police officers around? These forms of surveill-ing the public doesn't work and especially not in the public realm.</p>

<p class="interviewbody">I think the underlying issues here are socio-economic, and putting money into the community as opposed to putting money into surveillance.
</p>





        </b-col>
          <b-col md="2"> </b-col>
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
