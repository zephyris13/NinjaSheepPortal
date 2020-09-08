<template>
  <div id="app">
    <div class="logobanner">
      Ninja Sheep Productions
    </div>
    <SiteNav v-if="showNav"></SiteNav>
    <router-view/>
    <div class="footer">
      <section>
        <div>
          <a href="https://discord.gg/sTmHTSZ">
            <img alt="Discord" src="./assets/img/discord.png" width="250" height="70">
          </a>
        </div>
      </section>
      <section>
        <div id="copyright">
          <h4>© {{getCurrYear()}} Ninja Sheep Productions.  All rights reserved.</h4>
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
