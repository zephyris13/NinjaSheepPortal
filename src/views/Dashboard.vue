<template>
  <div id="dashboard">

    <section>
      <div class="col1">
        <div class="profile">
          <h2>Profile</h2>
          <h3>General</h3>
          <h4>Email: {{ userProfile.email }}</h4>
          <br />
          <h3>Pioneers</h3>
          <h4>Display Name: {{ userProfile.pioneers.display }}</h4>
          <h4>Faction: {{ userProfile.pioneers.faction }}</h4>
        </div>
      </div>
      <div class="col2">
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'

export default {
  computed: {
    ...mapState(['userProfile'])
  },
}
</script>

<style lang="scss" scoped>

</style>
