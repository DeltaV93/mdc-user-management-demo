<template>
  <div>
    <toolbar slot="toolbar"/>

    <div class="container">
      <div class="row row-offcanvas row-offcanvas-right">
      <drawer slot="drawer"/>
      <main class="content">
        <router-view/>
      </main>
      </div>
    </div>
  </div>

</template>


<script>
import toolbar from './toolbar.vue'
import drawer from './drawer.vue'

export default {
  components: {
    toolbar,
    drawer
  }
}
</script>
