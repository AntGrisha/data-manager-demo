<template>
  <aside class="sidebar">
    <router-link active-class="is-active" class="link" :to="{ name: 'addData' }">Add data</router-link>
    <router-link active-class="is-active" class="link" :to="{ name: 'data' }">Data</router-link>
    <router-link active-class="is-active" class="link" :to="{ name: 'logs' }">Logs</router-link>
  </aside>
</template>

<script>
export default {};
</script>

<style>
aside {
  flex: 1 0 30%;
  height: 100%;
  overflow-y: auto;
  width: 30%;
  padding: 50px 30px;
  box-sizing: border-box;
  border-right: 1px solid #42b983;
}

.link {
  display: block;
  text-decoration: none;
  margin-bottom: 10px;
  color: #2c3e50;
  font-size: 20px;
}

.link--home {
  text-transform: uppercase;
  margin-bottom: 30px;
}

.is-active {
  color: #42b983;
}
</style>