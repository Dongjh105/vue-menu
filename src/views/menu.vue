<template>
  <el-row class="min_widhtCalc">
    <el-col :span="3">
      <el-menu
        router
        :default-active="active"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <div v-for="(item, index) in menus" :key="index">
          <el-menu-item :index="'.' + item.path" v-if="!item.children">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>

          <el-submenu :index="String(index)" v-else>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                :index="'.' + child.path"
                v-for="child in item.children"
                :key="child.path"
              >
                <i :class="item.icon"></i>
                {{ child.title }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </div>
      </el-menu>
    </el-col>
    <el-col :span="21" class="routerDom">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>
<script>
import router from "@/router/index";
export default {
  data() {
    return {
      menus: [] /**router定义的路由组件 */,
      active: "",
    };
  },
  created() {
    this.getCurrentMenu();
  },
  mounted() {
    this.menus = router.options.routes[0].children;
  },
  watch: {
    $route(to, from) {
      this.getCurrentMenu();
    },
  },
  methods: {
    getCurrentMenu() {
      // 获取当前页面 菜单刷新后能自动选中
      let currentUrl = window.location.href;
      let currentPage = currentUrl.split("/#/")[1];
      this.active = "./" + currentPage;
    },
  },
};
</script>
<style lang="less" scoped>
.min_widhtCalc {
  min-width: 1400px;
}

.el-menu-vertical-demo {
  height: 100vh;
}

.routerDom {
  height: 100vh;
  max-height: 100vh;
  // overflow: hidden;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 0, 0, 0);
}
</style>
