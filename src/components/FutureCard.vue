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
              <a name="future_title"><p style="text-align: center; font-weight: bold;">Becoming robots, losing our tastebuds</p></a>

                <p>
                    Within the mainstream technology field, there is a current trend towards enhancing brain and physical capacities through consumer products. More specifically, disconnecting the weakness of the body from the sharpness of the mind can be identified in trends
                    such as, genomics, the quantified self and biohacking. These are also a result of the frustration of not being able to change some aspects of life, such as the need to eat, rest, and the inevitability of death. Within the small circles
                    of the world’s millionaires, these issues are of great interest, with fortunes invested into research and development. </p>
                <p>
                    In the view of Ray Kurzweil, the famous self-proclaimed futurist, the body deserves no respect in its fragility, and all its shortcomings can be conquered through the intelligence of the brain <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="kurzweil" title="The trailer of Transcendent Man">(Transcendent Man, 2009)</span>. In the future he predicts, a transhumanist
                    future, the body as an unique physical entity has no place, when <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="brains" title="Ray Kurzweil wants us to go beyond human">our minds</span> will be able to explore many new worlds and inhabit virtual bodies, while holding vast amounts of universal knowledge.</p>
                <p>
                    Relating back to the previous chapter, meal replacements represent an ideological universal solution to the problem of the body. In my view, they play the role of a consumer market-friendly product which comes as an introduction to bigger and more
                    profitable issues, such as disease and aging. However, like universal knowledge, universal nutrition cannot represent a solution to the needs of the entire planet. The answers currently provided by companies which produce meal replacements
                    are not as sustainable, affordable and appealing as they claim (Huel.com, 2017). Even though companies such as Soylent pride in collaborating with the World Food Program to provide meals for those in need, I believe that corporate
                    solutions are not what the world needs to deal with its most pressing problems, such as climate change, poverty and access to food and water.
                </p>
                <p>
                    In recent years, more and more money and intelligence have been invested in Silicon Valley into studying the human body. The focus is not so much on curing diseases such as cancer and diabetes, but specifically on curing the one ‘disease’ affecting the
                    upper classes: growing old. The richest of the rich are deeply invested in  <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="white_men" title="The rich need more time to spend their fortunes">making themselves live as long as possible</span>. The most likely implication of this plan is that anti-aging technologies will only be available to the elite, and
                    will not benefit the rest of the world in any way. Even Bill Gates has recently warned the world that gene editing technology will only contribute to even greater inequality between the rich and the poor (Court, 2019).
                </p>
            </div>
        </b-col>

    </b-row>
</div>

</template>

<script>

export default {
    name: 'FutureCard',
    data: function() {
        return {


            kurzweil: '<iframe class="img-fluid" src="https://www.youtube.com/embed/ntY01qoIdus" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            brains: '<iframe class="img-fluid" src="https://www.youtube.com/embed/zDj5Drh5ZIE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            white_men: '<a href="https://splinternews.com/life-extension-technology-gives-us-a-bleak-future-more-1793857274" target="_blank">Life extension technology gives us a bleak future: more white men</a>',
        }
    },
}

</script>
