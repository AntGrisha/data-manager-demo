<template>
  <table-component v-if="logList" v-bind:itemList="logList" leftField="event" rightField="date"></table-component>
</template>

<script>
import axios from "axios";
import config from "../config/index";
import TableComponent from '../components/Table';
export default {
  components: {
    TableComponent
  },
  data() {
    return {
      logList: null,
      endpoint: `${config.apiUrl}/logs`
    };
  },
  created() {
    this.getLogList();
  },
  methods: {
    getLogList() {
      axios
        .get(this.endpoint)
        // sorting by date
        .then(response => this.logList = response.data.sort((a, b) =>
          (a.date > b.date) ? -1 : ((a.date < b.date) ? 1 : 0)))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
</style>