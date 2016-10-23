<template>
  <nav class="navbar navbar-default navbar-static-top navbar-inverse">
    <div class="container" id="main-nav">
      <ul class="nav navbar-nav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li class="dropdown">
          <a
            href="#"
            class="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false">Documentation <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li>
              Getting Started
            </li>
            <li>
              Triggers
            </li>
            <li>
              Workflows
            </li>
            <li>
              Outputs
            </li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search" />
        </div>
        <button type="submit" class="btn btn-default">Search</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Register</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav-component',
  data () {
    return {
      authenticated: false
    }
  }
}
</script>
