<template>
    <div class="main-container">
        <div class="form-panel">
            <div class="tt-temp-width">
                <el-form ref="searchForm" :model="searchForm" :rules="rules" label-width="100px">
                    <el-row :gutter="0">
                        <el-col :span="24">
                            <el-form-item label="模板名称" prop="topoTemplateName">
                                <el-input v-model="searchForm.topoTemplateName" size="small" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="0">
                        <el-col :span="24">
                            <el-form-item label="功能类型：" prop="functionType">
                                <el-select 
                                    v-model="searchForm.functionType" 
                                    size="small" 
                                    placeholder="请选择" 
                                    style="width:100%">
                                    
                                    <el-option 
                                        :label="item.text" 
                                        :value="item.value" 
                                        v-for="item in functionTypes" :key="item.value">
                                    </el-option>

                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="10" class="el-row-pr">
                        <el-col :span="16">
                            <el-form-item label="处理能力：" prop="processCapacity">
                                <el-input v-model="searchForm.processCapacity" size="small" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" class="reset-ml">
                            <el-form-item label="" prop="capacityUnit">
                                <el-select 
                                    v-model="searchForm.capacityUnit" 
                                    size="small" 
                                    placeholder="请选择" 
                                    allow-create
                                    filterable
                                    style="width:100%; margin-left:0!important;">
                                    <el-option 
                                        :label="item.text" 
                                        :value="item.value" 
                                        v-for="item in capacityUnit" 
                                        :key="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        
                        <!-- <el-tooltip class="item" effect="dark" content="提示文字" placement="right">
                            <i class="el-icon-question"></i>
                        </el-tooltip> -->
                    </el-row>


                    <el-row :gutter="0">
                        <el-col :span="24">
                            <el-form-item label="TP模板：" prop="tpTemplateName">
                                <el-input 
                                    v-model="searchForm.tpTemplateName" 
                                    size="small" 
                                    placeholder="请选择TP模板" 
                                    :readonly="true"
                                    @click.native="select('TP')">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="0">
                        <el-col :span="24">
                            <el-form-item label="TG模板：" prop="tgTemplateName">
                                <el-input 
                                    v-model="searchForm.tgTemplateName" 
                                    size="small" 
                                    placeholder="请选择TG模板" 
                                    :readonly="true"
                                    @click.native="select('TG')">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>


                    <el-row :gutter="0">
                        <el-col :span="10">
                            <el-form-item label="TP/TG：" prop="tpRatio">
                                <el-input v-model="searchForm.tpRatio" size="small" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6" class="rate-ml el-row-pr">
                            <el-form-item label="" class="inner-text" prop="tgRatio">
                                <el-input v-model="searchForm.tgRatio" size="small" placeholder=""></el-input>
                            </el-form-item>
                            

                            <!-- <el-tooltip class="item" effect="dark" content="提示文字" placement="right">
                                <i class="el-icon-question add"></i>
                            </el-tooltip> -->

                        </el-col>
                    </el-row>


                    
                </el-form>
            </div>
            
        </div>

        <div class="tt-btns">
            <el-button size="small" @click="cancel">取消</el-button>
            <el-button type="primary" size="small" @click="onSubmit('searchForm')">提交</el-button>   
        </div>


        <el-dialog @close="dialogClose" 
            :title="type+'模板选择'" 
            :visible.sync="dialogTableVisible" 
            width="750px"
            top="80px">
            我是弹窗内容
            <!-- <temp-select :type="type" @handleDialogState="dialogState"></temp-select> -->
        </el-dialog>
        
    </div>
</template>


<style lang="scss">
.tt-temp-width{
    width: 500px;
    margin: 0 auto;
    .reset-ml {
        .el-form-item__content {
            margin-left: 0!important;
        }
    }
    .rate-ml{
        .el-form-item__label{
            width: 20px!important;
            padding-right: 0!important;
            text-align: center;
        }
        .el-form-item__content {
            margin-left: 20px!important;
        }
        .inner-text{
            position: relative;
            &::before{
                content : '/';
                position: absolute;
                left: 8px;
                top: 12px;
            }
        }
    }
    .el-row-pr{
        position: relative;
        & > i{
            position: absolute;
            right: -20px;
            top: 13px;
            font-size: 20px;
            color: #999;
            &.add{
                right: -25px;
            }
        }
    }
}
.tt-btns{
    text-align: center;
}
</style>

