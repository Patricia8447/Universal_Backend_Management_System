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
        <br>
        <div class="login-info" style="font-size: 13px; color: #999">
          <p>上次登陆时间：<span>2022-07-26</span></p>
          <p>上次登陆地点：<span>广州</span></p>
        </div>
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
