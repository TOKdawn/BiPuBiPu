<template>
    <div class="main-container">
        <div class="form-panel">
            <el-form ref="searchForm" :model="searchForm" label-width="90px">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-form-item label="模板名称：" prop="appTemplateName">
                            <el-input v-model="searchForm.appTemplateName" size="small" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label-width="0">
                            <el-button type="primary" size="small" @click="onSubmit">查询</el-button>
                            <el-button size="small" @click="resetForm('searchForm')">重置</el-button>
                            <el-button plain size="small" :icon="expendShow?'el-icon-caret-top':'el-icon-caret-bottom'" @click="expendShow=!expendShow"></el-button>
                        </el-form-item>
                    </el-col>
                </el-row>

                <template v-if="expendShow">
                    <el-row :gutter="20">
                        <el-col :span="18">
                            <el-form-item label="类型：" prop="appTypes">
                                <el-checkbox-group v-model="searchForm.appTypes">
                                    <el-checkbox :label="item.value" v-for="(item,index) in appType" :key="index">{{item.text}}</el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>      
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="18">
                            <el-form-item label="功能类型：" prop="functionTypes">
                                <el-select v-model="searchForm.functionTypes" size="small" multiple placeholder="请选择" style="width:100%">
                                    <el-option :label="item.text" :value="item.value" v-for="item in functionType" :key="item.value"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </template>
                
            </el-form>
        </div>



        <div class="table-head-btns">
            <el-button plain size="small" :disabled="!multipleSelection.length" @click="handleExport">导出</el-button>
            <el-button plain size="small" :disabled="!multipleSelection.length" @click="handleDelete">删除</el-button>
            <el-button plain size="small" class="fr" @click="handleImport">导入</el-button>
            <el-button plain size="small" class="fr" @click="handleAdd(-1)">新增</el-button>
        </div>


        <el-table 
            ref="multipleTable" 
            :data="tableData.list" 
            tooltip-effect="dark" 
            border style="width: 100%" 
            @selection-change="handleSelectionChange">

            <el-table-column type="selection" width="55"></el-table-column>

            <el-table-column prop="appTemplateName" label="模板名称"></el-table-column>
            <el-table-column prop="appType" label="类型"></el-table-column>

            <el-table-column prop="functionType" label="功能类型">
                <!-- <template slot-scope="scope">
                    {{Utils.getEnumText(enumIsLoadedOptions,scope.row.language)}}
                </template> -->
            </el-table-column>

            <el-table-column label="操作" width="120">
                <template slot-scope="scope">
                    <div class="table-oper-btns">
                        <!-- <i class="iconfont icon-edit" v-if="scope.row.isLoaded===2"></i> -->
                        <i class="iconfont icon-edit" title="编辑" @click="handleAdd(scope.row.appTemplateId)"></i>
                        <i class="iconfont icon-copy" title="复制" @click="handleAdd(scope.row.appTemplateId,true)"></i>
                    </div>
                </template>
            </el-table-column>
            
        </el-table>


        <el-pagination class="table-pager" 
            @size-change="handleSizeChange" 
            @current-change="handleCurrentChange" 
            :current-page="page.pageNum" 
            :page-sizes="Utils.cutomPageSizes" 
            :page-size="page.pageSize" 
            layout="total, sizes, prev, pager, next, jumper" 
            :total="tableData.total"
            background>
        </el-pagination>


        <el-dialog title="批量导入" :visible.sync="importDialogVisible" width="400px">
          <el-upload class="upload-demo" 
            :action="importTemp" 
            :before-upload="beforeUpload" 
            :http-request="handleUpload"
            :show-file-list="false">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传zip文件</div>
          </el-upload>
          <span slot="footer" class="dialog-footer">
            <el-button size="small" @click="importDialogVisible = false">取 消</el-button>
          </span>
        </el-dialog>

    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import { applyTempManage } from 'common/urls'
