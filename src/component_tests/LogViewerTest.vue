<!-- Log Viewer component test -->
<template>
  <!-- the v-html xlates raw html -->
  <log-viewer v-bind:object_name="test_object_name" v-bind:logs="logs"></log-viewer>
  <button @click="startTest">Start Test</button>
  <button @click="clearLog">Clear Log</button>
  <input v-model="monitored_object_id" />
</template>

<script lang="ts">
import { defineComponent          } from "vue";
import   LogViewer                  from "log-vuer";
import { LogObjectContainerSource } from "log-object-processor";
import { OriginalConfig } from "./OriginalConfig";
// import fs from 'vite-plugin-fs/browser';
import jQuery from 'jquery';
export default defineComponent({
    name: "LogViewerTest",
    components: {
        LogViewer
    },
    data() {
        return {
            log_count: 0,
            test_object_name: "Log Vuer",
            logObjectContainerSource: new LogObjectContainerSource( new OriginalConfig()),
            read_interval: 0,
            monitored_object_id: "MessageManager_1595",
            logs: [{ id: "1", timestamp: 100, message: "ready.", method: "No Source." }]}; },
    methods: {
        startTest() {
            const config = new OriginalConfig();
            setInterval( () => {
                if ( config.type == "url" ) {
                    this.logObjectContainerSource.refresh( this.monitored_object_id );
                } else {
                    this.logObjectContainerSource.refreshFromFile( "test.txt" );
                }
                this.logs = this.logObjectContainerSource.logObjectProcessor.getWrittenLogs();
                if ( this.log_count != this.logs.length ) {
                    jQuery( "#tester_1_log_viewer" ).animate(
                            { scrollTop: jQuery( "#tester_1_log_viewer" ).prop( "scrollHeight" ) * 2 },
                            150 );
                    this.log_count = this.logs.length; }}, 250 ); },
        async clearLog() {
            // fs.writeFile( "test.txt", '' );
            this.logObjectContainerSource.logObjectProcessor.clearLogs();
            this.logs = []; }}
});
</script>

<style scoped></style>
