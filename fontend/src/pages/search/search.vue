<template>
  <div class="search-template">
    <el-autocomplete
      v-model="searchText"
      :fetch-suggestions="querySearchAsync"
      placeholder="你又想要什么奇怪的谱子"
      @select="handleSelect"
    >
    </el-autocomplete>
    <i
      slot="prefix"
      class=" el-icon-search"
    ></i>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    querySearchAsync () {},
    handleSelect () {}
  }
}
</script>
<style lang="scss" >
@import "src/assets/style.scss";
.search-template {
  z-index: 5;
  div {
    display: inline;
  }
  input {
    background-color: transparent !important;
    // box-sizing: border-box;
    font-size: $--FontSizeM;
    margin-top: -12px;
    padding: 0px 30px 0px 5px;
    width: 250px;
    height: 60px;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-radius: 0px;
    border-bottom: 2px solid $--basicColor;
    &:hover {
      border-color: $--darkColor;
    }
    &:focus {
      border-color: $--activeColor;
    }
  }
  i {
    display: inline-block;
    font-weight: 600;
    line-height: 60px;
    font-size: 28px;
    margin-left: -30px;
    color: $--basicColor;
    padding-top: 2px;
    z-index: 60;
    position: relative;
    cursor: pointer;
    &:hover {
      color: $--activeColor;
    }
  }
}
</style>
