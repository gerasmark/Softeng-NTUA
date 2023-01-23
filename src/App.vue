
<template>
    <form @submit.prevent="addSurvey">
      <input v-model="name" placeholder="Survey Name" required>
      <input v-model="questions" placeholder="Your Question" required>
      <input v-model="creator" placeholder="Your Name" required>
      <button type="submit">Add Survey</button>
    </form>
  </template>

<script>
import postcomponent from './components/Postcomponent.vue';
</script>