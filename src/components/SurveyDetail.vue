<template >
    <v-app id="inspire" >
        <v-app-bar app color="indigo" class="pa-0" :elevation="5">
            <v-col class="d-flex justify-space-around">
                <h1>IntelliQ</h1>
            </v-col>
        </v-app-bar>

        <v-container class="text-center">

            <v-row class="mt-5 justify-center">
                <h1> {{surveyTitle}}</h1>
            </v-row>
            <v-col
                    v-for="quest in Questions"
            >
                <v-card >
                    <v-list-item-content>
                        <p> {{Questions}}</p>
                    </v-list-item-content>


                </v-card>
            </v-col>
        </v-container>

    </v-app>
</template>

<script>
import { options } from "axios";
import router from "../router/index.ts";
import postService from '../postservice';

export default {
    name: 'SurveyDetail',
    data() {
        return {
            surveys: [],
            surveyTitle: '',
            Questions: [],
        };
    },
    async created() {
        try {
            const id = this.$route.params.id
            this.surveys = await postService.getsurveys();
            this.surveyTitle = this.surveys.find(survey => survey.id === id).name;
            this.Questions = this.surveys.find(survey => survey.id === id).questions;
            }
            catch (error) {
            console.error(error);
        }
    },
};
</script>
