<template>
  <div id="app">
    <header-bar></header-bar>
    <main>
      <side-bar></side-bar>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import HeaderBar from "./components/HeaderBar";
import SideBar from "./components/SideBar";
import config from "./config/index";
export default {
  components: {
    HeaderBar,
    SideBar
  },
  name: "app",
  data() {
    return {
      endpoint: `${config.apiUrl}/login`
    };
  },
  methods: {
    login() {
      axios
        .post(this.endpoint)
        .catch(error => console.log(error));
    }
  },
  created() {
    this.login();
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

main {
  display: flex;
  height: calc(100vh - 90px);
  max-width: 1200px;
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}

.content {
  flex: 1 1 70%;
  display: flex;
  padding: 40px;
  justify-content: center;
}
</style>
