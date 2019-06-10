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
              <p style="text-align: center; font-weight: bold;">The value of time in the post-mom economy</p>

                <p>
                    The contemporary field of technology has created a world that suits its workers perfectly. A well-paid position in IT allows one to move from mom’s home, which also means moving away from all the benefits that come with living under her roof. But the
                    solution to all the extra work on their shoulders, which they are often unprepared or unwilling to do, can be easily fixed. Mother, in this situation, can be replaced with software tools - services performed via applications by gig
                    workers.
                </p>
                <p>
                    In the <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="post_mom_economy" title="The post-mom economy">post-mom economy</span> (Maney, 2015), there are services like Uber to drive you around, <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="washio" title="Washio">Washio</span> to do your
                    laundry, <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="delivery" title="Can You Make a Living as a Delivery App Bike Messenger?">Deliveroo</span> to bring your food, <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="lot_2046" title="Lot 2046">Lot 2046</span> to send you regular supplies of clothes and grooming items, <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="sleepscore" title="Sleepscore">Sleepscore</span> to wake
                    you up, and <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="hydrocoach" title="Hydrocoach">HydroCoach</span> to remind you to drink water. These tasks, forms of unpaid labour traditionally reserved for the woman in the household, are deemed not worthy of one’s already limited time, in a culture where people are being
                    constantly pushed to perform and be productive. Within the current economic regime, this workload is often performed by so-called gig workers, self-employed labourers controlled by applications, who work under the premise that they
                    can manage their time however they want. Once mommy stopped providing these services, it’s time for her to be <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="replace" title="Post-Mom Jobs">replaced</span> with an app. </p>
                <p>
                    The main goal of these services it to convince users to separate important decisions from meaningless ones, and focus their time on paid labour. Deciding how to dress and what to eat can be outsourced to a corporation, which uses this as its selling point.
                    This form of convenient consumption limits the need to think about your choices, and becomes an automated form of comfort. Within this mindset, cooking is being presented as a chore rather than an activity that can be done as leisure.
                    Entrepreneurs are encouraged, <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="startup_timetoeat" title="What problems are addressed, and how, and by whom?">or rather pressured</span>, to find solutions to problems they are facing themselves, and monetize every aspect of life. For many, the problem they face is becoming an adult with too much money to spend, and
                    too little time outside of work. Keeping a constant high level of performance at work does not allow much time and mind space for dealing with the practicalities of adult life, especially when they are framed as low-value, time-consuming
                    activities, and the latest consumer products reflect this reality.</p>
                <p>
                    The post-mom economy reflects embedded preconceptions on gender roles within the home. When the main provider of these services is not available, startups offer the option to replace her with a techno-solutionist product, that brings convenience for those
                    who can afford it, while pushing others into low-wage gig work. Instead of reflecting on the value of maintaining a home and caregiving, or on the struggles of those who are pushed into these roles, the tasks are simply delegated to
                    strangers. This further increases the infiltration of corporations into our lives under the pretense of earning more freedom (Pollan, 2014), while continuing to devalue what is regarded as women’s work. Unless it is done for the purpose
                    of entertainment, cooking is framed as an archaic chore, subjected to the specialization of labour, and awarded with a low wage.</p>
            </div>
        </b-col>

    </b-row>
</div>

</template>

<script>

export default {
    name: 'TimeCard',
    data: function() {
        return {

            post_mom_economy: '<img  width="300" height="200" src="/media/topics/post-mom_economy/images/post_mom.png"></img>',
            lot_2046: '<a href="https://www.lot2046.com/" target="_blank">LOT is a subscription-based service which distributes a basic set of clothing, footwear, essential self-care products, accessories, and media content.</a>',
            washio: '<a href="http://www.thewashio.com/" target="_blank">"We know that your busy schedule will not allow you to do laundry at home, so let us takecare of your laundry - you can take care of what matter most to you"</a>',
            delivery: '<iframe width="250" height="200" src="https://www.youtube.com/embed/2I0fxeeI1sg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            replace: '<img  width="300" height="200" src="/media/topics/post-mom_economy/images/post_mom_jobs.png"></img>',
            sleepscore: '<a href="https://www.sleepscore.com/" target="_blank">We’re the sleep company changing the world by changing the way you sleep</a>',
            hydrocoach: '<iframe width="250" height="200" src="https://www.youtube.com/embed/iFnfkDV_5P4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            startup_timetoeat: '<img  width="300" height="200" src="/media/topics/post-mom_economy/video/startup.mp4"></img>',



        }
    },
}

</script>
