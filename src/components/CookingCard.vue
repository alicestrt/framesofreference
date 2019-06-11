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
                <p style="text-align: center; font-weight: bold;">We love food, we hate having to cook it</p>
                <p>
                    There is a <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="theory_of_evolution" title="Theory of evolution ">theory of evolution</span> that says the following: the development of the Homo Sapiens brain happened
                    mainly due to the discovery of fire, and subsequently cooking. By using less energy to hunt, and spending less time chewing raw food, the <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="brain" title="Cooking Up Bigger Brains">human brain</span> had increasingly more space and time to develop new activities, ponder upon its surroundings
                    and grow in size. Throughout the years, cooking has maintained its crucial role worldwide, as a fundamental part of culture and society, but also as a way to make food safer to eat and easier to preserve. Cooking
                    also represented a catalyst for humans to become social beings, which became more civilized and introspective while sitting around the cooking fire <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="cooked" title="Cooked: A Natural History of Transformation">(Pollan, 2014)</span>. But while everybody benefited from the positive aspects of cooked food,
                    the labour associated with it became a task reserved only for some.
                </p>
                <p>
                    Women have been pushed towards domestic work ever since the evolution from more equal hunter-gatherer societies to settled agricultural societies <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="women_opression" title="Engels and the Origin of Women's Oppression">(Smith, 1997)</span>. Traditionally, men provided the food, earned at first by hunting, and later on through their
                    paid job. Women would be in charge of preparing food for everyone, and that role rarely changed. Throughout time, cooking as a means of caregiving became a practice identified more with women, while <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="performance_timetoeat" title="Cooking performance">cooking for entertainment </span> or skill
                    display was, and still is, associated with men (Cairns et al. 2010). In many households it is still often considered a special occasion when <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="man_cooking"
                    title="The cooking man">the man of the house cooks</span>. This view was reinforced in cooking advice from the 20th century; men do not cook on a daily basis, but <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="dad"
                    title="When dad cooks">when they do</span>, they cook dishes that best display their talents (Vester,
                    2015).
                </p>
                <p>
                    Discussing the gender politics of cooking, Pollan wonders: “Was home cooking denigrated because the work was mostly done by women, or did women get stuck doing most of the cooking because our culture denigrated the work?” (Pollan, 2014). Men often had
                    a privileged position when it comes to their cooking practice - mostly with meat, outdoors, seen as entertainment, while women’s cooking happened behind closed kitchen doors. Today, most of the world-renowned <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="male_chefs"
                    title="Google results for best chefs in the world"> chefs</span>, the ones who win
                    countless awards and get their own TV shows are men.
                </p>
                <p>
                    However, the more time we spend watching chefs cook meals we’ll never get to eat, the less time we spend cooking for ourselves. In the past decades, studies have shown that cooking time has declined (Pollan, 2014; <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="home_cooking"
                    title="The Slow Death of the Home Cooked Meal">Ferdman, 2015</span>). <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="cooking_timetoeat"
                    title="Cooking is not for everyone" left>Less cooking</span> in the average
                    household means, one the one side, less housework reserved for women. It also means that corporations make great profits from providing the food we eat on a daily basis, which comes with several downfalls. Food made by a corporation
                    has many more chemical ingredients, that people very rarely use in their kitchens (Pollan, 2014). Eating packaged foods has increased the distance between what raw ingredients are and where they come from, and the food we actually
                    consume. “Food becomes just another commodity, an abstraction. And as soon as that happens we become easy prey for <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="soylent_quote" title="A quote from Soylent" left>corporations selling synthetic versions</span> of the real thing - what I call edible foodlike substances.”(Pollan, 2014).
                </p>
                <p>
                    The phrase <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="woman_place" title="A woman's place">a woman’s place is in the kitchen</span>, or the home, has been traced back as far as Ancient Greece’s Aeschylus.
                    Since then, it has been restated and reinterpreted throughout history, in literature, art, and politics (Popik, 2013). We can see an example of this belief in <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="leave_it"
                    title="Leave it to the Beaver">a clip from Leave it to Beaver</span>, a popular 50s American sitcom. In it, the father explains to a confused son why he’s more suited to do all the grilling outdoors, while his mother works inside the
                    kitchen. “A woman’s place is in the home, and as long she’s in the home, she might as well be in the kitchen. Women do alright when they have all the modern conveniences, but us men are better at this rugged type of outdoor cooking.
                    Sort of a throwback to cavemen days.” (Leave it to Beaver, 1957). His last remark reinforces the idea that gender roles have an evolutionary development, are part of human nature and should not be questioned.
                </p>
                <p>
                    A brilliant example of the portrayal of women in the kitchen, from a woman’s perspective, is <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="martha_rosler" title="Martha Rosler">Martha Rosler’s Semiotics of the Kitchen</span>.
                    In this <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="semiotics" title="Semiotics of the Kitchen">performance piece</span>, set in a typical kitchen, Martha Rosler manipulates kitchen tools with sudden, violent gestures, sometimes even performing useless tasks such as pretending to throw the contents of a spoon over her shoulder.
                    Her piece is meant to express the frustration of women being stuck doing domestic labour, which is taken for granted. It is also a parody of the cooking shows of the time, particularly the one hosted by an always cheerful <span style='border-bottom: 2px black dashed;' v-b-popover.click.html="julia_show" title="The French Chef">Julia Child</span>.
                    In her mock culinary show, she is no longer a cheerful performer, but uses the tools that have been assigned to her as an expression of anger and frustration: “when the woman speaks, she names her own oppression” (Rosler, 1975). Her
                    piece shows that gender roles enforced traditionally within the household can be oppressive, especially when the labour of women is devalued and regarded as trivial.
                </p>
                <p>
                    As both men and women have been finding their place within the workforce, sharing the workload within the home has increased slightly. However, even in homes where both partners work full-time, the majority of chores and administrative tasks still fall
                    on the woman’s shoulders, either mentally, or in practice. The extra workload that consists of planning and organisation and leads to the execution of the tasks has been coined by feminists as <span style='border-bottom: 2px black dashed;'
                    v-b-popover.click.html="mental_load" title="The mental load">the mental load</span> (Emma, 2017). Household management is yet another invisible task done by women, a time-consuming work nonetheless, which adds up to the time already
                    spent doing house chores.
                </p>
                <p>
                    Today, technology corporations provide more options. Rather than sharing the work equally, both the mental load and the actual chores can be automated, to some extent, through technological solutions. No longer framed explicitly as women’s work, but continuing
                    to be (de)valued as such, tasks such as cooking can be facilitated through <span style='border-bottom: 2px black dashed;'
                    v-b-popover.click.html="taskrabbit" title="Taskrabbit fulfills your cooking needs">various apps</span>. From a tool of oppression directed at women, food becomes a task delegated to gig workers by startups and other corporations. Regarding food as
                    a tool of oppression has opened the way for many solutions, some more realistic than others. The <span style='border-bottom: 2px black dashed;'
                    v-b-popover.click.html="jetsons" title="Instant food machine from The Jetsons">automation of food and cooking</span> has been a recurrent topic of conversation and space for imagination both within social movements, and
                    in popular culture.</p>
            </div>
        </b-col>

    </b-row>
