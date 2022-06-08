<!-- Log Viewer component test -->
<template>
  <!-- the v-html xlates raw html -->
  <log-viewer
    v-bind:object_name="test_object_name"
    v-bind:logs="logs"></log-viewer>
  <button @click="startTest">Start Test</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import LogViewer from "./LogViewer.vue";
import { LogObjectContainerSource } from "../../src/LogObjectContainerSource";
import jQuery from 'jquery';
export default defineComponent({
    name: "LogViewerTest",
    components: {
        LogViewer
    },
    data() {
        return {
            log_count: 0,
            test_object_name: "tester_1",
            logObjectContainerSource: new LogObjectContainerSource(),
            logs: [{
                    id: "1",
                    timestamp: 100,
                    message: "test message 1",
                    method: "test",
            }, {
                    id: "2",
                    timestamp: 100,
                    message: "test message 2",
                    method: "test",
            }, {
                    id: "3",
                    timestamp: 100,
                    message: "test message 3",
                    method: "test",
            }],
        };
    },
    methods: {
        startTest() {
            setInterval( () => {
                // this.logObjectContainerSource.refresh( "MessageManager_1523" );
                // this.logObjectProcessor.processLogObjects();
                this.logObjectContainerSource.refreshFromFile( "test.txt" );
                this.logs = this.logObjectContainerSource.logObjectProcessor.getWrittenLogs();
                if ( this.log_count != this.logs.length ) {
                    jQuery( "#tester_1_log_viewer" ).animate(
                            { scrollTop: jQuery( "#tester_1_log_viewer" ).prop( "scrollHeight" ) * 2 },
                            150 );
                    this.log_count = this.logs.length;
                }
            }, 250 );
        },
    },
    mounted() {
        console.log( "mounted." );
        // this.logObjectContainer = new LogObjectContainer(),
        // this.logObjectProcessor = new LogObjectProcessor( this.logObjectContainer ),
        // this.logObjectContainerSource = new LogObjectContainerSource( this.logObjectProcessor ),
    }
});
</script>

<style scoped></style>
