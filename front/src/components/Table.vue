<template>
<div  class="table-wrapper">
  <div v-if="itemList.length > 0" class="table-data">
    <div  v-for="item in itemList" v-bind:key="item.id" class="row">
        <div class="cell">{{item[leftField]}}</div>
        <div class="cell">{{item[rightField]}}</div>
    </div>
  </div>
  <div v-if="itemList.length === 0" class="no-data" >
      There is no data yet
  </div>
</div>
</template>

<script>
export default {
  props: ["itemList", "leftField", "rightField"]
};
</script>

<style>
.table-wrapper {
  margin: 0 auto;
  width: 100%;
}
.table-data {
  width: 100%;
  height:max-content;
  max-height: 70vh;
  border: 1px solid black;
  overflow-y: scroll;
}

.row {
    width: 100%;
    position: relative;
    border-bottom: 1px solid black;
    overflow: hidden;
}
.row:last-child {
    border-bottom: none;
}

.cell {
    width: calc(49% - 40px);
    float: left;
    padding: 20px;
}
.cell:first-child {
    border-right: 1px solid black;
}
.no-data {
    width: max-content;
    margin: 0 auto;
}
</style>