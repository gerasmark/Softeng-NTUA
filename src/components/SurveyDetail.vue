<template>
    <div>
      <h1>{{ survey.name }}</h1>
      <p>{{ survey.description }}</p>
    </div>
  </template>
  
  <script>
  import postService from '../postservice';
  
  export default {
    name: 'SurveyDetail',
    data() {
      return {
        survey: {}
      };
    },
    async created() {
      try {
        this.survey = await postService.getSurvey(this.$route.params.id);
      } catch (error) {
        console.error(error);
      }
    }
  };
  </script>
  