<template>
  <div id="dashboard">

    <section>
      <div class="col1">
        <div class="profile">
          <h5>{{ userProfile.name }}</h5>
          <p>{{ userProfile.title }}</p>
        </div>
      </div>
      <div class="col2">
        <div class="discord">
          <CommentModal></CommentModal>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
import CommentModal from '@/components/CommentModal'

export default {
  components: {
    CommentModal
  },
  computed: {
    ...mapState(['userProfile'])
  },
}
</script>

<style lang="scss" scoped>

</style>
