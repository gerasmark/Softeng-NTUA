<template>
    <v-app id="inspire">
        <v-app-bar app color="indigo" class="pa-0" :elevation="5">
            <v-col class="d-flex justify-space-around">
                <h1>IntelliQ</h1>
            </v-col>
        </v-app-bar>

    </v-app>
</template>

<script>
import requests from '../requests';
export default {
    name: "ViewAnswers.vue",
    data() {
        return{
            surveyID: "",
            questionTitle: [],
            answers: []
        };
    },
    async created(){
        try {
            this.surveyID = this.$route.params.questionnaireID;
            const baseUrl= 'http://localhost:9103/intelliq_api/questionnaire/';
            const url = `${baseUrl}${this.surveyID}`;
            this.questionnaire = await requests.getQuestionnaire(url);
            for (let i = 0; i < this.questionnaire.questions.length; i++){
                    this.questionTitle.push(this.questionnaire.questions[i].qtext);
                    const baseUrl2= 'http://localhost:9103/intelliq_api/getquestionanswers/';
                    const url2 = `${baseUrl2}${this.surveyID}/${this.questionnaire.questions[i].qID}`;
                    const answers = await requests.getAnswers(url2);
                    this.answers.push(answers);

            }
            console.log(this.answers);
            console.log(this.questionTitle);

        } catch (error) {
            console.error(error);
        }

    }
}
</script>

<style scoped>

</style>