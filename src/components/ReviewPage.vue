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
    box-shadow: 0 4px 8px -2px gray;
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
    font-size: 25px;
    color: #212322;
    font-family: 'Open Sans', sans-serif;
}

</style>

<template>

<div>

    <MenuBar/>
    <!-- End of top menu-->
    <div class="review_block">
        <b-row align-h="center" class="mb-2">

            <b-col cols="10" md-10 justify-text-center>
                <p id="intro_title">THE REVIEW</p>
                <div class="intro_text">
                    <p>
                        ... this is more than just a default product review. Instead of simply discussing the physical characteristics of one product or another, my analysis focuses on the broader context in which these products have developed, highlights the patterns of techno-solutionism
                        that I've identified as problematic, and deconstructs their benefit claims and potential for becoming increasingly relevant in today's Western societies.
                    </p>
                    <p>
                        I've become interested in meal replacements because the concept of rejecting food as inefficient, and replacing it with an ultra-processed powder, however many nutrients it contained, intrigued me. I found the idea to be completely alien, so far removed
                        from my values and desires, that I had to look deeper. I ended up writing an essay, following the historical path and cultural patterns that led to the growth of a culture, an ideology, a community around the act of replacing one
                        of the most basic human habits.
                    </p>
                    <p>
                        Below, you will find excerpts of my essay, split into the main topics covered in my research. Scattered throughout the text are images, references, articles, quotes and video snippets, some extracted from my own video essay, which together build
                        a complex image of the world of meal replacements.
                    </p>
                </div>
            </b-col>
        </b-row>
    </div>
    <!-- End of description-->

    <b-row align-h="center" class="icon_dropdown">
        <b-col cols="2" class="text-center">
            <b-dropdown dropup variant="light" @click="onClick" no-caret class="m-2">
                <span slot="text"> <font-awesome-icon icon="stroopwafel" size="3x" /></span>
                <b-dropdown-text style="width: 240px;">
                    Meal replacements aim to replace food with food-like substances, removing the need to cook.
                    But what do people have against cooking in the first place?

                </b-dropdown-text>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item v-on:click="resetShowCookingCard(showCookingCard)" href="#" variant="primary" class="read-button">Keep reading</b-dropdown-item>
            </b-dropdown>
        </b-col>

        <b-col cols="2" class="text-center">
            <b-dropdown id="dropdown-2" dropright class="m-md-2" variant="light" @click="onClick" no-caret>
                <span slot="text"> <font-awesome-icon icon="stopwatch" size="3x" /></span>
                <b-card title="Saving time" style="width: 120%; height: 120%;">
                    <b-card-text class="card-text">
                        When you have no time to eat throughout the day, you have to reconsider your priorities. Sometimes, that can mean eating your meals in liquid form.
                    </b-card-text>

                    <b-dropdown-item-button v-on:click="resetShowTimeCard(showTimeCard)" href="#" variant="primary" class="read-button">Keep reading</b-dropdown-item-button>
                </b-card>
            </b-dropdown>
        </b-col>
        <b-col cols="2" class="text-center">
            <b-dropdown id="dropdown-3" dropright class="m-md-2" variant="light" @click="onClick" no-caret>
                <span slot="text"> <font-awesome-icon icon="code" size="3x" /></span>
                <b-card title="Providing solutions" style="width: 120%; height: 120%; max-width: 40rem;">
                    <b-card-text class="card-text">
                        The food system has plenty of problems, from food waste to world hunger. Most meal replacement brands claim to tackle some of these issues through their products.
                    </b-card-text>

                    <b-dropdown-item-button v-on:click="resetShowSolutionsCard(showSolutionsCard)" href="#" variant="primary" class="read-button">Keep reading</b-dropdown-item-button>
                </b-card>
            </b-dropdown>

        </b-col>
        <b-col cols="2" class="text-center">
            <b-dropdown id="dropdown-4" dropright class="m-md-2" variant="light" @click="onClick" no-caret>
                <span slot="text"> <font-awesome-icon icon="search-dollar" size="3x" /></span>
                <b-card title="Adding value" style="width: 120%; height: 120%;">
                    <b-card-text class="card-text">
                        If food is inefficient in keeping humans alive, what makes meal replacements an appropriate alternative?
                    </b-card-text>

                    <b-dropdown-item-button v-on:click="resetShowValueCard(showValueCard)" href="#" variant="primary" class="read-button">Keep reading</b-dropdown-item-button>
                </b-card>
            </b-dropdown>
        </b-col>
        <b-col cols="2" class="text-center">
            <b-dropdown id="dropdown-5" dropright class="m-md-2" variant="light" @click="onClick" no-caret>
                <span slot="text"> <font-awesome-icon icon="seedling" size="3x" /></span>
                <b-card title="Saving the future" style="width: 120%; height: 120%;">
                    <b-card-text class="card-text">
                        In the future, we will probably have to change the ways in which we relate to food. Will future food be purely functional? Will agriculture change drastically, as well as our reliance on it?
                    </b-card-text>

                    <b-dropdown-item-button v-on:click="resetShowFutureCard(showFutureCard)" href="#" variant="primary" class="read-button">Keep reading</b-dropdown-item-button>
                </b-card>
            </b-dropdown>

        </b-col>

    </b-row>

    <b-row align-h="center">
        <b-col cols="8" class="main-cards">
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
