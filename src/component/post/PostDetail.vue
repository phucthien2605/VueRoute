<template>
  <div>
    <h1>Post Detail</h1>
    <h3>ID Post : {{ id }}</h3>
    <hr />
    <button class="btn btn-info" @click="getID()">Show data</button>
    <div>
      <h5>Title: {{ title }}</h5>
      <h5>Content: {{ content }}</h5>
      <h5>Author: {{ author }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      posts: [
        {
          id: 1,
          title: "thien",
          content: "thien dep trai",
          author: "thien",
        },
        {
          id: 2,
          title: "intern",
          content: "thien dep trai ds",
          author: "khong phai thien",
        },
        {
          id: 3,
          title: "in",
          content: "thien dep trai vc",
          author: "thien this",
        },
        {
          id: 4,
          title: "ccvn",
          content: "thien dep trai nhat",
          author: "thien that",
        },
      ],
      title: '',
      content: '',
      author: ''
    }
  },
  methods: {
    filterPost: function () {
      return this.posts.filter(function (post) {
        return post.id.indexOf(this.ids) >= 0;
      });
    },
    getID(){
      var el = this.id -1;
      this.title = this.posts[el].title;
      this.content = this.posts[el].content;
      this.author = this.posts[el].author;
    }
  },
  beforeRouteEnter(to, from, next) {
    if (true) {
      next();
    } else {
      next(false);
    }
  },
};
</script>

<style>
</style>