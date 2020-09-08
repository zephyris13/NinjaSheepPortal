<template>
  <div id="dashboard">

    <section>
      <div class="col1">
        <div class="profile">
          <h5>{{ userProfile.name }}</h5>
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
