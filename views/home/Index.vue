<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name" style="font-size: 30px; font-weight: bold">Super Admin</p>
            <p class="access" style="font-size: 15px; color: #999">超级管理员</p>
          </div>
        </div>
        <br />
        <div class="login-info" style="font-size: 13px; color: #999">
          <p>上次登陆时间：<span>2022-07-26</span></p>
          <p>上次登陆地点：<span>广州</span></p>
        </div>
      </el-card>

      <el-card style="margin-top: 20px; height: 460px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
/* eslint-disable */
export default {
  name: "home",
  data() {
    return {
      userImg: require("../../src/assets/images/user.jpg"),
      tableData: [
        {
          name: "oppo",
          todayBuy: 100,
          MonthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "vivo",
          todayBuy: 100,
          MonthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "Apple",
          todayBuy: 100,
          MonthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "Mi",
          todayBuy: 100,
          MonthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "Galaxy",
          todayBuy: 100,
          MonthBuy: 300,
          totalBuy: 800,
        },
      ],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        MonthBuy: "本月购买",
        totalBuy: "总购买",
      },
    };
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 120%;
  height: 20px;
}
.user img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
}

.userinfo {
  float: right;
}
</style>
