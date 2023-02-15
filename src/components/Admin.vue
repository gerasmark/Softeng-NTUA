<template>
    <v-app>
        <v-app-bar app color="indigo" class="pa-0" :elevation="5">
            <v-col cols="12" sm="6" md="4" class="d-flex justify-center justify-sm-start">
                <h1>IntelliQ</h1>
            </v-col>
            <v-col cols="12" sm="6" md="8" class="d-flex justify-center justify-sm-end">
                <h2 class="mb-0">Welcome {{ admin }}</h2>
                <v-btn @click="createSurvey(admin)" class="ml-3">Create a Survey</v-btn>
            </v-col>
        </v-app-bar>

        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center" dense>
                <v-col cols="12" md="8" lg="4">
                    <v-card class="mx-auto mb-5" max-width="500">
                        <v-card-item class="bg-indigo-lighten-5 justify-center">
                            <v-card-title class="align-center">
                                <span class="text-h5 text-center">Your Surveys:</span>
                            </v-card-title>
                        </v-card-item>
                    </v-card>

                    <v-btn v-for="survey in adminSurveys" :key="survey.id" class="mx-auto mb-5" max-width="500">
                        {{ survey.name }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import postService from '../postservice';

export default {
    name: "Admin",

    data() {
        return {
            admin: [],
            admins: [],
            adminID: '',
            surveys: [],
            adminSurveys: []
        };
    },
    async created() {
        this.admin = this.$route.params.admin
        this.admins = await postService.getadmin();
        this.adminID = this.admins.find(ad => ad.name === this.admin).id;
        this.surveys = await postService.getsurveys();
        this.adminSurveys = this.surveys.filter(survey => survey.creator === this.adminID);
        console.log(this.adminSurveys);


    },
    methods: {
        //goToSurveyAdmin(survey) {
        //function that shows you the answers of a survey
        // },
        createSurvey(admin) {
            this.$router.push({name:'CreateSurvey', param: 'admin'});


        },
    },
};
</script>

<style scoped>

</style>