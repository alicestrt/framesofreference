<style scoped>

* {
    border: 0px black solid;
}

p {
    text-align: justify;
    font-size: 18px;
    color: #212322;
    font-family: 'Inconsolata', monospace;
    background-color: #f0f0f0;

}

</style>

<template>

<div>
    <b-row align-h="center">
        <b-col cols="10">
            <div class="card_content">
              <p style="text-align: center; font-weight: bold;">Techno-solutionism and the rise of meal replacements</p>

                <p>The way we eat and think of food today is bound to change. The increasing demand for food, especially meat and dairy, combined with the damaging effects of climate change on agriculture (Cho, 2018), has the potential to push the food industry
                    in new directions, and consumers to reconsider their choices. Within this context, technology companies, the new actors on the food industry stage, are putting forward a solution which regards food as being archaic and inefficient,
                    and the practices around food preparation as time-wasters. Their solution, materialized in products dubbed as ‘complete foods’ or ‘meal replacements’, which allegedly contain all the essential nutrients for the human body, is backed
                    up by <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="funding" title="Despite setbacks, Soylent drinks up $50 million in fresh funding">huge financial support</span> from venture capital, and presented as the future of food. However, besides that fact that it <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="solution_timetoeat" title="To what extent do meal replacements represent solutions">does not offer a real solution </span> to the problems we are facing, this interpretation of food does not reflect its
                    historical importance. The cultural role of food, gender representation, or collective values associated with sharing food, are largely disregarded. Instead, the emphasis is on the continuous quest to improve food products, within
                    the value system of <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="techno_solutionism" title="Evgeni Morozov on techno-solutionism">techno-solutionism</span>. In his book To Save Everything, Click Here, Evgeny Morozov critically describes this value system, explaining that “this never-ending quest to ameliorate [. . . ] is shortsighted and only perfunctorily
                    interested in the activity for which improvement is sought” (Morozov, 2013). This critique applies to the development of meal replacements, the materialization of techno-solutionism in food, which are promoted as an <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="benefits" title="The benefits of Huel">universal response</span>
                    to anything from time management, nutritional dilemmas, food waste and sustainability. Throughout this work, I will look at the development and implications of the meal replacement phenomenon, and, through the lens of food, provide
                    an outlook on tech industry’s influence on Western culture.
                </p>
                <p>(...)</p>
                <p>
                    The rise of products branded as innovative foods has largely happened in the last decade, originating from Silicon Valley. The latest innovations, such as meal replacements, make promises for an empowered self, with full control over what one puts in
                    one’s body. Companies place a lot of emphasis on a scientific approach to selecting ingredients for a particular product, and brand their products as technologically advanced food items. But the process of producing or sourcing the
                    ingredients is almost never exposed, thus further obscuring the processes involved in food production. One notable example is the company Huel, which created a <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="how_its_made" title="Devon to Doorstep. How Huel is Made">video on YouTube</span> titled How Huel Is Made, but failed to actually show their
                    process. Instead, the video described its packaging and delivery system, a fact that was quickly noted in the <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="comment" title="A comment on the video allegedly showing how Huel is made">comments</span> section as disingenuous.</p>
                <p>The celebration of not having time to tend to your bodily needs properly, together with the emphasis on giving the body personalized nutrition in the most pleasureless way is, of course, a paradoxical incongruity. At the same time, the
                    idea that you are <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="humans_timetoeat" title="You're the only one responsible for your success and failure">solely responsible</span> for your well-being, and that you can control your health and efficiency with the right consumer habits is another heavily promoted concept. Trying to reconcile and adopt all these suggestions for
                    how one should live their life is almost impossible, and leads to burnout. However, startups in Silicon Valley and all over the world are more than ready to provide products to any imaginable issue that can be identified, in order
                    to achieve their prescribed quality of life. This is problematic in many ways, because it completely ignores other factors that influence our lives, such as social class, income, education, access etc, while promoting efficiency and
                    production as the main goals to be achieved by humans.</p>


            </div>
        </b-col>

    </b-row>
</div>

</template>

<script>

export default {
    name: 'SolutionsCard',
    data: function() {
        return {

            techno_solutionism: '<iframe width="250" height="200" src="https://www.youtube.com/embed/fOvaNzIxz54?start=26" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            lot_2046: '<a href="https://www.lot2046.com/">LOT is a subscription-based service which distributes a basic set of clothing, footwear, essential self-care products, accessories, and media content.</a>',
            solution_timetoeat: '<video width="250" height="200" controls autoplay src="./media/topics/meal_replacement_products/video/end_of_day_cut.mp4"></video>',
            humans_timetoeat: '<video width="250" height="200" controls autoplay src="./media/topics/personal_experience/video/humans.mp4"></video>',
            comment: '<img width="800" height="600" src="./media/topics/personal_experience/communities/images/doorstep.png"></img>',
            how_its_made: '<iframe width="560" height="315" src="https://www.youtube.com/embed/NpK63Auk1_A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            funding: '<a href="https://techcrunch.com/2017/05/04/despite-setbacks-soylent-drinks-up-50-million-in-fresh-funding/"></a>',
            benefits: '<img src="./media/topics/meal_replacement_brands/images/icons/huel.png"></img>',

        }
    },
}

</script>
