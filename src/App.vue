

<template>
    <div id="app">
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
      logs: [
        {
          id: "1",
          timestamp: 100,
          message: "test message 1",
          method: "test",
        },
        {
          id: "2",
          timestamp: 100,
          message: "test message 2",
          method: "test",
        },
      ],
    };
  },
});
</script>

