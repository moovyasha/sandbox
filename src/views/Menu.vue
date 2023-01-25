<template>
  <ul class="menu">
    <li>
      <RouterLink to="/">Home<img src="@/images/main_inactive.png" /></RouterLink>
    </li>
    <li>
      <router-link to="/todos">Todos<img src="@/images/todo_inactive.png" /></router-link>
    </li>
  </ul>
</template>

<style>
.menu li {
  list-style-type: none;
  display: inline-table;
  border: 1px red solid;
  width: 68px;
  height: 68px;
  /* background: url('@/images/main_inactive.png') no-repeat 100% 100%; */
}
</style>
