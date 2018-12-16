<template>
  <nav>
    <div class="nav-wrapper container">
      <a href="#" class="brand-logo">FV-Auth</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
            <router-link to="/login" class="waves-effect waves-light btn">Login</router-link>
        </li>
        <li>
            <router-link to="/login" class="waves-effect waves-light btn">Register</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>