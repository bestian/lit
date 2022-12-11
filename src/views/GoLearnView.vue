<template>
  <div class="home">
    <GoLearn msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { useHead } from 'unhead'
// @ is an alias to /src
import GoLearn from '@/components/GoLearn.vue'
export default {
  name: 'GoLearnView',
  components: {
    GoLearn
  },
  mounted () {
    useHead({
      title: '勸學篇 | 詩詞與文選'
    })
  }
}
</script>
