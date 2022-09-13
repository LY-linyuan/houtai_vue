<template>
  <el-container style="min-height: 100%; ">
    <el-aside :width="sideWidth + 'px'" style="background-color: rgb(238, 241, 246); box-shadow: 2px 0 6px rgb(0 21 41 / 35%); height: 100%;">
      <el-menu :default-openeds="['1', '3']" style="min-height: 100vh; overflow-x: hidden"
               background-color="rgb(48, 65, 86)"
               text-color="#fff"
               active-text-color="#ffd04b"
               :collapse-transition="false"
               :collapse="isCollapse"
      >
        <div style="height: 60px; line-height: 60px; text-align: center">
          <img src="../assets/logo.png" alt="" style="width: 20px; position: relative; top: 5px; margin-right: 5px">
          <b style="color: white" v-show="LoginTextShow">后台管理系统</b>
        </div>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: left; font-size: 12px; border-bottom: 1px solid #ccc; line-height: 60px; display: flex">
        <div style="flex: 1; font-size: 20px">
          <span :class="collapseBtnClass" style="cursor: pointer" @click="collapse"></span>
        </div>
        <el-dropdown style="width: 70px; cursor: pointer">
          <span>王小虎</span> <i class="el-icon-arrow-down" style="margin-left: 5px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-main>

        <div style="margin-bottom: 10px">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
          </el-breadcrumb>

        </div>

        <div style="padding: 10px 0; text-align: left;">
            <el-input style="width: 200px;" placeholder="请输入名称" suffix-icon="el-icon-search" class="ml-5" v-model="username"></el-input>
<!--            <el-input style="width: 200px;" placeholder="请输入邮箱" suffix-icon="el-icon-message" class="ml-5"></el-input>-->
<!--            <el-input style="width: 200px;" placeholder="请输入地址" suffix-icon="el-icon-position" class="ml-5"></el-input>-->
          <el-button class="ml-5" type="primary" @click="load">搜索</el-button>
          <el-button class="ml-5" type="warning" @click="reset">重置</el-button>
        </div>

        <div style="padding: 10px 0; ">
          <el-button type="primary">新增 <i class="el-icon-circle-plus-outline" @click="handleAdd"></i></el-button>
            <el-popconfirm
                class="ml-5"
                confirm-button-text='好的'
                cancel-button-text='不用了'
                icon="el-icon-info"
                icon-color="red"
                title="您确定批量删除这些数据吗吗？"
                @confirm="delBatch"
            >
            <el-button type="danger" slot="reference">批量删除 <i class="el-icon-remove-outline"></i></el-button>
          </el-popconfirm>
          <el-button type="primary" class="ml-5">导入 <i class="el-icon-bottom"></i></el-button>
          <el-button type="primary">导出 <i class="el-icon-top"></i></el-button>
        </div>

        <el-table :data="tableData" border stripe :header-cell-class-name="headerBg" @selection-change="handleSelectionChange">
          <el-table-column
              type="selection"
              width="55">
          </el-table-column>
          <el-table-column prop="id" label="ID" width="80"></el-table-column>
          <el-table-column prop="username" label="用户名" width="140"></el-table-column>
          <el-table-column prop="nickname" label="昵称" width="120"></el-table-column>
          <el-table-column prop="email" label="邮箱"></el-table-column>
          <el-table-column prop="phone" label="电话"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="success" @click="handleEdit(scope.row)">编辑 <i class="el-icon-edit"></i></el-button>
                <el-popconfirm
                    class="ml-5"
                    confirm-button-text='好的'
                    cancel-button-text='不用了'
                    icon="el-icon-info"
                    icon-color="red"
                    title="您确定删除吗？"
                    @confirm="handleDel(scope.row.id)"
                >
                  <el-button type="danger" slot="reference">删除 <i class="el-icon-remove-outline"></i></el-button>
                </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>

        <div style="padding: 10px 0">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[2, 5, 10, 20]"
                :page-size="2"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>

        <el-dialog title="用户信息" :visible.sync="dialogFormVisible" width="30%">
            <el-form label-width="80px" size="small">
              <el-form-item label="用户名">
                <el-input v-model="form.username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="form.password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="昵称">
                <el-input v-model="form.nickname" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="form.email" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="电话">
                <el-input v-model="form.phone" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="地址">
                <el-input v-model="form.address" autocomplete="off"></el-input>
              </el-form-item>

            </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="save">确 定</el-button>
          </div>
        </el-dialog>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import request from "@/utils/request";

export default {
  name: 'HomeView',
  data() {
    return {
      tableData: [],
      total: 0,
      pageNum: 1,
      pageSize: 2,
      username: "",
      dialogFormVisible: false,
      multipleSelection: [],
      form: {
        username: "",
        password: "",
        nickname: "",
        email: "",
        phone: "",
        address: ""
      },
      collapseBtnClass: 'el-icon-s-fold',
      isCollapse: false,
      sideWidth: 200,
      LoginTextShow: true,
      headerBg: 'headerBg'
    }
  },
  created() {
    // 请求恩也查询数据
    fetch("http://localhost:8081/user/page?pageNum=" + this.pageNum + "&pageSize=" + this.pageSize).then(res => res.json()).then(res => {
      console.log(res);
      this.tableData = res.data;
      this.total = res.total;
    });
  },
  methods: {
    collapse() {  // 点击收缩按钮触发
      this.isCollapse = !this.isCollapse
      if (this.isCollapse) {
        this.sideWidth = 64
        this.collapseBtnClass = 'el-icon-s-unfold'
        this.LoginTextShow = false
      } else {
        this.sideWidth = 200
        this.collapseBtnClass = 'el-icon-s-fold'
        this.LoginTextShow = true
      }
    },

    load() {
      request.get("/user/page", {
              params: {
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                username: this.username
              }
          }

      ).then(res => {
        console.log(res);
        this.tableData = res.data;
        this.total = res.total;
      })

      /*fetch("http://localhost:8081/user/page?pageNum=" + this.pageNum + "&pageSize=" + this.pageSize + "&username=" + this.username).then(res => res.json()).then(res => {
        console.log(res);
        this.tableData = res.data;
        this.total = res.total;
      });*/
    },

    reset() {
      this.username = "";
      this.load();
    },

    save() {
      request.post("http://localhost:8081/user/saveUser", this.form).then(res => {
        if (res) {
          this.$message.success("保存成功");
          this.dialogFormVisible = false;
          this.load();
        } else {
          this.$message.error("保存失败");
        }
      })
    },

    handleEdit(row) {
      this.form = row;
      this.dialogFormVisible = true;
    },

    handleAdd() {
        this.dialogFormVisible = true;
        this.form = {};
    },

    handleDel(id) {
        request.delete("/user/deleteUserById/" + id).then(res => {
          if (res) {
            this.$message.success("删除成功");
            this.load();
          } else {
            this.$message.error("删除失败");
          }
        })
    },

    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
    },

    delBatch() {
      let ids = this.multipleSelection.map(v => v.id)
      request.post("/user/deleteBatch/" + ids).then(res => {
        if (res) {
          this.$message.success("批量删除成功");
          this.load();
        } else {
          this.$message.error("批量删除失败");
        }
      })
    },

    handleSizeChange(pageSize) {
      console.log(pageSize);
      this.pageSize = pageSize;
      this.load();
    },

    handleCurrentChange(pageNum) {
      console.log(pageNum);
      this.pageNum = pageNum;
      this.load();
    }
  }
};
</script>
<style>
.headerBg {
  background: #ccc!important;
}
</style>
