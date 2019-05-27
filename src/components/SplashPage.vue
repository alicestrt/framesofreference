<template>
<div>
<div class="row justify-content-center">
      <div class="col-md-12 text-center" id="header">
        <h2>A resource for the meal-replacement curious</h2>
      </div>
    </div> <!--end header -->

    <div class="row justify-content-center" style="border-bottom: 1px solid #D3D3D3;">
      <div class="col-md-10 text-left" id="introduction">
        <p>

          Throughout this past year, I’ve become fascinated with meal replacements. From their surprising form and aspiration to replace normal food, to the entire growing culture and community base around them, I’ve delved deep into the rabbit hole. I have now spent more than 6 months learning everything I could about them. I think I am ready to leave my review.

          </p>


        <p>
          If you're in any way curious about this growing trend of replacing traditional food with tech food, you might find this useful. My personal opinion is based on an extensive research that has developed into a video essay, a written essay and a collection of material in various media that illustrates my views.
        </p>
      </div>
    </div> <!--end introduction -->

    <div class="row justify-content-center mt-5">
      <div class="col-md-4 text-center">
        <font-awesome-icon icon="stroopwafel" size="5x"/>
        <p style="text-align:center;">
          Replacing cooking
        </p>
      </div>
      <div class="col-md-4 text-center">
        <font-awesome-icon icon="stopwatch" size="5x"/>
        <p style="text-align:center;">
          Saving time
        </p>
      </div>
      <div class="col-md-4 text-center">
        <font-awesome-icon icon="code" size="5x"/>
        <p style="text-align:center;">
          Providing solutions
        </p>
      </div>
    </div> <!-- end first row of icons-->


    <div class="row justify-content-center mt-5" style="border-bottom: 1px solid #D3D3D3;">
    <div class="col-md-2 text-center"> </div>
      <div class="col-md-4 text-center">
        <font-awesome-icon icon="search-dollar" size="5x" />
        <p style="text-align:center;">
          Adding value
        </p>
      </div>
      <div class="col-md-4 text-center">
        <font-awesome-icon icon="seedling" size="5x" />
        <p style="text-align:center;">
          Changing the future
        </p>
      </div>
      <div class="col-md-2 text-center"> </div>
    </div> <!-- end second row of icons-->

    <div class="row justify-content-between mt-5">
      <div class="col-md-2">
      <p style="text-align: right;">
        Alice says:
        </p>
        <p style="font-size: 12px; text-align: right;">
        Verified user
        <font-awesome-icon icon="user-check" style="color: green" />
        </p>
      </div>
      <div class="col-md-8">
      <p style="font-weight: bold;">
      I have so many thoughts!
      </p>
      <p>
        “I tried meal replacements, got sucked into the culture, and I’ve come out with many thoughts.  First of all...”
      </p>
      </div>
      <div class="col-md-2">
  <b-button variant="light"><router-link to='/review'>Read full review</router-link></b-button>


      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'SplashPage',
}
</script>

<style scoped>
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
