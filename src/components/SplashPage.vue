<style scoped>

@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');


h3 {
    margin-top: 40px;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: #212322;
}

p {
    text-align: justify;
}

#introduction {
    margin-top: 20px;
    font-family: 'Inconsolata', monospace;
    color: #212322;
}

#short-review {
    font-family: 'Inconsolata', monospace;
}

#review-title {
    font-family: 'Open Sans', sans-serif;
}

#review-end {
    font-family: 'Open Sans', sans-serif;
}

#icon-text {
    font-family: 'Open Sans', sans-serif;
    color: #212322;
}

#why {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  color: #212322;
}

#read_full {
  font-family: 'Open Sans', sans-serif;
  color: #212322;
}

</style>

<template>

<div>
    <b-row align-h="center" style="background-image: linear-gradient(#D3D3D3, white);">
        <b-col cols="4">
            <h3>A critical resource for the meal-replacement curious</h3>
        </b-col>
    </b-row>
    <!--end header -->

    <b-row align-h="center" style="border-bottom: 1px solid #D3D3D3;">
        <b-col cols="10" id="introduction">
            <p>

                Throughout this past year, I’ve become fascinated with meal replacements. From their surprising form and aspiration to replace normal food, to the entire growing culture and community base around them, I’ve delved deep into the rabbit hole. I have now
                spent more than 6 months learning everything I could about them. I think I am ready to leave my review.

            </p>


            <p>
                If you're in any way curious about this growing trend of replacing traditional food with tech food, you might find this useful. My personal opinion is based on an extensive research that has developed into a video essay, a written essay and a collection
                of material in various media that illustrates my views.
            </p>
        </b-col>
    </b-row>
    <!--end introduction -->
<b-row align-h="center">
  <b-col cols="3" id="why">
  Why meal replacements?
</b-col>
</b-row>
    <b-row align-h="center">
        <b-col cols="2" style="text-align:center;">
            <font-awesome-icon icon="stroopwafel" size="4x" />
            <p id="icon-text" style="text-align:center;">
                Replacing cooking
            </p>
        </b-col>
        <b-col cols="3" style="text-align:center;">
            <font-awesome-icon icon="stopwatch" size="4x" />
            <p id="icon-text" style="text-align:center;">
                Saving time
            </p>
        </b-col>
        <b-col cols="2" style="text-align:center;">
            <font-awesome-icon icon="code" size="4x" />
            <p id="icon-text" style="text-align:center;">
                Providing solutions
            </p>
        </b-col>
    </b-row>
    <!-- end first row of icons-->


    <b-row align-h="center">
        <b-col cols="2" style="text-align:center;">
            <font-awesome-icon icon="search-dollar" size="4x" />
            <p id="icon-text" style="text-align:center;">
                Adding value
            </p>
        </b-col>
        <b-col cols="2" style="text-align:center;">
            <font-awesome-icon icon="seedling" size="4x" />
            <p id="icon-text" style="text-align:center;">
                Changing the future
            </p>
        </b-col>
    </b-row>
    <!-- end second row of icons-->

    <b-row align-h="center" style="border-top: 1px solid #D3D3D3;">
        <b-col cols="2" id="review_end">
            <p style="text-align: right;">
                Alice says:
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star-half-alt" />
            </p>
            <p style="font-size: 12px; text-align: right;">
                Verified user
                <font-awesome-icon icon="user-check" style="color: green" />
            </p>
        </b-col>
        <b-col cols="8">
            <p id='review-title' style="font-weight: bold;">
                I have so many thoughts!
            </p>
            <p id='short-review'>
                “I tried meal replacements, got sucked into the culture, and I’ve come out with many thoughts. First of all...”
            </p>
        </b-col>
        <b-col cols="1" id="read_full">
            <b-button variant="light">
                <router-link to='/review'>Read full review</router-link>
            </b-button>


        </b-col>
    </b-row>
</div>

</template>

<script>

export default {
    name: 'SplashPage',
}

</script>