const enumIsLoaded = [{ text: '装载', value: 1 }, { text: '未装载', value: 2 }]
const enumLanguage = [{ text: 'CPP', value: 1 }, { text: 'CPP2', value: 2 }]
export default {
  data () {
    return {
      enumIsLoadedOptions: enumIsLoaded,
      enumLanguageOptions: enumLanguage,
      expendShow: false,

      appType: [
        {
          'text': '自定义',
          'value': 'custom'
        },
        {
          'text': 'LTP',
          'value': 'ltp'
        },
        {
          'text': 'TG',
          'value': 'tg'
        },
        {
          'text': 'TP',
          'value': 'tp'
        }
      ],
      functionType: [{'text': 'account_business', 'value': 'account_business'}, {'text': 'billrun', 'value': 'billrun'}, {'text': 'decode', 'value': 'decode'}, {'text': 'ims_business', 'value': 'ims_business'}, {'text': 'load', 'value': 'load'}, {'text': 'mdb', 'value': 'mdb'}, {'text': 'monitor', 'value': 'monitor'}, {'text': 'rating', 'value': 'rating'}, {'text': 'redo', 'value': 'redo'}, {'text': 'sum', 'value': 'sum'}, {'text': 'xc', 'value': 'xc'}],
      searchForm: {
        appTemplateName: '',
        appTypes: [],
        functionTypes: []
      },

      tableData: {'total': 34, 'list': [{'appTemplateId': 25, 'appTemplateName': 'test1', 'appType': 'tp', 'functionType': 'billrun', 'processCapacity': 12, 'resourceCpu': 'string', 'resourceMemory': 'string', 'resourceImage': 'string', 'resourceNetwork': 'string', 'resourceVolume': null, 'startTimeoutSec': 360000, 'stopTimeoutSec': 360000, 'scriptType': 'CPP', 'templatePipeline': null, 'dataGeneratorType': null, 'capacityUnit': '个/秒', 'serviceIds': null, 'serviceNames': null, 'nodeInfos': null, 'tgInterfaceId': null, 'tgInterfaceName': null}, {'appTemplateId': 29, 'appTemplateName': 'asdasd', 'appType': 'tg', 'functionType': 'billrun', 'processCapacity': 0, 'resourceCpu': '2', 'resourceMemory': '1', 'resourceImage': null, 'resourceNetwork': null, 'resourceVolume': '[{"key":"","value":"","mode":"ro"}]', 'startTimeoutSec': 360000, 'stopTimeoutSec': 360000, 'scriptType': 'CPP', 'templatePipeline': null, 'dataGeneratorType': 'QUEUE', 'capacityUnit': null, 'serviceIds': null, 'serviceNames': null, 'nodeInfos': null, 'tgInterfaceId': null, 'tgInterfaceName': null}, {'appTemplateId': 32, 'appTemplateName': 'appT9', 'appType': 'custom', 'functionType': 'billrun', 'processCapacity': 0, 'resourceCpu': 'string', 'resourceMemory': 'string', 'resourceImage': 'string', 'resourceNetwork': 'string', 'resourceVolume': null, 'startTimeoutSec': 360000, 'stopTimeoutSec': 360000, 'scriptType': 'Java', 'templatePipeline': null, 'dataGeneratorType': null, 'capacityUnit': null, 'serviceIds': null, 'serviceNames': null, 'nodeInfos': null, 'tgInterfaceId': null, 'tgInterfaceName': null}, {'appTemplateId': 33, 'appTemplateName': 'appT10', 'appType': 'ltp', 'functionType': 'billrun', 'processCapacity': 0, 'resourceCpu': 'string', 'resourceMemory': 'string', 'resourceImage': 'string', 'resourceNetwork': 'string', 'resourceVolume': null, 'startTimeoutSec': 360000, 'stopTimeoutSec': 360000, 'scriptType': 'Java', 'templatePipeline': null, 'dataGeneratorType': null, 'capacityUnit': null, 'serviceIds': null, 'serviceNames': null, 'nodeInfos': null, 'tgInterfaceId': null, 'tgInterfaceName': null}, {'appTemplateId': 37, 'appTemplateName': 'htTp', 'appType': 'tp', 'functionType': 'account_business', 'processCapacity': null, 'resourceCpu': '1', 'resourceMemory': '1', 'resourceImage': null, 'resourceNetwork': null, 'resourceVolume': '[{"key":"","value":"","mode":"ro"}]', 'startTimeoutSec': 360000, 'stopTimeoutSec': 360000, 'scriptType': 'CPP', 'templatePipeline': null, 'dataGeneratorType': null, 'capacityUnit': null, 'serviceIds': null, 'serviceNames': null, 'nodeInfos': null, 'tgInterfaceId': null, 'tgInterfaceName': null}, {'appTemplateId': 1000, 'appTemplateName': 'htTG', 'appType': 'tg', 'functionType': 'billrun', 'processCapacity': null, 'resourceCpu': '1', 'resourceMemory': '1', 'resourceImage': null, 'resourceNetwork': null, 'resourceVolume': '[{"key":"","value":"","mode":"ro"}]', 'startTimeoutSec': 360000, 'stopTimeoutSec': 360000, 'scriptType': 'CPP', 'templatePipeline': null, 'dataGeneratorType': 'DB', 'capacityUnit': null, 'serviceIds': null, 'serviceNames': null, 'nodeInfos': null, 'tgInterfaceId': null, 'tgInterfaceName': null}, {'appTemplateId': 1001, 'appTemplateName': 'adsa', 'appType': 'tg', 'functionType': 'account_business', 'processCapacity': 2323, 'resourceCpu': '1', 'resourceMemory': '1', 'resourceImage': null, 'resourceNetwork': null, 'resourceVolume': '[{"key":"","value":"","mode":"ro"}]', 'startTimeoutSec': 360000, 'stopTimeoutSec': 360000, 'scriptType': 'CPP', 'templatePipeline': null, 'dataGeneratorType': null, 'capacityUnit': '话单数/秒', 'serviceIds': null, 'serviceNames': null, 'nodeInfos': null, 'tgInterfaceId': null, 'tgInterfaceName': null}, {'appTemplateId': 34, 'appTemplateName': '测试', 'appType': 'tp', 'functionType': 'billrun', 'processCapacity': 0, 'resourceCpu': '3', 'resourceMemory': '4', 'resourceImage': 'etcd', 'resourceNetwork': 'host', 'resourceVolume': '[{"key":"name","value":"1","mode":"ro","c":"rw"},{"key":"value","value":"2","mode":"ro","c":"ro"}]', 'startTimeoutSec': 360000, 'stopTimeoutSec': 360000, 'scriptType': 'CPP', 'templatePipeline': null, 'dataGeneratorType': null, 'capacityUnit': null, 'serviceIds': null, 'serviceNames': null, 'nodeInfos': null, 'tgInterfaceId': null, 'tgInterfaceName': null}, {'appTemplateId': 35, 'appTemplateName': 'sdfsd', 'appType': 'tp', 'functionType': 'billrun', 'processCapacity': 0, 'resourceCpu': '1', 'resourceMemory': '1', 'resourceImage': null, 'resourceNetwork': null, 'resourceVolume': '[{"key":"","value":"","mode":"ro"}]', 'startTimeoutSec': 360000, 'stopTimeoutSec': 360000, 'scriptType': 'CPP', 'templatePipeline': null, 'dataGeneratorType': null, 'capacityUnit': null, 'serviceIds': null, 'serviceNames': null, 'nodeInfos': null, 'tgInterfaceId': null, 'tgInterfaceName': null}, {'appTemplateId': 36, 'appTemplateName': 'htApp', 'appType': 'ltp', 'functionType': 'account_business', 'processCapacity': null, 'resourceCpu': '1', 'resourceMemory': '1', 'resourceImage': null, 'resourceNetwork': null, 'resourceVolume': '[{"key":"","value":"","mode":"ro"}]', 'startTimeoutSec': 360000, 'stopTimeoutSec': 360000, 'scriptType': 'CPP', 'templatePipeline': null, 'dataGeneratorType': null, 'capacityUnit': null, 'serviceIds': null, 'serviceNames': null, 'nodeInfos': null, 'tgInterfaceId': null, 'tgInterfaceName': null}]},
      page: {
        pageNum: 1, // 当前页
        pageSize: 10 // 一页显示几条
      },
      multipleSelection: [],

      importTemp: applyTempManage.importTemp,
      exportTemp: applyTempManage.exportTemp,

      importDialogVisible: false
    }
  },
  created () {
    // 获取类型枚举值
    // getEnumData('app_type').then(data => {
    //   this.appType = data || []
    // }, res => {})
    // 获取功能类型枚举值
    // getEnumData('function_type').then(data => {
    //   this.functionType = data || []
    // }, res => {})
  },
  mounted () {
    this.getTableData()
  },
  watch: {
    // appType (val) {
    //   this.$nextTick(function () {
    //     let deleteParams = ['mdb', 'shell', 'xc']
    //     val.forEach((item, index) => {
    //       if (deleteParams.indexOf(item.value) !== -1) {
    //         this.appType.splice(index, 1)
    //       }
    //     })
    //   })
    // }
  },
  computed: {
    appTempIds () {
      let ids = this.multipleSelection.map((item, index) => {
        return item.appTemplateId
      })
      return ids.toString()
    }
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    onSubmit () {
      this.getTableData()
    },
    getTableData () {
      let params = Object.assign(this.page, this.searchForm)
      if (!params.appTypes.length) {
        params.appTypes = ['custom', 'ltp', 'tp', 'tg'].toString()
      } else {
        params.appTypes = params.appTypes.toString()
      }
      params.functionTypes = params.functionTypes.toString()
      /*
      真实开发用，现在页面上显示的是模拟数据
      applyTempManage.getTemplatesList(params).then(res => {
        let resData = res.data
        if (resData.success) {
          this.tableData = resData.data
        } else {
          this.$message.error(resData.message)
        }
      }, res => {
        this.$message.error(res.data.message)
      })
      */
    },

    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
      this.page.pageSize = val
      this.getTableData()
    },
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`)
      this.page.pageNum = val
      this.getTableData()
    },
    handleExport () {
      window.location.href = this.exportTemp + '?appTemplatesIds=' + this.appTempIds
    },
    handleDelete () {
      this.$confirm('确定删除选中的模板吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        applyTempManage.deleteTemp({ appTemplatesIds: this.appTempIds }).then(res => {
          let resData = res.data
          if (resData.success) {
            this.$message({
              message: '删除成功！',
              type: 'success'
            })
            this.getTableData()
          } else {
            this.$message.error(resData.message)
          }
        }, res => {
          this.$message.error(res.data.message)
        })
      }).catch(() => {})
    },
    handleImport () {
      this.importDialogVisible = true
    },
    handleAdd (id, isCopy) {
      if (isCopy) {
        this.$router.push({ name: 'add', params: {id: parseInt(id), isCopy: 1} })
      } else {
        this.$router.push({ name: 'add', params: {id: parseInt(id), isCopy: -1} })
      }
    },
    // 上传文件前
    beforeUpload (file) {
      const arr = file.name.split('.')
      const isZip = arr[arr.length - 1] === 'zip'
      if (!isZip) {
        this.$message.error('上传文件只能是 zip 格式!')
      }
      return isZip
    },
    // 自定义上传文件
    handleUpload (content) {
      const formData = new FormData()
      formData.append('file', content.file)
      this.$http.put(this.importTemp, formData).then((res) => {
        let resData = res.data
        if (resData.success) {
          this.$message({
            message: '导入成功！',
            type: 'success'
          })
          this.getTableData()
          this.importDialogVisible = false
        } else {
          this.$message.error(res.data.message)
        }
      }, (res) => {
        this.$message.error(res.data.message)
      })
    }
  },
  components: {

  }
}

</script>

