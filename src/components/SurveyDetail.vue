<template >
    <v-app id="inspire" >
        <v-app-bar app color="indigo" class="pa-0" :elevation="5">
            <v-col class="d-flex justify-space-around mt-10 mb-10">
                <h1>IntelliQ</h1>
            </v-col>
        </v-app-bar>

        <v-container class="text-center">
            <v-row class="mt-10 mb-10 justify-center">
                <h1>{{ survey.name }}</h1>
            </v-row>


<p> {{questions.options}}</p>

            <v-card class="px-lg-16 mx-16">
                <v-card-title>
                    {{ current.qtext }}
                </v-card-title>
                <v-card-text >
                    <v-form ref="form"><v-col class="text-center">

                        <v-radio-group
                                v-model="selectedOption"
                                :mandatory="true"
                                class="mb-3"
                        >

                            <v-radio class="mx-10"
                                     v-for="option in current.options"
                                     :key="option.optID"
                                     :label="option.opttxt"
                                     :value="option.opttxt"
                            ></v-radio>

                        </v-radio-group></v-col>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-col class="text-blue-grey-lighten-1">
                        <v-btn @click="nextQuestion">Next</v-btn>
                    </v-col>
                </v-card-actions>
            </v-card>

        </v-container>




    </v-app>
</template>

<script>
import 'vuetify/dist/vuetify.min.css' // This imports the Vuetify CSS styles
import '@mdi/font/css/materialdesignicons.css' // This imports the Material Design icons font
import { options } from "axios";
import router from "../router/index.ts";
import postService from '../postservice';
import Vue from 'vue';
export default {
    name: 'SurveyDetail',
    data() {
        return {
            survey: [],
            questions: [],
            current: {},
            selectedOption: '',

        };
    },
    async created() {
        try {
            const id = this.$route.params.id
            this.surveys = await postService.getsurveys();
            this.survey = this.surveys.find(survey => survey.id === id);
            this.questions= this.survey.questions;
            this.surveyQuestionnaireId = this.survey.questionnaire_id
            this.current = this.questions[0];
            this.nextqid = this.questions[0].nextqID;
            this.options= this.questions.options;



        } catch (error) {
            console.error(error);
        }
    },

    methods: {
        nextQuestion() {
            this.getSelectedOption()
            for (let i = 0; i < this.questions.length; i++) {
                if (this.questions[i].qID === this.nextqid) {
                    this.current = this.questions[i];
                    this.nextqid = this.current.nextqID;
                    break;
                }
            }
        },
        getSelectedOption() {
            let selectedOption = this.currentQuestion.options.find(
                    option => option.optID === this.selectedOption
            );
            this.currentIndex = this.questions.findIndex(
                    question => question.qID === selectedOption.nextqID
            );
        },
        renderQuestion() {
            this.currentQuestion = this.questions[this.currentIndex];
        }
    }




};
</script>