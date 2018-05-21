<!--<template>-->
  <!--<div class="demo-home">-->

    <!--<mdc-card>-->

      <!--<mdc-card-header-->
        <!--title="Title goes here"-->
        <!--subtitle="subtitle here" >-->
      <!--</mdc-card-header>-->

      <!--<mdc-card-actions>-->

        <!--<mdc-card-action-buttons>-->
          <!--<mdc-card-action-button>ACTION</mdc-card-action-button>-->
        <!--</mdc-card-action-buttons>-->

        <!--<mdc-card-action-icons>-->
          <!--<mdc-card-action-icon icon="star" />-->
        <!--</mdc-card-action-icons>-->

      <!--</mdc-card-actions>-->
    <!--</mdc-card>-->

    <!--<mdc-display-->
      <!--ref="title">{{ title }}</mdc-display>-->
    <!--<about class="markdown" />-->

    <!--<h1>{{ data.name }} <small>Parent Organization</small></h1>-->
    <!--<div v-if="!data.locations && !data.subAgency">-->
      <!--<h2>This organization does not have any locations or sub agencies</h2>-->
    <!--</div>-->
    <!--<div v-else>-->
      <!--<div class="mdc-layout-grid">-->
        <!--<div class="mdc-layout-grid__inner">-->
         <!--&lt;!&ndash;IF THEY HAVE MUTIPLE LOCATIONS&ndash;&gt;-->
          <!--<div v-if="data.locations" class="mdc-layout-grid__cell mdc-layout-grid__cell&#45;&#45;span-12 demo-cell"-->
               <!--v-for="location in data.locations">{{ location.name }}<div>-->
            <!--<strong>Location Admin</strong>: {{location.admin.firstName + " " + location.admin.lastName}}-->
          <!--</div>-->
            <!--<strong>User Group:</strong>-->
            <!--<ol>-->
              <!--<li v-for="user in location.userGroup">-->
                <!--{{user.firstName + " " + user.lastName}}-->
                <!--<div>-->
                  <!--<strong>Permissions:</strong>-->
                  <!--<ul>-->
                    <!--<li v-for="permission in user.permissions">-->
                      <!--{{permission}}-->
                    <!--</li>-->
                  <!--</ul>-->
                  <!--<strong>Contact Info</strong>-->
                  <!--<ul>-->
                    <!--<li>-->
                      <!--Role: {{user.roles}}-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--Email: {{user.email}}-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--Phone: {{user.phone}}-->
                    <!--</li>-->
                  <!--</ul>-->
                <!--</div>-->
              <!--</li>-->
            <!--</ol>-->
          <!--</div>-->
          <!--&lt;!&ndash;IF THEY HAVE MUTIPLE LOCATIONS&ndash;&gt;-->
          <!--<div v-if="data.subAgency">-->
            <!--<div v-for="sub in data.subAgency"-->
                 <!--class="mdc-layout-grid__cell mdc-layout-grid__cell&#45;&#45;span-12 demo-cell">-->
                <!--<strong>Sub Agency: </strong> {{sub.name}}-->
                <!--&lt;!&ndash;<strong>Sub Agency Admin: </strong> {{ sub.admin.roles }}&ndash;&gt;-->
                <!--<strong>User Group</strong>-->
                <!--&lt;!&ndash;<strong>Admin: </strong> {{ sub.admin.email }}&ndash;&gt;-->
              <!--<hr>-->
                <!--&lt;!&ndash;IF SUB AGENCIES HAVE MUTIPLE LOCATIONS&ndash;&gt;-->
                <!--<div v-if="sub.location"-->
                  <!--v-for="subLocation in sub.location">-->
                  <!--<strong>Sub Location Name: </strong> {{subLocation.name}}-->
                <!--</div>-->
            <!--</div>-->

            <!--</div>-->
              <!--<div v-else>-->
                <!--test-->
              <!--</div>-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import userData from './mock-data/userData.json'-->
  <!--export default {-->
    <!--components: {-->
      <!--about: () => import('../docs/about.md')-->
    <!--},-->
    <!--data() {-->
      <!--return {-->
        <!--title: 'User Dropdown',-->
        <!--data: userData.orgData-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->
