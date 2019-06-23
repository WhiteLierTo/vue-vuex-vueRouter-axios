<template>
  <div>
    <!-- <Header/> -->
    <!-- <Main/> -->
    <ul>
      <li v-for="(item,index) in goodsList" :key="index">{{item}}</li>
    </ul>
    <A :reg="reg" @patch="regHandleClick">
      <h1>我要加的人</h1>
    </A>
  </div>
</template>

<script>
import Header from "@/components/header/header";
import Main from "@/components/main/main";
import { getRoleList } from "../../model/home/home";
import A from "./a";

export default {
  components: {
    Header,
    Main,
    A
  },
  data() {
    return {
      reg: 1
    };
  },
  computed: {
    goodsList() {
      return this.$store.state.home.goodsList;
    }
  },
  methods: {
    regHandleClick() {
      console.log("接收");
      this.reg++;
    }
  },
  mounted() {
    getRoleList();
  }
};
</script>
