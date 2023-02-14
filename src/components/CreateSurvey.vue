<template>
    <v-app id="inspire">
        <v-app-bar app color="indigo" class="pa-0" :elevation="5">
            <v-col class="d-flex justify-space-around">
                <h1>IntelliQ</h1>
            </v-col>
        </v-app-bar>

        <div class="mt-10 text-center">
            <h1> Create a Survey</h1>
            <div style="max-width: 600px; margin: 0 auto;">
                <v-card class="my-10" v-for="(question, index) in questions" :key="index">
                    <v-text-field label="Question ID" v-model="question.questionID" disabled/>

                    <v-select
                            label="Type"
                            v-model="question.type"
                            :items="['profile', 'question', 'end']"
                    />
                    <template v-if="question.type!=='end'">

                        <v-text-field label="Question" class="" v-model="question.text"/>
                        <v-text-field label="Answer 1" v-model="question.answers[0].text"/>
                        <v-select
                                label="Next Question ID"
                                v-model="question.answers[0].nextQuestionID"
                                :items="questionIDs"
                        />
                        <v-text-field label="Answer 2" v-model="question.answers[1].text"/>
                        <v-select
                                label="Next Question ID"
                                v-model="question.answers[1].nextQuestionID"
                                :items="questionIDs"
                        />
                        <v-text-field label="Answer 3" v-model="question.answers[2].text"/>
                        <v-select
                                label="Next Question ID"
                                v-model="question.answers[2].nextQuestionID"
                                :items="questionIDs"
                        />
                        <v-btn @click="addQuestion">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <template v-else>
                        <v-text-field label="End message" v-model="endmessage" />
                        <v-btn color="indigo" @click="Submit()">Submit</v-btn>
                    </template>

                </v-card>
            </div>


        </div>
    </v-app>
</template>

<script>
import postService from '../postservice';

export default {
    data() {
        return {
            endmessage: '',
            questions: [
                {
                    questionID: 'Q000',
                    text: '',
                    type: '',
                    answers: [
                        {text: '', nextQuestionID: '-'},
                        {text: '', nextQuestionID: '-'},
                        {text: '', nextQuestionID: '-'},
                    ],
                },
            ],
            showAddBtn: true,
        };
    },
    computed: {
        questionIDs() {
            return this.questions.map((question) => question.questionID);
        },
    },
    methods: {
        addQuestion() {
            const lastQuestion = this.questions[this.questions.length - 1];
            const newQuestionID = `Q0${String(
                    Number(lastQuestion.questionID.slice(2)) + 1
            ).padStart(2, '0')}`;

            this.questions.push({
                questionID: newQuestionID,
                text: '',
                type: '',
                answers: [
                    {text: '', nextQuestionID: ''},
                    {text: '', nextQuestionID: ''},
                    {text: '', nextQuestionID: ''},
                ],
            });
        },
        changeQuestionType(question) {
            if (question.type === 'end') {
                this.showAddBtn = false;
            } else {
                this.showAddBtn = true;
            }
        },
        Submit() {
            this.$router.push({path: '/admin/'+this.$route.params.id})
        }
    },
    created() {
        this.questions.forEach((question) => {
            this.$watch(
                    () => question.type,
                    () => this.changeQuestionType(question)
            );
        });
    },
};
</script>