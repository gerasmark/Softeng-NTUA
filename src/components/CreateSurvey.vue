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
                <v-card class="my-10" color="indigo-lighten-5">
                    <v-text-field  class="text-indigo-darken-4"
                                   label="TITLE"
                                   v-model="this.questionnaireTitle"
                                   style="font-weight: bold;" />
                    <v-text-field  class="text-indigo-darken-4"
                                   label="Keywords"
                                   v-model="this.keywords"  />
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
                            <div v-for="(answer, index) in question.options" :key="index">
                                <v-text-field class="text-indigo-darken-4" label="Answer" v-model="answer.opttxt"/>
                                <v-select
                                        class="text-indigo-darken-4"
                                        label="Next Question ID"
                                        v-model="answer.nextqID"
                                        :items="questionIDs"
                                />
                            </div>

                        <v-btn @click="addAnswer" class="bg-indigo-darken-4">
                            <v-icon>mdi-plus</v-icon>
                            Add Answer
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-spacer></v-spacer>
                        <v-btn @click="addQuestion" class="bg-indigo-darken-4">
                            <v-icon>mdi-plus</v-icon>
                            Next Question
                        </v-btn>
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
            currentQuestionIndex: 0,
            questionnaireTitle: '',
            questionnarieID:`QQ0${String(
                    Math.floor(Math.random() * 100)
            )}`,
            keywords: '',
            creatorID: '',
            questions: [
                {
                    qID: 'Q000',
                    qtext: '',
                    type: '',
                    //required: '',                   !!!!!!!!!!!!!!!!!!!!!
                    options: [
                        {opttxt: '',
                            nextqID: '-'
                        //optID                      !!!!!!!!!!!!!!!
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
            const newQuestionID = `Q0${String(
                    Number(lastQuestion.qID.slice(2)) + 1
            ).padStart(2, '0')}`;
            this.currentQuestionIndex++;
            console.log(this.currentQuestionIndex);
            this.questions.push({
                qID: newQuestionID,
                qtext: '',
                type: '',
                options: [
                    {opttxt: '', nextqID: ''}
                    // {text: '', nextQuestionID: ''},
                    // {text: '', nextQuestionID: ''},
                ],
            });
        },
        addAnswer() {
            this.currentQuestionIndex = this.questions.length - 1;
            this.questions[this.currentQuestionIndex].options.push({opttxt: '', nextqID: '-'});
            console.log(this.questions[this.currentQuestionIndex].options);
            console.log(this.questions[this.currentQuestionIndex].options);
        },
        changeQuestionType(question) {
            if (question.type === 'end') {
                this.showAddBtn = false;
            } else {
                this.showAddBtn = true;
            }
        },
        Submit() {
            this.questionnarieID = `QQ0${String(
                    Math.floor(Math.random() * 90)+10
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
        this.questions.forEach((question) => {
            this.$watch(
                    () => question.type,
                    () => this.changeQuestionType(question)
            );
        });
    },
};
</script>