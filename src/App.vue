<template>
  <nav>
    <div class="wave">
      <div class="links">
        <router-link to="/">詩文選</router-link> |
        <router-link to="/golearn">勸學篇</router-link>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script type="text/javascript">

import { useHead } from 'unhead'
export default {
  name: 'App',
  mounted () {
    useHead({
      title: '詩詞與文選'
    })
  }
}

</script>

<style lang="scss">

body {
  background-color: #cfc;
}

#app {
  width: 100vw;
  overflow: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

.hello {
  display: flex;
  padding-top: .6em;
  padding-bottom: 1.2em;
  align-items: right;
}

.zh {
  display: inline-block;
  margin-top: 50px;
  position: relative;
  z-index: 2;
}

.zh h1 {
  padding-top: 1em;
}

p.down {
  padding-top: 4em;
}

p, .zh {
  font-family: "Bpmf GenYo Gothic", "Bpmf GenYo Gothic R" !important;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  line-height: 2;
  text-align: left;
}

p {
  font-size: 24px;
}

nav {
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  a {
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.wave {
  height: 50px;
  background: linear-gradient(90deg, #27b6b9 0%, #0f4061 100%);
}

/* Wave text css */
.wave {
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 24px;  
}

.wave a {
  color: #121;
}
/* */

.links a {
  position: relative;
  z-index: 99 !important;
}

.wave::before{
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: repeat;
  height: 10px;
  background-size: 20px 20px;
  background-image:
   radial-gradient(circle at 10px -5px, transparent 12px, #cfc 13px);
}

.wave::after{
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: repeat;
  height: 15px;
  background-size: 40px 20px;
  background-image:
    radial-gradient(circle at 10px 15px, #cfc 12px, transparent 13px);
}
</style>
