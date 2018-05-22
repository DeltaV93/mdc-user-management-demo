<template>



    <div class="col-6 col-md-3 sidebar-offcanvas mt-5" id="sidebar">
      <div class="list-group">
        <a href="#" class="list-group-item active">Link</a>
        <a href="#" class="list-group-item">Link</a>
        <a href="#" class="list-group-item">Link</a>
        <a href="#" class="list-group-item">Link</a>
        <a href="#" class="list-group-item">Link</a>
        <a href="#" class="list-group-item">Link</a>
        <a href="#" class="list-group-item">Link</a>
        <a href="#" class="list-group-item">Link</a>
        <a href="#" class="list-group-item">Link</a>
        <a href="#" class="list-group-item">Link</a>
      </div>
    </div><!--/span-->



  <!--</div>&lt;!&ndash;/row&ndash;&gt;-->



  <!--<mdc-drawer-->
    <!--ref="drawer"-->
    <!--class="primary-drawer"-->
    <!--toggle-on="toggle-drawer">-->
    <!--<mdc-drawer-header temporary/>-->
    <!--<mdc-drawer-list dense>-->
      <!--<mdc-drawer-item to="/">Home</mdc-drawer-item>-->
      <!--<mdc-drawer-item to="/docs/getting-started">Getting Started</mdc-drawer-item>-->
      <!--<mdc-drawer-divider />-->
      <!--<mdc-drawer-item-->
        <!--v-for="link in links"-->
        <!--:to="link.to"-->
        <!--:key="link.id">-->
        <!--{{ link.name }}-->
      <!--</mdc-drawer-item>-->
    <!--</mdc-drawer-list>-->
  <!--</mdc-drawer>-->
</template>

<script>
import links from './links.js'

export default {
  data() {
    return {
      links
    }
  }
}
</script>
