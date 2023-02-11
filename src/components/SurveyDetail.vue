<template >
    <v-app id="inspire" >
        <v-app-bar app color="indigo" class="pa-0" :elevation="5">
            <v-col class="d-flex justify-space-around">
                <h1>IntelliQ</h1>
            </v-col>
        </v-app-bar>

        <v-container class="text-center">
            <v-row class="mt-5 justify-center">
                <h1>{{ survey.questions }}</h1>
            </v-row>

            <v-card class="px-lg-16 mx-16" v-for="question in survey.questions" :key="question.qID">
                <v-card-title>
                    {{ question.qtext }}
                    <v-spacer></v-spacer>
                </v-card-title>
                <v-card-text >
                    <v-form ref="form"><v-col class="text-center">

                        <v-radio-group
                                v-model="selectedOption"
                                :mandatory="true"
                                class="mb-3"
                        >
                            <v-radio class="mx-10"
                                    v-for="option in question.options"
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
            inputValue: '',
            surveys: [],
            survey: [],
            surveyId: '',
            surveyQuestions: [],
            surveyQuestionnaireId: '',
            currentQuestionIndex: 0,
            selectedOption: '',
            questions: [],

        };
    },
    async created() {
        try {
            const id = this.$route.params.id
            this.surveys = await postService.getsurveys();
            this.questions= await postService.getquestions();
           // this.surveyQuestions = this.questions.find(surveyQuestions => surveyQuestions.id== id);
            this.survey = this.surveys.find(survey => survey.id === id);
            this.surveyQuestionnaireId = this.survey.questionnaire_id

        } catch (error) {
            console.error(error);
        }
    },
    computed: {
        currentQuestion() {
            return this.survey.questions[this.currentQuestionIndex];
        },
    },
    methods: {
        nextQuestion() {
            if (this.currentQuestionIndex + 1 < this.survey.questions.length) {
                this.currentQuestionIndex++;
                this.selectedOption = '';
            } else {
                // Show the results or take some other action when all questions are answered
            }
        },
    },
};
</script>