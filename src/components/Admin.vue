<template>
    <v-app id="inspire">
        <v-app-bar app color="indigo" class="pa-0" :elevation="5">
            <v-col class="d-flex justify-space-around">
                <h1>IntelliQ</h1>
            </v-col>
        </v-app-bar>
        <div id="app" style="position:absolute; top:55px; left:35px">
            <v-container>
                <v-row>
                    <v-col class="text-left mr-10"><h2>Welcome {{ admin }}</h2></v-col>
                    <v-col class="text-right">
                        <v-btn>Create a Survey</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <v-container class="fill-height justify-lg-space-around" fluid>
            <v-row align="center" justify="center" dense>
                <v-col cols="12" sm="8" md="4" lg="4">
                    <v-card
                            class="mx-auto"
                            max-width="500"
                            style="top:-175px"
                    >
                        <v-card-item class="bg-indigo-lighten-5 justify-center">
                            <v-card-title class="align-center">
                                    <span class="text-h5 text-center ">
                                        Your Surveys:
                                    </span>
                            </v-card-title>

                        </v-card-item>
                    </v-card>
                </v-col>
                <p> {{adminSurveys}}</p>
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
        this.adminID= this.admins.find(ad => ad.name === this.admin).id;
        this.surveys = await postService.getsurveys();
        this.adminSurveys= this.surveys.filter(survey => survey.creator === this.adminID);

        console.log(this.adminSurveys);


    }
};
</script>

<style scoped>

</style>