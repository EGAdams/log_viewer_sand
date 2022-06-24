

<template>
    <div id="log_app">
    <log-viewer-test-vue></log-viewer-test-vue>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogViewerTestVue from "./component_tests/LogViewerTest.vue";

export default defineComponent({
  name: "ServeDev",
  components: {
    LogViewerTestVue,
  },
  data() {
    return {
      test_object_name: "log-vuer-tester",
      logs: [],
    };
  },
});
</script>

