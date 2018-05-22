<template>
  <div class="demo-home">
    <div class="col-12 col-md-9">


      <div class="row">

    </div><!--/span-->
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
        title: 'User Dropdown',
        data: userData.orgData
      }
    }
  }
</script>
