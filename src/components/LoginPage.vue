<template>
    <v-app id="inspire">
        <v-app-bar app color=" bg-indigo-accent-3 " class="pa-0" :elevation="5">
            <v-col class="d-flex justify-space-around">
                <h1>IntelliQ</h1>
            </v-col>
        </v-app-bar>

        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center" dense>
                <v-col cols="12" sm="8" md="4" lg="4">
                    <v-card
                            class="mx-auto"
                            max-width="500"
                    >
                        <v-card-item class="bg-indigo-lighten-5">
                            <v-card-title class="align-center">
                                    <span class="text-h4">
                                        <p class="text-center">
                                             Login
                                        </p>

                                    </span>
                            </v-card-title>
                        </v-card-item>
                        <v-card-item class="bg-indigo-lighten-5">
                            <v-select
                                    v-model="selectedValue"
                                    v-bind:items="items"
                                    label="Select a role"
                            ></v-select>
                        </v-card-item>

                        <v-card-item v-if="selectedValue === 'Admin'" class="bg-indigo-lighten-5" >
                            <v-select
                                    :items="admins"
                                    label="Select an admin"
                            ></v-select>
                        </v-card-item>
                        <v-card-item v-if="selectedValue === 'Institution'" class="bg-indigo-lighten-5" >
                            <v-select
                                    :items="institutions"
                                    label="Select a user"
                            ></v-select>
                        </v-card-item>
                        <v-card-item v-if=" selectedValue !== ''">
                            <v-btn
                                    v-if=" selectedValue !== ''"
                                    x-large
                                    block
                                    rounded

                                    @click="login"
                                    class="bg-indigo-lighten-1">
                                Submit
                            </v-btn>
                        </v-card-item>

                    </v-card>
                </v-col>
            </v-row>

        </v-container>


    </v-app>
</template>

<script>
import {options} from "axios";
import postService from '../postservice';
export default {
    name: "loginPage",
    data: () => ({
        items: ['User', 'Admin', 'Institution'],
        admins: [],
        institutions: [],
        selectedValue: '',
        reveal: false,

    }),
    async created() {
        try{
            this.admins = await postService.getadmin();
            this.institutions = await postService.getinstitution();
        }catch (error) {
            reject(error);
        }
    },
    methods: {
        login(){

        }
    }
}


</script>

<style scoped>

</style>