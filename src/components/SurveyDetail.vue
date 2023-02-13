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




            <v-card class="px-lg-16 mx-16">
                <v-card-title>
                    {{ current.qtext }}
                </v-card-title>
                <v-card-text v-if="current.type=='end'">
                    <v-row class="justify-center">
                        <v-col class="text-center">
                            <v-btn color="primary"
                                   @click="submit"
                                   class="mt-3"

                            >
                                Submit
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-card-text v-if="current.type !='end'">
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

                <v-card-actions v-if="current.type !='end'">
                    <v-col class="text-blue-grey-lighten-1">
                        <v-btn @click="nextQuestion">Next</v-btn>
                    </v-col>
                </v-card-actions>
            </v-card>

        </v-container>




    </v-app>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import { options } from "axios";
import router from "../router/index.ts";
import postService from '../postservice';
import Vue from 'vue';

export const BASE_URL = 'http://localhost:9103/intelliq_api' ;
export default {
    async created() {
        try {
            const id = this.$route.params.id
            this.surveys = await postService.getsurveys();
            this.survey = this.surveys.find(survey => survey.id === id);
            this.questions = this.survey.questions;
            this.surveyQuestionnaireId = this.survey.questionnaire_id
            this.current = this.questions[0];
            this.nextqid = this.questions[0].nextqID;
            this.coptions = this.current.options;
            this.nextqid = this.coptions.nextqID;
        } catch (error) {
            console.error(error);
        }
    },
    data() {
        return {
            survey: [],
            questions: [],
            current: {},
            selectedOption: '',
            coptions:[],
            nextqid: [],
            answers: []
        };
    },

    methods: {
        nextQuestion() {
            let coptions = this.current.options;
            let selectedValue = this.selectedOption;
            for (let i = 0; i < coptions.length; i++) {
                if (coptions[i].opttxt === selectedValue) {
                    this.nextqid = coptions[i].nextqID;
                    break;
                }
            }
            for (let i = 0; i < this.questions.length; i++) {
                if (this.questions[i].qID === this.nextqid) {
                    this.current = this.questions[i];
                    break;
                }
            }
            // add the answer to the answers array
            this.answers.push({ question_id: this.current.qID, answer: selectedValue });
        },
        async submit() {
            try {
                // // post the answers to the API
                // await postService.postAnswers({
                //     questionnaire_id: this.surveyQuestionnaireId,
                //     answers: this.answers
                // });
                this.$router.push({ path: '/usersurveys' });
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>
