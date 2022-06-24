<!-- /* Log Viewer component */ -->
<template>
    <div :id="object_name + '_log_viewer'" class="screen-area">
        <h1>{{ object_name }}</h1>
        <ol>
            <log-object
                v-for="log_object in logs"
                v-bind:log_object="log_object"
                v-bind:key="log_object.id">
            </log-object>
        </ol>
    </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from 'vue';
import LogObject from './LogObject.vue';
import jQuery from 'jquery';
import type ILogObject from './ILogObject';
export default defineComponent({
    name: 'log_viewer',
    components: {
        LogObject,
    },
    props: {
      logs: Array as PropType< ILogObject[]>,
      object_name: String,
    },
    watch: {
        logs: {
            handler() {
                setTimeout(() => {
                    jQuery( "#" + this.object_name + "_log_viewer" ).animate(
                        { scrollTop: jQuery( "#" + this.object_name + "_log_viewer" ).prop( "scrollHeight" )},
                        250 );
                }, 100 );    
            }}}    
});
</script>

<style scoped>
.screen-area {
  background: black;
  color: white;
  border: solid 0.1px;
  height: 700px;
  overflow: auto;
  z-index: 10;
  text-align: left;
  padding: 3px;
}
</style>
