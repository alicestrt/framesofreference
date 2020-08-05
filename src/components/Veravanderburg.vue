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

</style>





<template>

<div>
    <MenuBar/>


    <b-row>
        <b-col md="6" offset-md="3">
          <b-img class="photo" center src="media/halfhouse.jpg"></b-img>
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

<p class="interviewbody">I'm very curious to hear what you think about the Dutch government working towards a corona-virus track and trace app, since I know you've studied AI and its behaviours pretty extensively, although in a different context. From what I understand from reading your thesis you started out with an interest in using AI as a co-designer in your design process.
 </p>

 <p class="interviewbody">So has your opinion on AI evolved since then?  Do you see any benefit for the application of AI in surveillance platforms such as this app? Like do you think this is actually going to work?
  </p>

  <p class="metadata">On June 8th, 2020 at 3:23 pm Vera wrote:</p>

<p class="interviewbody">Honestly I find it a difficult question, I havent been looking into surveillance and AI that much, and have been mainly interested in specifically machine learning and how you can teach an intelligent system about constructs existing in the real world.</p>

<p class="interviewbody">However, when it comes to surveillance, a system has to be taught what is ‘bad’ and what is ‘good’ behavior. I do think AI can augment our ability to re-trace where a virus originated from and how it spreads (I think this is what they are aiming for with the app?), but I do think the developers should be critical towards how they program the app. Do they inbed their own values and standards in the app? What happens if real life situations become more ambiguous, how does the app decide or respond? And so forth...</p>

<p class="interviewbody">I understand that AI is alluring to use, however I think their should be significant thinking in IF the use of an app is ACTUALLY better than human thinking and reasoning, or if it will just cause more controversy and problems...</p>


  <p class="metadata">On June 8, 2020 at 3:43pm Gill wrote:</p>

<p class="interviewbody">Haha honestly it IS a difficult question, one I don't think there are clear answers for, it's kind of why I started emailing people I knew to try and get different opinions because honestly I didn't have a freaking clue, but I am getting some very interesting responses.
</p>

<p class="interviewbody">Can you maybe elaborate on what you mean by constructs existing in the real world? Do you mean like how you teach an AI to learn via dataset training? Or is it something else altogether.
</p>

<p class="interviewbody">So if this system is being taught what is good and what is bad behaviour, in terms of the corona virus, could bad behaviour be say going to gatherings, or having close contact with strangers. But then like you say ambiguous situations could happen, protests for example. This track and trace app could isolate individuals who were maybe in the moment doing the - human- the right thing to do in the situation.
</p>

<p class="interviewbody">I think if the government goes through with this app, how do they reinforce it, do you get fined? Do you get ticketed and have to appeal to the city?
</p>

<p class="interviewbody">I guess what I'm learning in some of the conversations I'm having is that absolutely the programmers own standards and values will get programmed into the app, thats just how this shit works, creating a ripple effect that reaches very far.
</p>

<p class="interviewbody">Curious, why do you think AI is alluring to use? I wonder what the advantages of human thinking and trust and reasoning here are, and I wonder if Dutch society values those over technology.
</p>

  <p class="metadata">On June 8, 2020 at 4:25 pm Vera wrote:
</p>

<p class="interviewbody">No that’s what I mean! Training the AI using a data set. For example, if you want to teach a system what is a suspicious body movement, how do you capture that in datasets? And what medium should these datasets contain? If this makes sense.
</p>

<p class="interviewbody">Exactly ! And who is going to decide what is right or wrong? ;)

As you can see, still lots of things that have to be solved...

Yes, that’s why an ‘algorithmic guard dog’ could be employed to examine what decision have been made and why in the programming phase.

</p>


<p class="interviewbody">Well, the thing with (at least) machine learning is that it is nothing more than a pattern recognizer. And it can deal with a large amount of data quite fast, faster than humans for example. However, sometimes merely a pattern recognizer is not sufficient for these complex goals, also ever since algorithm cannot make actual interpretations or give meaning to something, that’s what humans do. Not sure if Dutch society likes the ‘alluring’ character of AI per se, but I do feel there is still a certain novelty and excitement about it, because it is new and it sounds cool obviously. But sometimes being very fast in recognizing patterns is, as I said, not enough in complex real life situations.
</p>


    <p class="metadata">On June 8, 2020 At 5:09 pm Gill wrote:</p>

  <p class="interviewbody">Right, but what qualifies as a suspicious body movement? Running for example in a public space thats not designated for running? Sudden quick movements? I mean even smiling at someone unexpectedly across the street can make them feel uncomfortable haha. And suspicious body movements cannot be separated by what we deem "suspicious bodies" POC/LBGTQ bodies, so those folks are at risk here no?
  </p>

  <p class="interviewbody"> I went to a workshop last year where participants were to go to a square in Rotterdam and try out different movements for the surveillance and AI tracking systems. The strangest thing they could of done was to stand in space for a long time, not moving simply because it stood out from the crowds of people that were passing through the square.
  </p>

  <p class="interviewbody">An algorithmic guard dog could be really interesting, but I wonder if it would need to be deployed not just in the programming phase, but like every single phase and especially in the evaluation once it is out operating in the world, and sadly I wonder if thats even possible.
  </p>

  <p class="interviewbody">Right so an AI's ability to take large amounts of information, (patients who have corona virus symptoms and where they travel and who their interact with) is an advantage so the government can understand where the virus is. But then what is the alert like ? Then it seems like it needs to be paired with a compassionate human solution, like develop like community care checkin's, or could it alert your work to find a temporary replacement for you, so you don't have to go in, or it alerts your loved ones. It sounds idealistic but I'm wondering how could it be used to actively help, rather than isolate (using that term in a negative way here) haha
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
