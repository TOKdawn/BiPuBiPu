<template>
  <div class="score">
    <div class="main-context">
      <div>
        <img
          :src="scoreData.image_url"
          alt=""
          style="width:250px; height:250px; float:left;"
        >
        <div class="score-info">
          <h1>{{scoreData.name}}-{{scoreData.addtion}}</h1>
          <div class="uploader">@{{scoreData.author}}</div>
          <ul>
            <li>简介: {{scoreData.album}}</li>

          </ul>

          <el-row style="margin-top:15px;">
            <el-button
              type="primary"
              size="small"
              icon="el-icon-star-off"
            >收藏谱册</el-button>
            <el-button
              type="success"
              size="small"
              plain
            >修改信息</el-button>
            <el-button
              size="small"
              plain
            >删除谱册</el-button>
          </el-row>
        </div>
        <div class="score-context">
          <div class="collection">
            <div class="title">
              <h3>谱子列表</h3>
              <p>
                <el-switch
                  v-model="value3"
                  inactive-text="删除谱子"
                >
                </el-switch>
              </p>
            </div>
            <el-table
              ref="userCollection"
              :data="userCollection"
              highlight-current-row
              style="width: 100%; margin-bottom:30px;"
            >
              <el-table-column
                type="index"
                width="50"
              >
              </el-table-column>
              <el-table-column
                property="name"
                label="谱名"
                width="120"
              >
              </el-table-column>
              <el-table-column
                property="addtion"
                label="别名"
              >
              </el-table-column>
              <el-table-column
                label="操作"
                width="120"
              >

              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      scoreData: {
        image_url:
          'https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/185998-102.jpg',
        name: '示例谱册',
        addtion: '',
        author: 'dawn',
        authorId: '12333',
        album:
          '这里是谱册简介这里是谱册简介这里是谱册简介这里是谱册简介这里是谱册简介这里是谱册简介这里是谱册简介这里是谱册简介这里是谱册简介这里是谱册简介',
        update: '2018-12-18',
        uploader: 'TOKdawn',
        otherName: '花花花花',
        tagList: [
          {
            tagName: '东方'
          }
        ],
        context: '',
        otherLink: 'www.baidu.com'
      },
      value3: '',
      userCollection: [
        {
          id: 2,
          photo: null,
          name: '鳥の詩',
          addtion: '《AIR》片头曲',
          status: 1,
          visits: 0,
          created_at: '2018-07-11T09:14:04.137Z',
          updated_at: '2018-07-11T09:14:04.137Z'
        },
        {
          id: 3,
          photo: null,
          name: '鳥の詩222',
          addtion: '《AIR》片头曲',
          status: 1,
          visits: 0,
          created_at: '2018-08-06T07:10:53.202Z',
          updated_at: '2018-08-06T07:10:53.202Z'
        },
        {
          id: 4,
          photo: null,
          name: '鳥の詩333',
          addtion: '《AIR》片头曲',
          status: 1,
          visits: 0,
          created_at: '2018-08-06T07:10:57.168Z',
          updated_at: '2018-08-06T07:10:57.168Z'
        },
        {
          id: 1,
          photo: null,
          name: '鳥の詩444',
          addtion: '《AIR》片头曲',
          status: 1,
          visits: 1,
          created_at: '2018-07-11T09:13:53.001Z',
          updated_at: '2018-07-11T09:15:02.142Z'
        },
        {
          id: 4,
          photo: null,
          name: '鳥の詩333',
          addtion: '《AIR》片头曲',
          status: 1,
          visits: 0,
          created_at: '2018-08-06T07:10:57.168Z',
          updated_at: '2018-08-06T07:10:57.168Z'
        },
        {
          id: 1,
          photo: null,
          name: '鳥の詩444',
          addtion: '《AIR》片头曲',
          status: 1,
          visits: 1,
          created_at: '2018-07-11T09:13:53.001Z',
          updated_at: '2018-07-11T09:15:02.142Z'
        }
      ]
    }
  },
  created () {}
}
</script>
<style lang="scss" scoped>
@import "src/assets/style.scss";
.score {
  background: linear-gradient(rgb(258, 238, 215), #ffffff);
  .score-info {
    position: relative;
    height: 250px;
    margin-top: 40px;
    margin-bottom: 35px;
    padding-left: 305px;
    h1 {
      font-size: $--FontSizeXXL;
      padding-top: 15px;
    }
    .uploader {
      font-size: $--FontSizeL;
      color: $--linkBlue;
      cursor: pointer;
    }
    ul {
      width: 450px;
      overflow: hidden;
      padding-top: 5px;
      font-size: $--FontSizeM;
      line-height: $--FontSizeL;
      li {
        float: left;
        line-height: 27px;
        width: 450px;
        margin-right: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    p {
      width: 450px;
      overflow: hidden;
      font-size: $--FontSizeM;
      line-height: $--FontSizeL;
    }
  }
  .score-context {
    padding-right: 343px;
    .title {
      height: 38px;
      border-bottom: 3px solid #ec908c;
      color: #666;
      margin-top: 20px;
      h3 {
        font-size: 22px;
        font-weight: 600;
        line-height: 38px;
      }
      p {
        float: right;
        margin-top: -26px;
      }
    }
  }
}
</style>
