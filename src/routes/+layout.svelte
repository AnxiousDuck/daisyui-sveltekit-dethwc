<script>

import "../app.css"
import Footer from "../components/footer.svelte"
</script>

<div class="navbar absolute text-black">
  <div class="flex-1">
    <a class="btn btn-ghost text-black normal-case text-xl">Vaiehi Martin</a>
  </div>

  <div class="dropdown drowpdown-end">

      <label tabindex="0" class="btn btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>

      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 drowpdown-end">
        <li><a>Portfolio</a></li>
        <li><a>Contact Me</a></li>
      </ul>
      
    </div>
</div>
<slot />
<Footer />

