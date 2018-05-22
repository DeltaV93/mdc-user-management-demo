<template>
  <div v-if="db[userID].adminUser"
       class="col-6 col-md-3 sidebar-offcanvas mt-5"
       id="sidebar">
    <div class="list-group list-group-flush">
      <li href="#" class="list-group-item list-group__header">
        <h5>{{ db[userID].orgStructure.parentOrganization }}</h5>
      </li>
      <!--check if sub agency -->
      <div >

        <div v-if="db[userID].orgStructure.subAgency">
          <li class="list-group-item"
              v-for="agency in db[userID].orgStructure.subAgency"
              :data-toggle="agency.locations ? 'collapse':null"
              :data-target="agency.locations ? '#' + agency.name:null"
              v-bind:aria-expanded="agency.locations ? true:null"
              v-bind:aria-controls="agency.locations ? agency.name:null">
              <a href="#">{{ agency.name }}</a>

          </li>
          <!--<div v-if="agency.locations">-->
            <!--<li class="list-group-item"-->
                <!--v-for="location in agency.locations">-->
              <!--<a href="#">{{ location.name }}</a>-->
            <!--</li>-->
          <!--</div>-->
        </div>

      </div>

      <a id="db[userID].orgStructure"
         href="#"
         class="list-group-item">Link</a>
    </div>
  </div><!--/span-->

</template>

<script>
  import links from './links.js'
  import userData from './mock-data/users.json'

  export default {
    data() {
      return {
//      userID: userData.currentUser.id,
        userID: "5b046590aac666aabf1226cc",
        db: userData.userDB
      }
    },
    mounted() {

    }
  }
</script>
