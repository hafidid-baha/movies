<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-Transparent">
      <router-link class="navbar-brand d-inline-block" to="/">Movies</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
            <router-link class="nav-link d-inline-block" to="/">Home</router-link>
            <router-link class="nav-link d-inline-block" to="/series">Tv Series</router-link>
            <router-link class="nav-link d-inline-block" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>
<script>
export default {
    name:'name'
}
</script>