<style scoped>

@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

b-card {
    border: 0px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

{
    opacity: 0;
}

.intro_text {
    text-align: justify;
    font-size: 16px;
    color: #212322;
    font-family: 'Inconsolata', monospace;

}

.review_block {
    border-bottom: 1px solid #D3D3D3;

}

.icon_dropdown {
    margin-top: 10px;
    margin-bottom: 10px;
}

.card-text {
    font-family: 'Inconsolata', monospace;
    font-size: 14px;
}

.card-title {
    font-family: 'Open sans', sans-serif;
    font-size: 16px;
    font-weight: bold;
}

.read-button {
    text-decoration: none;
    color: #212322;
    font-size: 14px;
}

.main-cards {
    margin-top: 20px;
}

#intro_title {
    font-weight: bold;
    text-align: center;
    font-size: 30px;
    color: #212322;
    font-family: 'Open Sans', sans-serif;
}


</style>

<template>

<div>

    <MenuBar/>
    <!-- End of top menu-->
    <div class="review_block">
      <b-container fluid>
        <b-row align-h="center" class="mb-2">

            <b-col cols="10">
                <p id="intro_title">THE REVIEW</p>
                <div class="intro_text">
                    <p>
                        ... this goes beyond a default review. Rather than discussing the physical characteristics of one product or another, my analysis focuses on the broader context in which these products have developed, highlights the patterns of techno-solutionism I've identified as problematic, and deconstructs their benefit claims and potential for becoming increasingly relevant in today's Western societies. At the same time, having experienced such a diet myself, it also represents a situated look at what replacing food entails.
                    </p>
                    <p>
                        I've become interested in meal replacements because the concept of rejecting food as inefficient, and replacing it with an ultra-processed powder, intrigued me. The idea was alienating, so far removed
                        from my values and desires, so I had to look deeper. I ended up writing an essay, following the historical path and cultural patterns that led to the growth of a culture, an ideology, a community around the act of diminishing the importance of one
                        of the most basic human habits. In addition to the text, I translated my research into a video essay, which focuses on the techno-solutionist aspects of meal replacements: the problems they claim to address, and the solutions they put forward.
                    </p>
                    <p>
                        Below, you will find excerpts of my essay, split into the main topics covered in my research. Scattered throughout the text are images, references, articles, quotes and video snippets, some extracted from my own video essay, which together build a complex
                        image of the world of meal replacements.
                    </p>
                </div>
            </b-col>

        </b-row>
        <b-row align-h="center">
  <!--        <b-col cols="6" class="text-center">
            <iframe src="https://giphy.com/embed/Jpq4T77gjhcLytGjvk" width="240" height="120" frameBorder="0" allowFullScreen></iframe>
          </b-col> -->
        </b-row>
      </b-container>
    </div>
    <!-- End of description-->

    <b-row align-h="center" class="icon_dropdown">
        <b-col md="2" sm="12" class="text-center">
            <b-dropdown dropup variant="light" @click="onClick" no-caret class="m-2">
                <span slot="text"> <font-awesome-icon icon="stroopwafel" size="3x" /></span>
                <b-dropdown-text style="width: 240px;">
                    Meal replacements aim to replace food with food-like substances, removing the need to cook. But why is the relationship between humans and cooking important in the first place?

                </b-dropdown-text>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item v-on:click="resetShowCookingCard(showCookingCard)" href="#cooking_title" variant="primary" class="read-button">Keep reading</b-dropdown-item>
            </b-dropdown>
        </b-col>

        <b-col md="2" sm="12" class="text-center">
            <b-dropdown dropup variant="light" @click="onClick" no-caret class="m-2">
                <span slot="text"> <font-awesome-icon icon="stopwatch" size="3x" /></span>
                <b-dropdown-text style="width: 240px;">

                    When you have no time to eat throughout the day, you have to reconsider your priorities. Sometimes, that means eating your meals in liquid form.
                </b-dropdown-text>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item v-on:click="resetShowTimeCard(showTimeCard)" href="#time_title" variant="primary" class="read-button">Keep reading</b-dropdown-item>

            </b-dropdown>
        </b-col>
        <b-col md="2" sm="12" class="text-center">
            <b-dropdown dropup variant="light" @click="onClick" no-caret class="m-2">
                <span slot="text"> <font-awesome-icon icon="code" size="3x" /></span>
                <b-dropdown-text style="width: 240px;">

                        The food system has plenty of problems, from food waste to world hunger. Most meal replacement brands claim to tackle some of these issues through their products.
                      </b-dropdown-text>
                      <b-dropdown-divider></b-dropdown-divider>


                    <b-dropdown-item v-on:click="resetShowSolutionsCard(showSolutionsCard)" href="#solutions_title" variant="primary" class="read-button">Keep reading</b-dropdown-item>
            </b-dropdown>

        </b-col>
        <b-col md="2" sm="12" class="text-center">
            <b-dropdown dropup variant="light" @click="onClick" no-caret class="m-2">
                <span slot="text"> <font-awesome-icon icon="search-dollar" size="3x" /></span>
                <b-dropdown-text style="width: 240px;">
                        If food is inefficient in keeping humans alive, what makes meal replacements an appropriate alternative?
                      </b-dropdown-text>
                      <b-dropdown-divider></b-dropdown-divider>

                    <b-dropdown-item v-on:click="resetShowValueCard(showValueCard)" href="#value_title" variant="primary" class="read-button">Keep reading</b-dropdown-item>
            </b-dropdown>
        </b-col>
        <b-col md="2" sm="12" class="text-center">
            <b-dropdown dropup variant="light" @click="onClick" no-caret class="m-2">
                <span slot="text"> <font-awesome-icon icon="seedling" size="3x" /></span>
                <b-dropdown-text style="width: 240px;">
                        In the future, we will probably have to change the ways in which we relate to food. Will future food be purely functional?
                      </b-dropdown-text>
                      <b-dropdown-divider></b-dropdown-divider>


                    <b-dropdown-item v-on:click="resetShowFutureCard(showFutureCard)" href="#future_title" variant="primary" class="read-button">Keep reading</b-dropdown-item>
            </b-dropdown>

        </b-col>

    </b-row>
