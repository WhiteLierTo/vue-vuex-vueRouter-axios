<template>
  <div>
    <p>{{reg}}</p>
    <button @click="$emit('patch')">发送</button>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["reg"],
  data() {
    return {};
  }
};
</script>