</div>

</template>

<script>

export default {
    name: 'CookingCard',
    data: function() {
        return {
            theory_of_evolution: '<a href="https://www.scientificamerican.com/article/cooking-up-bigger-brains/?redirect=1" target="_blank"> A theory developed by Richard Wrangham, biological anthropologist at Harvard University</a>',
            woman_place: '<a href="https://www.barrypopik.com/index.php/new_york_city/entry/a_womans_place_is_in_the_kitchen/" target="_blank"> The origins of the phrase </a>',
            leave_it: '<iframe width="250" height="200" src="https://www.youtube.com/embed/MXhlTQJcgbc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            mental_load: '<iframe width="250" height="200" src="https://i.guim.co.uk/img/media/e916cc0a952d793c9f82dcd6954afcac63d68c87/0_0_2000_2000/master/2000.png?width=1920&quality=85&auto=format&fit=max&s=a2b1fc7a0500118c9bf17bc660b566b9"></iframe>',
            martha_rosler: '<img width="300" height="200" src="./media/topics/gender_in_food/images/martha.jpg"></img>',
            man_cooking: '<iframe width="250" height="200" src="https://archive.org/embed/Wordtoth1955" width="200" height="2000" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>',
            semiotics: '<iframe width="250" height="200" src="https://www.youtube.com/embed/ZuZympOIGC0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            women_opression: '<a href="https://www.isreview.org/issues/02/engles_family.shtml" target="_blank"> "The rise of class society brought with it rising inequality–between the rulers and the ruled, and between men and women"</a>',
            julia_show: '<iframe width="250" height="200" src="https://www.youtube.com/embed/hWi3NwDrQok" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            jetsons: '<img width="300" height="200" src="./media/topics/cooking/images/jetsons.gif"></img>',
            male_chefs: '<img width="600" height="300" src="./media/topics/gender_in_food/images/chefs.gif"></img>',
            cooked: '<a href="https://en.wikipedia.org/wiki/Cooked:_A_Natural_History_of_Transformation" target="_blank"> Michael Pollan writes a manifesto for cooking in his 2014 book</a>',
            dad: '<iframe width="100%" height="265" src="https://clyp.it/vc1zjuvo/widget" frameborder="0"></iframe>',
            home_cooking: '<a href="https://www.washingtonpost.com/news/wonk/wp/2015/03/05/the-slow-death-of-the-home-cooked-meal/?noredirect=on&utm_term=.3da4866e460d" target="_blank">"Less than 60 percent of suppers served at home were actually cooked at home last year. Only 30 years ago, the percentage was closer to 75 percent."</a>',
            brain: '<a href="https://www.scientificamerican.com/article/cooking-up-bigger-brains/?redirect=1" target="_blank"> "Our hominid ancestors could never have eaten enough raw food to support our large, calorie-hungry brains, Richard Wrangham claims. The secret to our evolution, he says, is cooking" </a>',
            taskrabbit: '<img width="500" height="200" src="./media/topics/post-mom_economy/images/task.png"></img>',
            cooking_timetoeat: '<iframe width="250" height="200" src="./media/topics/cooking/video/cooking.mp4"></iframe>',
            soylent_quote: '<img width="600" height="300" src="./media/topics/meal_replacement_brands/quotes/soylent2.png"></img>',
            performance_timetoeat: '<iframe width="250" height="200" src="./media/topics/gender_in_food/video/making_huel.mp4"></iframe>',

        }
    },
}

</script>
