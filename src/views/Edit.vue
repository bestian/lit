<template>
  <div class="hello zh">
    <div v-show="edit">
      <textarea rows="30" cols="60" v-model="text" placeholder="請輸入文字"></textarea>
      <button @click="edit = false">檢視</button>
    </div>
    <div v-show="!edit">
      <p>{{text}}</p>
      <button @click="edit = true">編輯</button>
    </div>
  </div>
</template>

<script>
import { useHead } from 'unhead'

export default {
  name: 'EditMe',
  data () {
    return {
      edit: true,
      text: ''
    }
  },
  mounted () {
    useHead({
      title: '自訂 | 詩詞與文選'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}

button {
  font-size: 24px;
}
</style>
