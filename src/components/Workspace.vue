<template>
  <div class="col-sm-9 col-md-8 main">
    <h1>Workspace</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'workspace',
  data () {
    return {
      widget: 'dashboard'
    }
  }
}
</script>
