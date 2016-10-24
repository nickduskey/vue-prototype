<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <li>
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
      <li>
        <router-link to="/triggers">Triggers</router-link>
      </li>
      <li>
        <router-link to="/workflows">Workflows</router-link>
      </li>
      <li>
        <router-link to="/outputs">Outputs</router-link>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      last: 'dashboard'
    }
  }
}
</script>

<style>
.nav-sidebar {
  margin-right: -21px;
  margin-bottom: 20px;
  margin-left: -20px;
}

.nav-sidebar > li > a {
  padding-right: 20px;
  padding-left: 20px;
}

.nav-sidebar > .active > a,
.nav-sidebar > .active > a:hover,
.nav-sidebar > .active > a:focus {
  color: #fff;
  background-color: #428bca;
}
</style>
