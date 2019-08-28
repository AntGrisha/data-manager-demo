<template>
  <form v-on:submit="submitData">
    <div class="input-wrapper">
      <input class="input-title" v-model="title" placeholder="Title" type="text" required />
    </div>
    <div class="input-wrapper">
      <textarea class="input-text" v-model="text" placeholder="Text" required></textarea>
    </div>
    <div class="add-wrapper">
      <button type="submit" class="btn-add">Add</button>
    </div>
    <div v-if="dataCreatedFlag" class="success-wrapper">
      <p>Data has been created!</p>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import config from "../config/index";
export default {
  data() {
    return {
      title: "",
      text: "",
      endpoint: `${config.apiUrl}/data`,
      dataCreatedFlag: false
    };
  },
  methods: {
    submitData(e) {
      e.preventDefault();
      axios.post(this.endpoint, { title: this.title, text: this.text })
        .then(() => {
          this.dataCreatedFlag = true;
          this.title = '';
          this.text = '';
        })
        .catch(e => console.log(e));
    }
  }
};
</script>

<style>
.input-wrapper {
  width: 400px;
  margin-bottom: 30px;
}
.input-title {
  width: 100%;
  font-size: 26px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid grey;
}
.input-text {
  width: 100%;
  height: 250px;
  font-size: 16px;
  padding: 20px;
  resize: none;
  border-radius: 10px;
  border: 1px solid grey;
}

.add-wrapper {
  width: 440px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-add {
  margin: 0 auto;
  font-size: 20px;
  padding: 10px 30px;
  border-radius: 10px;
  cursor: pointer;
}
.success-wrapper {
  width: 440px;
  margin-bottom: 30px;
  text-align: center;
}
</style>