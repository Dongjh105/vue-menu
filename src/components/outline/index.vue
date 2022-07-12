<template>
  <div class="box">
    <div class="tp_title">
      <el-row>
        <el-col :span="10">
          <el-input
            suffix-icon="el-icon-search"
            class="inline-input"
            v-model="queryParms"
            placeholder="搜索..."
          ></el-input>
        </el-col>
        <el-col :span="4" :offset="10">
          <span> 卢本伟(2010705123) </span>
          <el-popover placement="bottom" width="2" trigger="click">
            <div style="width: 100%">
              <p
                class="bm_txt"
                v-for="item in texts"
                :key="item"
                @click="openMsg(item)"
              >
                {{ item }}
              </p>
            </div>
            <i class="el-icon-s-tools cu-p" slot="reference"></i>
          </el-popover>
        </el-col>
      </el-row>
    </div>
    <div class="content_box">
      <h3>统计数据</h3>
      <el-row>
        <el-col :span="5" class="tp_box">
          <el-calendar v-model="calendarVal" style="width: 100%; height: 360px">
          </el-calendar>
        </el-col>
        <el-col :span="5" class="tp_box_bc">
          <div id="pieMain" style="width: 100%; height: 360px"></div>
        </el-col>
        <el-col :span="12" class="tp_box_bc">
          <div id="lineMain" style="width: 100%; height: 360px"></div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="5" class="tp_box">
          <div
            class="content_bx"
            v-for="(item, index) in list"
            :key="index"
            @click="messageOpen(item)"
            :class="item.type == '2' ? 'fl' : ''"
          >
            <p class="title">{{ item.title }}</p>
            <p class="num">{{ item.num }}</p>
            <p class="percentage" :class="item.type == '2' ? 'red' : 'green'">
              {{ item.percentage }}
            </p>
          </div>
        </el-col>
        <el-col :span="17" class="tp_box">
          <div style="background: #fff">
            <h3>操作记录</h3>
            <el-table style="margin-top: 10px" :data="tableData">
              <el-table-column prop="date" label="时间"></el-table-column>
              <el-table-column prop="name" label="用户"></el-table-column>
              <el-table-column prop="ip" label="ip地址"></el-table-column>
              <el-table-column
                prop="content"
                label="操作内容"
              ></el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      queryParms: "",
      calendarVal: new Date(),
      list: [
        {
          title: "日点击",
          num: "1,163",
          percentage: "-21.2%",
          type: "1",
        },
        {
          title: "周点击",
          num: "9,233",
          percentage: "11.2%",
          type: "2",
        },
        {
          title: "平均停留时常",
          num: "21 min",
          type: "1",
          percentage: "-1.2%",
        },
        {
          title: "日活跃",
          num: "31.21",
          type: "2",
          percentage: "4.2%",
        },
      ],
      tableData: [
        {
          date: "2021-01-01",
          name: "张三",
          ip: "127.0.0.1",
          content: "退出登录",
        },
        {
          date: "2021-01-01",
          name: "张三",
          ip: "127.0.0.1",
          content: "退出登录",
        },
        {
          date: "2021-01-01",
          name: "张三",
          ip: "127.0.0.1",
          content: "退出登录",
        },
        {
          date: "2021-01-01",
          name: "张三",
          ip: "127.0.0.1",
          content: "退出登录",
        },
        {
          date: "2021-01-01",
          name: "张三",
          ip: "127.0.0.1",
          content: "退出登录",
        },
        {
          date: "2021-01-01",
          name: "张三",
          ip: "127.0.0.1",
          content: "退出登录",
        },
        {
          date: "2021-01-01",
          name: "张三",
          ip: "127.0.0.1",
          content: "退出登录",
        },
        {
          date: "2021-01-01",
          name: "张三",
          ip: "127.0.0.1",
          content: "退出登录",
        },
        {
          date: "2021-01-01",
          name: "张三",
          ip: "127.0.0.1",
          content: "退出登录",
        },
        {
          date: "2021-01-01",
          name: "张三",
          ip: "127.0.0.1",
          content: "退出登录",
        },
        {
          date: "2021-01-01",
          name: "张三",
          ip: "127.0.0.1",
          content: "退出登录",
        },
        {
          date: "2021-01-01",
          name: "张三",
          ip: "127.0.0.1",
          content: "退出登录",
        },
      ],
      texts: ["新增", "删除", "修改"],
    };
  },
  mounted() {
    this.pieEchartsInit();
    this.lineMainEchartsInit();
  },
  methods: {
    messageOpen(item) {
      this.$message({
        message: item.title + "为" + item.num + ",增长为：" + item.percentage,
        type: item.type == 1 ? "success" : "error",
      });
    },

    openMsg(item) {
      this.$message(item);
    },

    /**线图 */
    lineMainEchartsInit() {
      var echarts = (echarts = require("echarts"));
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("lineMain"));
      let option = {
        title: {
          text: "访问量",
          top: "5%",
          left: "2%",
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          boundaryGap: false,
          type: "category",
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260, 360, 240, 255, 555, 888],
            type: "line",
            smooth: true,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },

    /**饼图 */
    pieEchartsInit() {
      var echarts = (echarts = require("echarts"));
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("pieMain"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "浏览器统计",
          top: "5%",
          left: "5%",
        },
        // 设置图表的图例
        legend: {
          data: ["Chrome", "FireFox", "Edge", "其他"],
          top: "15%",
          left: "center",
        },
        // 设置图表的数据
        series: [
          {
            radius: ["25%", "50%"],
            type: "pie",
            top: "15%",
            data: [
              { value: 123, name: "Chrome" },
              { value: 456, name: "FireFox" },
              { value: 789, name: "Edge" },
              { value: 789, name: "其他" },
            ],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>
<style lang="less" scoped>
.box {
  min-width: 1637px;
}
.tp_title {
  margin-top: 10px;
  margin-left: 10px;
  height: 50px;
  .inline-input {
    margin-top: 5px;
    width: 100%;
  }
  span {
    line-height: 50px;
    float: right;
    margin-right: 20px;
    font-size: 14px;
  }
}

.bm_txt {
  padding: 5px;
  text-align: center;
}
.bm_txt:hover {
  color: #409eff;
  cursor: pointer;
}
.content_box {
  width: 100%;
  background-color: #f8f7fc;
  h3 {
    padding: 20px 0;
    margin-left: 20px;
  }

  .tp_box {
    margin-left: 20px;
    margin-bottom: 20px;

    .content_bx {
      width: 49%;
      height: 150px;
      float: left;
      margin-top: 5px;
      background: #fff;
      user-select: none;
      cursor: pointer;

      .title {
        margin-left: 20px;
        margin-top: 20px;
        color: #333;
        font-size: 14px;
      }

      .num {
        text-align: center;
        padding-top: 20px;
        font-size: 25px;
        font-weight: bold;
      }

      .percentage {
        float: right;
        margin-top: 20px;
        margin-right: 20px;
        font-size: 14px;
      }

      .green {
        color: green;
      }

      .red {
        color: red;
      }
    }

    .fl {
      margin-left: 1%;
    }
  }

  .tp_box_bc {
    margin-left: 20px;
    margin-bottom: 20px;
    background-color: #fff;
  }
}

/deep/ .el-calendar-table .el-calendar-day {
  width: 30px;
  height: 35px;
}

.cu-p {
  cursor: pointer;
}
</style>
