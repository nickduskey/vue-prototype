<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <li class="active">
        Dashboard
        <span class="sr-only">(current)</span>
      </li>
      <li>
        <a href="#">Triggers</a>
      </li>
      <li>
        <a href="#">Workflows</a>
      </li>
      <li>
        <a href="#">Outputs</a>
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