<script>
// import { getEnumData, ttTempManage } from 'common/urls'
// import tempSelect from './components/tempSelect'
export default {
  data () {
    return {
      dialogTableVisible: false,
      type: '',
      functionTypes: [{'text': 'account_business', 'value': 'account_business'}, {'text': 'billrun', 'value': 'billrun'}, {'text': 'decode', 'value': 'decode'}, {'text': 'ims_business', 'value': 'ims_business'}, {'text': 'load', 'value': 'load'}, {'text': 'mdb', 'value': 'mdb'}, {'text': 'monitor', 'value': 'monitor'}, {'text': 'rating', 'value': 'rating'}, {'text': 'redo', 'value': 'redo'}, {'text': 'sum', 'value': 'sum'}, {'text': 'xc', 'value': 'xc'}],
      capacityUnit: [{'text': '个/秒', 'value': '个/秒'}, {'text': '话单数/秒', 'value': '话单数/秒'}, {'text': '账户数', 'value': '账户数'}],
      searchForm: {
        topoTemplateName: '',
        topoTemplateId: '',
        functionType: [],
        processCapacity: '',
        capacityUnit: '',
        tpTemplateId: '',
        tgTemplateId: '',
        tgRatio: '',
        tpRatio: '',
        tpTgRatio: '',
        tptgTemplate: [],
        tpTemplateName: '',
        tgTemplateName: ''
      },

      rules: {
        topoTemplateName: [
          { required: true, message: '请输入模板名称', trigger: 'blur' }
        //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        functionType: [
          { required: true, message: '请选择功能类型', trigger: 'change' }
        ],
        processCapacity: [
          { required: true, message: '请输入处理能力', trigger: 'blur' }
        ],
        // capacityUnit: [
        //   { required: true, message: '请输入单位', trigger: 'change' }
        // ],
        tpTemplateName: [
          { required: true, message: '请选择TP模板', trigger: 'change' }
        ],
        tgTemplateName: [
          { required: true, message: '请选择TG模板', trigger: 'change' }
        ],
        tpRatio: [
          { required: true, message: '请输入比例', trigger: 'blur' }
        ],
        tgRatio: [
          { required: true, message: '请输入比例', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    if (this.$route.params.id > 0) {
      this.getDetail(this.$route.params.id)
    }
    // getEnumData('function_type').then(data => {
    //   this.functionTypes = data || []
    // }, res => {})
    // getEnumData('capacity_unit').then(data => {
    //   this.capacityUnit = data || []
    // }, res => {})
  },
  watch: {
    'searchForm.tpRatio' (val) {
      this.onlyNumber(val, 'tpRatio')
    },
    'searchForm.tgRatio' (val) {
      this.onlyNumber(val, 'tgRatio')
    },
    'searchForm.processCapacity' (val) {
      this.onlyNumber(val, 'processCapacity')
    },
    searchForm: {
      handler: function (val, oldVal) {
        this.searchForm.tpTgRatio = this.searchForm.tpRatio + ':' + this.searchForm.tgRatio
      },
      deep: true
    },
    'searchForm.tptgTemplate' (val) {
      this.searchForm.tpTemplateName = val.filter((item) => {
        return item.appTemplateId === this.searchForm.tpTemplateId
      })[0].appTemplateName
      this.searchForm.tgTemplateName = val.filter((item) => {
        return item.appTemplateId === this.searchForm.tgTemplateId
      })[0].appTemplateName
    }
  },
  methods: {

    onlyNumber (val, key) {
      if (val === '0') {
        this.$nextTick(() => {
          this.searchForm[key] = ''
        })
        return
      };
      let reg1 = /^\d+$/ig
      let reg2 = /\d+/ig
      if (!reg1.test(val)) {
        this.$nextTick(() => {
          this.searchForm[key] = val.match(reg2) ? val.match(reg2)[0] : ''
        })
      }
    },

    cancel (formName) {
      this.$confirm('确定取消吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push({name: 'tt-temp'})
      }).catch(() => {

      })
    },

    getDetail (id) {
      // ttTempManage.getDetail({ id: id }).then(res => {
      //   let resData = res.data
      //   if (resData.success) {
      //     // console.info(resData.data)
      //     for (let key in resData.data) {
      //       this.searchForm[key] = resData.data[key]
      //     }
      //   } else {
      //     this.$message.error(resData.message)
      //   }
      // }, res => {
      //   this.$message.error(res.data.message)
      // })
    },

    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.info(this.$route.params.id, this.$route.params.isCopy)
          if (this.$route.params.id > 0 && this.$route.params.isCopy === -1) {
            // 编辑
            // ttTempManage.updateTemp({id: this.$route.params.id}, this.searchForm).then(res => {
            //   let resData = res.data
            //   if (resData.success) {
            //     // console.info(resData.data)
            //     let _this = this
            //     this.$message({
            //       message: '编辑成功',
            //       type: 'success',
            //       onClose () {

            //       }
            //     })
            //     _this.golist()
            //   } else {
            //     this.$message.error(resData.message)
            //   }
            // }, res => {
            //   this.$message.error(res.data.message)
            // })
          } else {
            // 新建或者复制
            // ttTempManage.addTemp(this.searchForm).then(res => {
            //   let resData = res.data
            //   if (resData.success) {
            //     // console.info(resData.data)
            //     let _this = this
            //     this.$message({
            //       message: this.$route.params.isCopy === 1 ? '复制成功' : '新增成功',
            //       type: 'success',
            //       onClose () {

            //       }
            //     })
            //     _this.golist()
            //   } else {
            //     this.$message.error(resData.message)
            //   }
            // }, res => {
            //   this.$message.error(res.data.message)
            // })
          }
        } else {
          // console.log('error submit!!')
          return false
        }
      })
    },
    golist () {
      this.$router.push({
        name: 'tt-temp'
      })
    },
    select (type) {
      this.type = type
      this.dialogTableVisible = true
    },
    dialogState (state) {
      this.dialogTableVisible = state.visible
      if (state.data) {
        // console.info(state)
        if (state.type === 'TP') {
          this.searchForm.tpTemplateId = state.data.appTemplateId
          this.searchForm.tpTemplateName = state.data.appTemplateName
        } else {
          this.searchForm.tgTemplateId = state.data.appTemplateId
          this.searchForm.tgTemplateName = state.data.appTemplateName
        }
      }
    },
    dialogClose () {
      this.type = ''
    }
  },
  components: {
    // tempSelect
  }
}

</script>
