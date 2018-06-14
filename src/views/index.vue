<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
}

.layout-breadcrumb {
  padding: 10px 15px 0;
}

.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}

.layout-content-main {
  padding: 10px;
}

.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}

.layout-menu-left {
  background: #464c5b;
}

.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
</style>
<template>
    <div class="layout">
        <Row type="flex">
            <i-col span="5" class="layout-menu-left" style="background:white">
                <Menu theme="light" width="auto" @on-select="jumpToUploadView">
    
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            咨询发布
                        </template>
                        <Menu-item name="1-1">
                            发布产品
                        </Menu-item>
                        <Menu-item name="1-2">产品管理</Menu-item>
                        <Menu-item name="1-3">主题发布</Menu-item>
                        <Menu-item name="1-4">首页管理</Menu-item>
                         <Menu-item name="1-5">主题管理</Menu-item>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            订单管理
                        </template>
                        <Menu-item name="2-2">未完成订单</Menu-item>
                        <Menu-item name="2-1">完成订单</Menu-item>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            数据分析
                        </template>
                        <Menu-item name="3-1">客户统计</Menu-item>
                        <Menu-item name="3-2">点击统计</Menu-item>
                    </Submenu>
                    
                </Menu>
            </i-col>
            <i-col span="19">
    
                <div class="layout-content">
                    <router-view></router-view>
                </div>
    
            </i-col>
        </Row>
    </div>
</template>
<script>
import uploadView from "./upload";
import AV from "leancloud-storage";
export default {
  components: {
    uploadView
  },
  data() {
    return {};
  },
  created() {
    // this.getAllData();
    var currentUser = AV.User.current();
    if (!currentUser) {
      this.$router.push("/");
    }
  },
  methods: {
    getAllData() {
        let that = this
      let query = new AV.Query("Product");
      query
        .find()
        .then(function(todos) {
          todos.forEach(todo => {
              
            let item = that.replaceAll(JSON.stringify(todo));
            todo.set('detailContent',item.detailContent)
          });
          return AV.Object.saveAll(todos);
        })
        .then(
          function(todos) {
              console.log(JSON.stringify(todos[0]))
            console.log("更新成功");
          },
          function(error) {
            console.log(error);
          }
        );
    },
    replaceAll(item) {
      let reg = new RegExp("ac-qDUQr0Em.clouddn.com", "g");

      item = item.replace(reg, "lc-qduqr0em.cn-n1.lcfile.com");

      return JSON.parse(item);
    },
    jumpToUploadView(name) {
      // debugger
      if (name == "1-1")
        this.$router.push({
          path: "/upload",
          name: "upload",
          params: { productId: "new" }
        });
      if (name == "1-2") this.$router.push("/productManage");
      if (name == "1-3") this.$router.push("/theme");
      if (name == "1-4") this.$router.push("/mainScroll");
      if (name == "1-5") this.$router.push("/themeManage");
      if (name == "1-6")
        this.$router.push({
          path: "/news",
          name: "news",
          params: { productId: "new" }
        });
      if (name == "1-7") this.$router.push("/newsManage");
      if (name == "2-2") this.$router.push("/reserveList");
      if (name == "3-1") this.$router.push("/users");
      if (name == "3-2") this.$router.push("/productStatis");
      if (name == "4-1") this.$router.push("/main");
      if (name == "1-9") this.$router.push({ name: "newUpload" });
    }
  }
};
</script>