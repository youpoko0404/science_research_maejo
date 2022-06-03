<template>
  <div>Login Success</div>
</template>


<script>
import HttpRequest from '../../HttpRequest/httpRequest'
const httpRequest = new HttpRequest()
export default {
  data: () => ({}),
  async created() {
    httpRequest.get("api/user").then((response) => {
      console.log(response);
    });
  },
  props: {},
  methods: {},
};
</script>


