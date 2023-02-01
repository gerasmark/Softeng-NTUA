<template>
    <v-app id="inspire">
      <v-app-bar app color="bg-indigo-accent-3" class="pa-0" :elevation="5">
        <v-col class="d-flex justify-space-around">
          <h1>IntelliQ</h1>
        </v-col>
      </v-app-bar>
  
      <v-list class="text-center justify-center align-center">
        <v-list-item v-for="survey in surveys" :key="survey.name">
          {{ survey.name }}
        </v-list-item>
      </v-list>
    </v-app>
  </template>
  
  <script>
  import postservice from '../postservice';
  
  export default {
    name: "UserSurveys",
    data() {
      return {
        surveys: [],
      };
    },
    async created() {
      try {
        this.surveys = await postservice.getsurveys();
      } catch (error) {
        console.error(error);
      }
    },
  };
  </script>
  