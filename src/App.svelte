<script>
  import {setContext} from "svelte";
  import {Woodlands} from "./services/woodlands";
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Categories from "./pages/Categories.svelte";
  import Woods from "./pages/Woods.svelte";
  import Create from "./pages/Create.svelte";
  import Analysis from "./pages/Analysis.svelte";
  import Map from "./pages/Map.svelte"
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";
  import Settings from "./pages/Settings.svelte";
  import Edit from "./pages/Edit.svelte";
  import Admin from "./pages/Admin.svelte";
  import Reviews from "./pages/Reviews.svelte";

  setContext("Woodlands", new Woodlands("https://mica-typhoon-horn.glitch.me"));
  //setContext("Woodlands", new Woodlands("http://localhost:4000"));
  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/categories": Categories,
    "/woods": Woods,
    "/create": Create,
    "/map": Map,
    "/analysis": Analysis,
    "/logout": Main,
    "/settings": Settings,
    "/admin": Admin,
    "/reviews": Reviews,
    "/edit": Edit
  }
</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes}/>
</div>
