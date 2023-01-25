<template>
  <ul class="menu">
    <li>
      <RouterLink to="/" class="test"
        >Home<svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0,0,256,256"
          width="48px"
          height="48px"
          fill-rule="nonzero"
        >
          <g
            class="current_location"
            fill="#000000"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
          >
            <g transform="scale(10.66667,10.66667)">
              <path
                d="M12,3.90625l-0.25,0.15625l-11.5,7l0.5,0.875l11.25,-6.84375l11.25,6.84375l0.5,-0.875l-3.75,-2.28125v-4.78125h-2v3.5625l-5.75,-3.5zM12,6.5l-10,6v11.5h20v-11.5zM9,13h6v9h-6z"
              ></path>
            </g>
          </g></svg
      ></RouterLink>
    </li>
    <li>
      <router-link to="/todos"
        >Todos<svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0,0,256,256"
          width="48px"
          height="48px"
          fill-rule="nonzero"
        >
          <g
            class="current_location"
            fill="#000000"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
          >
            <g transform="scale(10.66667,10.66667)">
              <path
                d="M12,0c-6.62891,0 -12,5.37109 -12,12c0,6.62891 5.37109,12 12,12c6.62891,0 12,-5.37109 12,-12c0,-6.62891 -5.37109,-12 -12,-12zM11,17.41406l-4.70703,-4.70703l1.41406,-1.41406l3.29297,3.29297l7.29297,-7.29297l1.41406,1.41406z"
              ></path>
            </g>
          </g></svg
      ></router-link>
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
.currentPath {
}
</style>
