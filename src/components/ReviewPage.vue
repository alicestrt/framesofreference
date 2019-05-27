<style scoped>

* {
    border: 0px black solid;
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

.intro_review {
  text-align: justify;
  font-size: 20px;
}

</style>

<template>

<div>

    <b-row class="mb-5">
        <b-col md="8" offset-md="9">
            <b-button variant="light">About</b-button>
            <b-button variant="light">Glossary</b-button>
            <b-button variant="light">Full text</b-button>
            <b-button variant="light">Full video</b-button>
        </b-col>
    </b-row>
    <!-- End of top menu-->

    <b-row align-h="center" class="mb-5">

        <b-col cols="8" md-10 justify-text-center class="intro_review">
            <p>
                ... this is more than just a simple review. Instead of just discussing the physical characteristics of one product or another, my analysis focuses on the broader context in which these products have developed. I've become interested in meal replacements
                because the concept of rejecting food as inefficient, and replacing it with an ultra-processed powder, however many nutrients it contained, intrigued me. I found the idea to be completely alien, so far removed from my values and desires,
                that I had to look deeper. I ended up writing an essay, following the historical path and cultural patterns that led to the growth of a culture, an ideology, a community around the act of replacing one of the most basic human habits.
            </p>
            <p>
                Below, you will find excerpts of my essay, split into the main topics covered in my research. Scattered throughout the text are images, references, articles, quotes and video snippets, some even extracted from my own video essay, that together build a
                complex image of the world of meal replacements.
            </p>
        </b-col>
    </b-row>
    <!-- End of description-->

    <b-row align-h="center" class="mb-5">
        <b-col cols="2" class="text-center">
            <b-dropdown id="dropdown-2" class="m-md-2" variant="outline-dark" @click="onClick" no-caret>
                <span slot="text"> <font-awesome-icon icon="stroopwafel" size="3x" /></span>
                <b-card title="Replacing cooking" class="mb-2">
                    <b-card-text>
                        Meal replacements aim to replace food with food-like substances, which means there's no need to cook. But what do people have against cooking in the first place? When did cooking become important for humans?
                    </b-card-text>

                    <b-dropdown-item-button v-on:click="showCookingCard = !showCookingCard" href="#" variant="primary">Keep reading</b-dropdown-item-button>
                </b-card>
            </b-dropdown>
        </b-col>

        <b-col cols="2" class="text-center">
            <b-dropdown id="dropdown-2" class="m-md-2" variant="outline-dark" @click="onClick" no-caret>
                <span slot="text"> <font-awesome-icon icon="stopwatch" size="3x" /></span>
                <b-card title="Saving time" class="mb-2">
                    <b-card-text>
                        When you have no time to eat throughout the day, you have to reconsider your priorities. sometimes, that can mean eating your meals in liquid form, on the go.
                    </b-card-text>

                    <b-dropdown-item-button v-on:click="showTimeCard = !showTimeCard" href="#" variant="primary">Keep reading</b-dropdown-item-button>
                </b-card>
            </b-dropdown>
        </b-col>
        <b-col cols="2" class="text-center">
            <b-dropdown id="dropdown-3" class="m-md-2" variant="outline-dark" @click="onClick" no-caret>
                <span slot="text"> <font-awesome-icon icon="code" size="3x" /></span>
                <b-card title="Providing solutions" class="mb-2">
                    <b-card-text>
                        The food system has plenty of problems, from food waste to world hunger. Most meal replacement brands claim to tackle some of these issues through their products. But I don't think that's working very well.
                    </b-card-text>

                    <b-dropdown-item-button v-on:click="showSolutionsCard = !showSolutionsCard" href="#" variant="primary">Keep reading</b-dropdown-item-button>
                </b-card>
            </b-dropdown>

        </b-col>
        <b-col cols="2" class="text-center">
            <b-dropdown id="dropdown-4" class="m-md-2" variant="outline-dark" @click="onClick" no-caret>
                <span slot="text"> <font-awesome-icon icon="search-dollar" size="3x" /></span>
                <b-card title="Adding value" class="mb-2">
                    <b-card-text>
                        If food is inefficient in keeping humans alive, what makes meal replacements, or complete foods, an appropriate alternative?
                    </b-card-text>

                    <b-dropdown-item-button v-on:click="showValueCard = !showValueCard" href="#" variant="primary">Keep reading</b-dropdown-item-button>
                </b-card>
            </b-dropdown>
        </b-col>
        <b-col cols="2" class="text-center">
            <b-dropdown id="dropdown-5" class="m-md-2" variant="outline-dark" @click="onClick" no-caret>
                <span slot="text"> <font-awesome-icon icon="seedling" size="3x" /></span>
                <b-card title="Saving the future" class="mb-2">
                    <b-card-text>
                        In the future, we will probably have to change the ways in which we relate to food. Will future food be purely functional? Will agriculture change drastically, as well as our reliance on it?
                    </b-card-text>

                    <b-dropdown-item-button v-on:click="showFutureCard = !showFutureCard" href="#" variant="primary">Keep reading</b-dropdown-item-button>
                </b-card>
            </b-dropdown>

        </b-col>

    </b-row>

    <b-row align-h="center">
        <b-col cols="8" class="text-center">
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
export default {
    name: 'ReviewPage',
    components: {
        CookingCard, TimeCard, SolutionsCard, ValueCard, FutureCard,
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
            // Close the menu and (by passing true) return focus to the toggle button
            this.$refs.dropdown.hide(false)
        }
    }
}

</script>
