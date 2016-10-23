<template>
  <div class="row">
    <sidebar></sidebar>
    <workspace></workspace>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Workspace from './Workspace.vue'

export default {
  name: 'main-container',
  components: {
    Sidebar,
    Workspace
  },
  data () {
    return {
      authenticated: true
    }
  }
}
</script>
