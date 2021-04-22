<template>
  <div class="spec-navigation">
    <div class="navigation-group">
      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="pink"
        title="login"
        @click="goAuth"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-door-open"
          viewBox="0 0 16 16"
        >
          <path
            d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"
          />
          <path
            d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"
          />
        </svg>
      </v-btn>
      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="primary"
        title="posts"
        @click="goPosts"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-file-earmark-post"
          viewBox="0 0 16 16"
        >
          <path
            d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"
          />
          <path
            d="M4 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-7zm0-3a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </v-btn>
    </div>
    <!-- <div class="input-group">
      <v-text-field
        label="Search"
        v-if="search"
        v-model="textFilter"
        @input="filterPosts(textFilter)"
      ></v-text-field>
    </div> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      textFilter: "",
      search: false,
    };
  },
  methods: {
    ...mapActions(["set_filter_text"]),
    goPosts() {
      if (this.$route.name === "PostsPage") {
        return;
      } else {
        this.$router.push({ name: "PostsPage" });
        this.search = true;
      }
    },
    goAuth() {
      if (this.$route.name == "MainPage") {
        return;
      } else {
        this.$router.push({ name: "MainPage" });
        this.search = false;
        localStorage.clear();
      }
    },
    filterPosts(text) {
      this.set_filter_text(text);
    },
  },
  created() {
    if (this.$route.name === "PostsPage") {
      this.search = true;
    }
  },
};
</script>

<style lang="scss">
.spec-navigation {
  width: 100%;
  display: flex;
  align-items: center;
}

// .input-group {
//   margin-left: 15px;
//   height: 35px;
// }
</style>