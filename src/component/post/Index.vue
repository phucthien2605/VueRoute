<template>
  <div>
    <br />
    <h2>List Post</h2>
    <br />
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Author</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in posts" v-bind:key="index">
            <th>{{ post.id }}</th>
            <td>{{ post.title }}</td>
            <td>{{ post.content }}</td>
            <td>{{ post.author }}</td>
            <td>
              <button class="btn btn-primary" @click="goDetails(index)">Details</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
  data() {
    return {
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
    }
  },
  methods: {
    goDetails(index) {
      this.$router.push('/posts/'+(index+1));
    },
  },
};
</script>

<style>
</style>