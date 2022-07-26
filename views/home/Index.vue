<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">Super Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <br />
        <div class="login-info">
          <p>上次登陆时间：<span>2022-07-26</span></p>
          <p>上次登陆地点：<span>广州</span></p>
        </div>
      </el-card>

      <el-card style="margin-top: 20px">
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

    <el-col style="margin-top: 20px" :span="16">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: flex, padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail" style="float: right">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>

      <el-card style="height: 280px"></el-card>
      <div class="graph">
        <el-card style="height: 265px"></el-card>
        <el-card style="height: 265px"></el-card>
      </div>
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
      countData: [
        {
          name: "今日支付订单",
          value: 134,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1235,
          icon: "s-goods",
          color: "#5ad1ef",
        },
        {
          name: "本月支付订单",
          value: 218,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 310,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 239,
          icon: "s-goods",
          color: "#5ad1ef",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
// .home {
//   width: 120%;
//   height: 20px;
// }
// .user img {
//   width: 110px;
//   height: 110px;
//   border-radius: 50%;
// }

// .userinfo {
//   float: right;
// }
</style>
