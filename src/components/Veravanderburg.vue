<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Raleway:wght@400;500&display=swap');

* {
border: 0px black solid;
}
.title {
  text-align: center;
padding-top: 0px;
color: black;
font-family: 'Raleway', sans-serif;
font-weight: 500;
}

.content {
padding-top: 20px;
padding-bottom: 100px;
}

.metadata {
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  padding-top: 60px;
  padding-bottom: 5px;
}

.interviewbody {
  font-family: 'Raleway', sans-serif;
  text-align: justify;
  font-size: 16px;
  font-weight: 500;

}

.photo {
  width: 100%;
  padding-top: 110px;
}

.interview_name {
  font-family: 'Playfair Display', serif;
  text-align: center;
  font-size: 18px;
  padding-top: 40px;
  font-weight: bold;

}

.next {
  font-family: 'Playfair Display', serif;
  text-align: center;
  font-size: 18px;
  padding-bottom: 100px;

}

.next a {
  text-decoration: none;
  color: black;

}

.next a:hover {
  font-weight: bold;
}


@media (max-width: 575px) {
  .interview_name {
    text-align: center;
    padding-left: 25px;
    padding-right: 25px;
  }

  .interviewbody {
    text-align: left;
    padding-left: 25px;
    padding-right: 25px;
  }

  .title {
    text-align: center;
    padding-left: 25px;
    padding-right: 25px;
  }

  .metadata {
    padding-left: 25px;
    padding-right: 25px;

  }

  .photo {
    width: 70%;
  }
}

a {
    color: black;
}

a:hover {
  color: black;
  text-decoration: none;
  font-weight: bold;
}

</style>





<template>

<div>
    <MenuBar/>


    <b-row>
        <b-col md="6" offset-md="3">
          <b-img class="photo" center src="media/vera.svg"></b-img>
        </b-col>
    </b-row>

    <b-row>
        <b-col md="6" offset-md="3">
          <p class= "interview_name"> Vera van der Burg </p>
        </b-col>
    </b-row>


    <b-row class="title">
      <b-col md="6" offset-md="3">
          <p>conversation on 8/06/2020</p>
      </b-col>
    </b-row>



    <b-row class="content">
        <b-col md="6" offset-md="3">
    <p class="metadata">On June 8th, 2020 at 1:00 pm Gill wrote:</p>

<p class="interviewbody">I'm very curious to hear what you think about the Dutch government working towards a coronavirus track and trace app; since I know you've studied AI and its behaviours pretty extensively, although in a different context. From what I understand from reading your thesis, you started out with an interest in using AI as a co-designer in your creative process.
 </p>

 <p class="interviewbody">So has your opinion on AI evolved since then? Do you see any benefit for the application of AI in surveillance platforms such as this app? Like do you think this is actually going to work?
  </p>

  <p class="metadata">On June 8th, 2020 at 3:23 pm Vera wrote:</p>

<p class="interviewbody">Honestly, I find it a difficult question, I haven't been looking into surveillance and AI that much, and have been mainly interested in specifically machine learning and how you can teach an intelligent system about constructs existing in the real world.</p>

<p class="interviewbody">However, when it comes to surveillance, a system has to be taught what is ‘bad’ and what is ‘good’ behaviour. I do think AI can augment our ability to re-trace where a virus originated from and how it spreads (I think this is what they are aiming for with the app?), but I do think the developers should be critical towards how they program the app. Do they embed their own values and standards in the app? What happens if real life situations become more ambiguous, how does the app decide or respond? </p>

<p class="interviewbody">I understand that AI is alluring to use, however I think their should be significant thinking in IF the use of an app is ACTUALLY better than human thinking and reasoning, or if it will just cause more controversy and problems...</p>


  <p class="metadata">On June 8, 2020 at 3:43pm Gill wrote:</p>

<p class="interviewbody">Can you elaborate on what you mean by ‘constructs existing in the real world’? Does this refer to how one would teach an AI to learn, via dataset training? Or is it something else altogether?
</p>


<p class="interviewbody">If this system is being taught what is good and what is bad behaviour, in terms of the coronavirus, bad behaviour could be going to gatherings, or having close contact with strangers. But then ambiguous situations could happen, protests for example. This track and trace app could isolate individuals who were maybe in the moment doing the, human, or, the right thing to do in the situation.
</p>

<p class="interviewbody">If the government goes through with this app, I wonder how they will reinforce it.
</p>

<p class="interviewbody">What I'm learning in some of the conversations I'm having, is that the programmers own standards and values will absolutely get programmed into the app, that's just how this works, creating a ripple effect that reaches incredibly wide.
</p>

<p class="interviewbody">I’m curious, why do you think AI is alluring to use? I wonder what the advantages of human thinking and trust and reasoning here are, and I wonder if Dutch society values those advantages over technology?
</p>

  <p class="metadata">On June 8, 2020 at 4:25 pm Vera wrote:
</p>

<p class="interviewbody">No that’s what I mean! Training the AI using a data set. For example, if you want to teach a system what constitutes a suspicious body movement, how do you capture that in a dataset? And what medium should these datasets contain?
</p>

<p class="interviewbody">I think the main question here is, who is going to decide what is right or wrong? The ambiguous situations still leave many problems that have to be solved. Some suggest that an ‘algorithmic guard dog’, or a sort of “equality check” could be employed to examine what decision has been made, and why, at the initial start of the programming phase.
</p>


<p class="interviewbody">The thing with (at least) machine learning is that it is nothing more than a pattern recognizer. And it can deal with a large amount of data quite fast, faster than humans for example. However, sometimes merely a pattern recognizer is not sufficient for these complex goals, since an algorithm cannot make actual interpretations or give meaning to something, that’s what humans do and are actually the best at. I’m not sure if Dutch society likes the ‘alluring’ character of AI per se, but I do feel there is still a certain novelty and excitement about it, because it is new and it sounds cool. But sometimes being very fast in recognizing patterns is, as I said, simply not enough in complex real life situations.
</p>


    <p class="metadata">On June 8, 2020 At 5:09 pm Gill wrote:</p>

  <p class="interviewbody">Right, but on what grounds can one qualify a suspicious body movement? Running for example, in a public space that's not designated for running? Even smiling at someone unexpectedly across the street can make them feel uncomfortable. Suspicious body movements cannot be separated by what we deem "suspicious bodies" POC/LBGTQ bodies, so those folks are at risk here no?
  </p>

  <p class="interviewbody"> I went to a workshop last year where participants were instructed to go to a Schowbergplein in Rotterdam and try out different body movements for the surveillance cameras that were set up for the workshop. The strangest thing that the participants did was to stand, immobile, in the square for a long time, , simply because it was different from the crowds of people that were passing through the square.
  </p>

  <p class="interviewbody">An algorithmic guard dog could be really interesting, but I wonder if it would need to be deployed not just in the programming phase, but also in every single phase and especially in evaluating once it is fully operational in the world, and sadly, I wonder if that's even possible.
  </p>


        </b-col>
    </b-row>

    <b-row class= "next">
      <b-col md="1" offset-md="5">
        <p><a href="/RezaNik"> previous </a></p>
      </b-col>

      <b-col md="1">
        <p><a href="/EmmaFagan"> next </a></p>
      </b-col>
    </b-row>


</div>

</template>

<script>

import MenuBar from './MenuBar'
export default {
    name: 'Veravanderburg',
    components: {
        MenuBar
    }
}

</script>
