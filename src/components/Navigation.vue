<template>
  <nav id="navbar">
    <ul>
      <a href="/">Home</a>
      <a href="/hello">Hello</a>
      <nuxt-link to="/about">About</nuxt-link>
    </ul>
  </nav>
</template>

<style>
#navbar > ul {
  list-style-type: none;
  display: inline;
}

a {
  display: block;
  background-color: #dddddd;
}
</style>