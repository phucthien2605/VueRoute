<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Trùmm</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          tag="li"
          class="nav-item"
          to="/"
          active-class="active"
          exact
          ><a class="nav-link">Home</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/posts" active-class="active"
          ><a class="nav-link">List Post</a>
        </router-link>
        <router-link
          tag="li"
          class="nav-item"
          to="/about"
          active-class="active"
          ><a class="nav-link">About</a>
        </router-link>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "page-header",
};
</script>

<style>
</style>