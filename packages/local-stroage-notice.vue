<!--EventBus-->
<template>
  <h1>{{ notice }}</h1>
</template>

<script>
export default {
  name: "local-stroage-notice.vue",
  props: {
    ws: String
  },
  data() {
    return {
      notice: "local_stroage"
    };
  },
  created() {
    // this.notice = localStorage.getItem("notice");
    this.initWSDisk();
  },
  mounted() {
    // this.notice = localStorage.getItem("notice");
  },
  methods: {
    getNotice() {
      // this.notice = localStorage.getItem("notice");
    },
    initWSDisk(){
      this.socket = new WebSocket(`ws://${this.ws}/v2/message_bus/event/${this.notice}`);
      this.socket.onopen = () => {
        this.initEventBUs()
      }
      this.socket.onclose = () => {
        console.log('close socket')
      }
      this.socket.onerror = (e) => {
        console.log('socket failure', e)
      }
      this.socket.onmessage = (event) => {
        if (event.data == "\r\n\u001b[?2004l\rlogout\r\n") {
          this.socket.close()
          if (this.term != "") this.term.dispose()
          window.removeEventListener('resize', this.onWindowResize)
          this.isVaild = false
        }
        console.log('11111\n', event)
      }
    },
    initEventBUs(){

    }
  }
}
</script>

<style scoped>

</style>