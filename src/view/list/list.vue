<template>
  <div>
    列表页
    <p>{{count}}</p>
    <p>{{fullName}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["updateCount"]),
    ...mapActions(["updateCountAsync"])
  },
  computed: {
    ...mapState(["count"]),
    /*count() {
      return this.$store.state.count;
    },*/
    /* fullName() {
      return this.$store.getters.fullName;
    }*/
    ...mapGetters(["fullName"])
  },
  mounted() {
    let i = 1;
    /*setInterval(() => {
      this.$store.commit("updateCount", i++);
    }, 1000);*/
    // 辅助函数转变
    setInterval(() => {
      this.updateCount({
        num: i++
      });
    }, 1000);

    /*this.updateCountAsync({
      num: 5,
      time: 2000
    });*/
    // 辅助函数转变
    /*this.$store.dispatch("updateCountAsync", {
      num: 5,
      time: 2000
    });*/
  }
};
</script>

