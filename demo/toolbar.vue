<template>
  <mdc-toolbar
    waterfall
    class="main-toolbar">
    <mdc-toolbar-row>
      <mdc-toolbar-section align-start >
        <mdc-toolbar-menu-icon event="toggle-drawer"/>
        <mdc-toolbar-title @click="$router.push('/')">{{ 'User Management' }}</mdc-toolbar-title>
      </mdc-toolbar-section>
      <mdc-toolbar-section
        shrink-to-fit
        align-end>
      </mdc-toolbar-section>
    </mdc-toolbar-row>
  </mdc-toolbar>
</template>


<script>
import githubLogo from './assets/github-logo.svg'

export default {
  data() {
    return {
      githubLogo
    }
  }
}
</script>

<style>
.vue-avatar {
  width: 32px;
  height: 32px;
}
.vue-avatar img {
  border-radius: 32px;
  background-color: #f0f0f0;
}
</style>
