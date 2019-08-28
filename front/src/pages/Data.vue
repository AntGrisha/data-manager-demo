<template>
  <table-component v-if="dataList" v-bind:itemList="dataList" leftField="title" rightField="text"></table-component>
</template>

<script>
import axios from 'axios';
import config from '../config/index';
import TableComponent from '../components/Table';
export default {
  components: {
    TableComponent
  },
  data() {
    return {
      dataList: null,
      endpoint: `${config.apiUrl}/data`
    }
  },
  created() {
    this.getDataList();
  },
  methods: {
    getDataList() {
      axios.get(this.endpoint)
      // sorting by createdAt
        .then(response => this.dataList = response.data.sort((a, b) =>
          (a.createdAt > b.createdAt) ? -1 : ((a.createdAt < b.createdAt) ? 1 : 0)))
        .catch(error => console.log(error))
    }
  }
};
</script>

<style>
</style>