<b-container fluid>
    <b-row align-h="center">
        <b-col cols="12" class="main-cards">
            <transition name="fade">
                <div v-if="showCookingCard">
                    <CookingCard/>
                </div>
                <div v-if="showTimeCard">
                    <TimeCard/>
                </div>
                <div v-if="showSolutionsCard">
                    <SolutionsCard/>
                </div>
                <div v-if="showValueCard">
                    <ValueCard/>
                </div>
                <div v-if="showFutureCard">
                    <FutureCard/>
                </div>
            </transition>
        </b-col>
    </b-row>
</b-container>
</div>

</template>

<script>

import CookingCard from './CookingCard'
import TimeCard from './TimeCard'
import SolutionsCard from './SolutionsCard'
import ValueCard from './ValueCard'
import FutureCard from './FutureCard'
import MenuBar from './MenuBar'

export default {
    name: 'ReviewPage',
    components: {
        CookingCard, TimeCard, SolutionsCard, ValueCard, FutureCard, MenuBar
    },
    data: function() {
        return {
            showCookingCard: false,
            showTimeCard: false,
            showSolutionsCard: false,
            showValueCard: false,
            showFutureCard: false,
        }
    },
    methods: {
        onClick() {
                this.$refs.dropdown.hide(false)
            },
            // because we don't know how to program JS
            resetShowCookingCard(currentValue) {
                this.showCookingCard = !currentValue
                this.showTimeCard = false
                this.showSolutionsCard = false
                this.showValueCard = false
                this.showFutureCard = false
            },
            resetShowTimeCard(currentValue) {
                this.showCookingCard = false
                this.showTimeCard = !currentValue
                this.showSolutionsCard = false
                this.showValueCard = false
                this.showFutureCard = false

            },
            resetShowSolutionsCard(currentValue) {
                this.showCookingCard = false
                this.showTimeCard = false
                this.showSolutionsCard = !currentValue
                this.showValueCard = false
                this.showFutureCard = false
            },
            resetShowValueCard(currentValue) {
                this.showCookingCard = false
                this.showTimeCard = false
                this.showSolutionsCard = false
                this.showValueCard = !currentValue
                this.showFutureCard = false
            },
            resetShowFutureCard(currentValue) {
                this.showCookingCard = false
                this.showTimeCard = false
                this.showSolutionsCard = false
                this.showValueCard = false
                this.showFutureCard = !currentValue
            },
    }
}

</script>
