
<template>
    <form @submit.prevent="addSurvey">
      <input v-model="name" placeholder="Survey Name" required>
      <input v-model="questions" placeholder="Your Question" required>
      <input v-model="creator" placeholder="Your Name" required>
      <button type="submit">Add Survey</button>
    </form>
  </template>

  <script>
import Survey from '../data/modules/survey'
export default {
  data () {
    return {
      name: '',
      questions: [],
      creator: ''
    }
  },
  methods: {
    async addSurvey() {
      const survey = new Survey({
        name: this.name,
        questions: this.questions,
        creator: this.creator
      })

      try {
        await survey.save()
        console.log('Survey added to the database.')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>