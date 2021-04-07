<template>
  <div class="search-template">
    <el-autocomplete
      v-model="searchText"
      :fetch-suggestions="querySearchAsync"
      placeholder="你又想要什么奇怪的谱子"
 
    >
    <template slot-scope="{ item }">
      <div class="name" @click="jump(item.name)">{{ item.name }}</div>
    </template>
    </el-autocomplete>
    <i
      slot="prefix"
      class=" el-icon-search"
      @click="handleSelect()"
    ></i>
  </div>
</template>
<script>
import {systemUrl} from 'common/urls'
export default {
  data () {
    return {
      searchText: '',
      allData: [],
      show: [],
      dataFlag: false
    }
  },
  methods: {
    querySearchAsync (queryString, cb) {
      // var restaurants = this.restaurants

      // var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants
      if (queryString && queryString.length > 0 && this.dataFlag === false) {
        this.getData(queryString, cb)
      } else if (!queryString || queryString.length === 0) {
        this.clearData()
        // cb([])
      } else {
        // this.show = this.allData.filter(this.createStateFilter(queryString))
        cb(this.show)
      }
    },
    getData (key, cd) {
    //   console.log(' HTTP get: ', key)
      this.$http({
        method: 'post',
        url: systemUrl.getAll,
        data: {
          keyword: key
        }
      }).then(res => {
        if (res.status === 200) {
        //   console.log('拉取成功：', res.data)
          this.allData = res.data.score.concat(res.data.volume)
          this.show = this.allData
          cd(this.show)
        //   console.log(this.allData)
        } else {
          this.$message({
            showClose: true,
            duration: 2000,
            message: res.data.message,
            type: 'error'
          })
        }
      })
      .catch((res) => {
        this.$message({
          showClose: true,
          duration: 2000,
          message: '请求失败',
          type: 'error'
        })
      })

      this.dataFlag = true
    },
    // createStateFilter (queryString) {
    //   return (state) => {
    //     return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
    //   }
    // },
    clearData () {
    //   console.log(' clearData: ')
      this.allData = []
      this.dataFlag = false
    },
    handleSelect (item) {
    //   console.log(item)
      this.$router.push(`/page/searchres/${this.searchText}`)
    },
    jump (key) {
      this.$router.push(`/page/searchres/${key}`)
    }
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
