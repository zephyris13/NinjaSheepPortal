<template>
  <header>
    <div class="logobanner">
      <router-link to="/">
        <img alt="Ninja Sheep Productions" src="../assets/img/logo2.png" class="logo">
        <h4 class="logotext">Ninja Sheep Productions</h4>
      </router-link>
      <div class="sitenavlinks">
        <ul class="inline">
          <li>
            <router-link to="/">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/timeline">Timeline</router-link>
          </li>
          <li>
            <router-link to="/settings">Settings</router-link>
          </li>
          <li><a @click="logout()">logout</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    methods: {
      logout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sitenavlinks {
    position: relative;
    top: 30%;
    padding-left: 25em;
  }
</style>
