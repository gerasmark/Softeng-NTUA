<template>
    <v-app id="inspire">
        <v-app-bar app color="indigo" class="pa-0" :elevation="5">
            <v-col class="d-flex justify-space-around">
                <h1>IntelliQ</h1>
            </v-col>
        </v-app-bar>

        <div class="mt-10 text-center">
            <h1> Create a Survey </h1>
            <div style="max-width: 600px; margin: 0 auto;">
                <v-card class="my-10" color="indigo-lighten-5">
                    <v-text-field class="text-indigo-darken-4"
                                  label="TITLE"
                                  v-model="this.questionnaireTitle"
                                  style="font-weight: bold;"/>

                    <v-text-field
                            v-model="keyword"
                            label="Keyword"
                            placeholder="Enter a keyword"
                    ></v-text-field>
                    <v-btn  class="mb-8" color="primary" @click="addKeyword">Add Keyword</v-btn>
                    <v-list>
                        <v-list-item v-for="(keyword, index) in keywords" :key="index">
                            {{ keyword }}
                        </v-list-item>
                    </v-list>



                    <v-text-field class="text-indigo-darken-4"
                                  label="Questionnaire ID"
                                  v-model="this.questionnarieID"/>
                </v-card>
                <v-card class="my-10" color="indigo-lighten-5" v-for="(question, index) in questions" :key="index">
                    <v-text-field label="Question ID" v-model="question.qID" disabled/>

                    <v-select
                            class="text-indigo-darken-4"
                            label="Type"
                            v-model="question.type"
                            :items="['profile', 'question', 'end']"
                    />
                    <template v-if="question.type!=='end'">

                        <v-text-field label="Question" class="text-light-blue-darken-4" v-model="question.qtext"/>
                        <div v-for="(answer, index2) in question.options" :key="index2">
                            <v-text-field class="text-indigo-darken-4" label="Answer" v-model="answer.opttxt"/>
                            <v-select
                                    class="text-indigo-darken-4"
                                    label="Next Question ID"
                                    v-model="answer.nextqID"
                                    :items="questionIDs"
                            />

                        </div>
                        <div class="my-3">
                            <v-btn @click="addAnswer(index)" class="bg-indigo-darken-4">
                                <v-icon>mdi-plus</v-icon>
                                Add Answer
                            </v-btn>
                        </div>

                        <div class="mb-8">
                            <v-btn @click="deleteAnswer(index, answerIndex)" class="bg-red-darken-4">
                                <v-icon>mdi-delete</v-icon>
                                Delete Answer
                            </v-btn>
                        </div>
                        <v-spacer></v-spacer>
                        <v-spacer></v-spacer>

                        <div class="mb-3">
                            <v-btn @click="addQuestion" class="bg-indigo-darken-4">
                                <v-icon>mdi-plus</v-icon>
                                Next Question
                            </v-btn>
                        </div>
                        <div class="mb-4">
                            <v-btn @click="deleteQuestion(currentQuestionIndex)" class="bg-red-darken-4">
                                <v-icon>mdi-delete</v-icon>
                                Delete Question
                            </v-btn>
                        </div>
                        <div class="ml-4 text-left">
                            <p>Is this question required?</p>
                            <v-switch v-model="question.required" color="success" label="Turn on/off"></v-switch>
                        </div>
                    </template>
                    <template v-else>
                        <v-text-field label="End message" v-model="endmessage"/>
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
            answerIndex: '',
            currentQuestionIndex: 0,
            questionnaireTitle: '',
            questionnarieID: '',
            required: true,
            creatorID: '',
            admin: '',
            keyword: '',
            keywords: [],
            questions: [
                {
                    qID: 'Q000',
                    qtext: '',
                    type: '',
                    options: [
                        {
                            optID: 'A1',
                            opttxt: '',
                            nextqID: '-'
                        }
                    ],
                },
            ],
            showAddBtn: true,
        };
    },
    computed: {
        questionIDs() {
            return this.questions.map((question) => question.qID);
        },
    },
    methods: {
        addQuestion() {
            const lastQuestion = this.questions[this.questions.length - 1];
            const newQuestionID = `Q0${String(Number(lastQuestion.qID.slice(2)) + 1).padStart(2, '0')}`;
            const optionsCopy = [...lastQuestion.options];
            this.currentQuestionIndex++;
            this.questions.push({
                qID: newQuestionID,
                qtext: '',
                type: '',
                options: [
                    {
                        optID: 'A1',
                        opttxt: '',
                        nextqID: '-'
                    }
                ],
            });
        },


        addAnswer(index) {
            this.answerIndex = index;
            this.questions[index].options.push({
                optID: `A${this.questions[index].options.length + 1}`,
                opttxt: '',
                nextqID: '-'
            });
        },
        deleteAnswer(questionIndex, answerIndex) {
            this.questions[questionIndex].options.splice(answerIndex, 1);
        },
        deleteQuestion(questionIndex) {
            this.questions.splice(questionIndex, 1);
        },
        addKeyword() {
            if (this.keyword) {
                this.keywords.push(this.keyword);
                this.keyword = '';
            }
        },

        changeQuestionType(question) {
            this.showAddBtn = question.type !== 'end';
        },
        Submit() {
            this.questionnarieID = `QQ0${String(
                    Math.floor(Math.random() * 90) + 10
            )}`;
            console.log(this.questions);
            console.log(this.questionnarieID);
            console.log(this.questionnaireTitle);
            console.log(this.keywords);
            const toSend = {
                questionnaireTitle: this.questionnaireTitle,
                questionnarieID: this.questionnarieID,
                keywords: this.keywords,
                creatorID: 'ody',
                questions: this.questions
            }
            console.log(toSend);

            this.$router.push({path: '/admin/' + this.$route.params.id})
        }
    },
    created() {
        this.admin = this.$route.params.admin;
        this.questions.forEach((question) => {
            this.$watch(
                    () => question.type,
                    () => this.changeQuestionType(question)
            );
        });
    },
};
</script>