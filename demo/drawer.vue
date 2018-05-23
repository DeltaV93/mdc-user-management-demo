<template>
  <div v-if="db[userID].adminUser"
       class="col-6 col-md-3 sidebar-offcanvas mt-5"
       id="sidebar">
    <div class="list-group list-group-flush">
      <li href="#" class="list-group-item list-group__header">
        <h5 class="mb-0">{{ db[userID].orgStructure.parentOrganization }}</h5>
      </li>
      <!--check if sub agency -->
      <div v-if="db[userID].orgStructure.subAgency"
           v-for="agency in db[userID].orgStructure.subAgency"
           class="list-group-item">
        <li :data-toggle="agency.locations ? 'collapse':null"
            :data-target="agency.locations ? '#' + agency.name:null"
            v-bind:id="agency.locations ? 'accordion--' + agency.name:null"
            v-bind:aria-expanded="agency.locations ? true:null"
            v-bind:aria-controls="agency.locations ? agency.name:null">
          <a href="#"><span v-if="agency.locations">&#x203A;</span>{{ agency.name }}</a>
        </li>
        <!--IF SUB AGENCY HAS MUTIPLE LOCATIONS-->
        <div v-if="agency.locations"
             v-bind:id="agency.name"
             class="collapse"
             aria-labelledby="headingTwo"
             data-parent="#sidebar">
          <div v-for="location in agency.locations"
               class="card-body">
            <a href="#">{{location.name}}</a>
          </div>
        </div>
      </div>

      <!--check if org has mutiple locations -->
      <div v-if="db[userID].orgStructure.locations"
           v-for="location in db[userID].orgStructure.locations"
           class="list-group-item">
        <li>
          <a href="#">{{ location.name }}</a>
        </li>
      </div>
    </div>
  </div><!--/span-->

</template>

<script>
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
