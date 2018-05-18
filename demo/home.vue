<template>
  <div class="demo-home">
    <mdc-display
      ref="title">{{ title }}</mdc-display>
    <about class="markdown" />

    <h1>{{ data.name }} <small>Parent Organization</small></h1>
    <div v-for="location in data.locations">
      {{ location.name }}
    </div>
  </div>
</template>

<script>
  import userData from './mock-data/userData.json'
export default {
  components: {
    about: () => import('../docs/about.md')
  },
  data() {
    return {
      title: 'Material Components for Vue.js',
      data: userData.orgData
    }
  }
}
</script>
