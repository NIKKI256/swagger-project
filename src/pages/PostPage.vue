<template>
  <div>
    <h1>POST PAGE</h1>
    <Loader v-if="loaderVis" />
    <div v-else class="container">
      <h1>{{ post.title }}</h1>
      <h2>{{ post.fullText }}</h2>
    </div>
  </div>
</template>

<script>
import Loader from "../components/Loader";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      loaderVis: true,
      post: {},
    };
  },
  components: {
    Loader,
  },
  methods: {
    ...mapActions(["getPostById"]),
  },
  computed: {
    ...mapGetters(["GET_CURRENT_POST"]),
  },
  async created() {
    const id = this.$route.params.id;
    await this.getPostById(id);
    this.post = this.GET_CURRENT_POST;
    this.loaderVis = false;
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 15px;
  padding: 10px;
  border-radius: 10px;
  background-color: #bbdefb;
}
</style>