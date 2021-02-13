<template>
  <div id="app">
    <SiteNav></SiteNav>
    <router-view/>
    <div class="footer">
      <section>
        <div>
          <a href="https://discord.gg/sTmHTSZ" target="_blank">
            <img alt="Discord" src="./assets/img/discord.png" width="250" height="70">
          </a>
        </div>
      </section>
      <section>
        <div id="copyright">
          <h6>© {{getCurrYear()}} Ninja Sheep Productions.  All rights reserved.</h6>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SiteNav from '@/components/SiteNav'

export default {
  components: {
    SiteNav
  },
  computed: {
    ...mapState(['userProfile']),
    showNav() {
      return Object.keys(this.userProfile).length > 1
    }
  },
  methods: {
    getCurrYear() {
      return new Date().getUTCFullYear();
    }
  }
}
</script>
