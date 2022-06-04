<script>
  import {title, subTitle, navBar, welcomeBar} from "../stores"
  import reveal from "/src/assets/reveal.jpg";
  import woodlogo from "/src/assets/woodlogo.jpg";
  import {getContext} from "svelte";
  const woodlands = getContext("Woodlands");

  title.set("[WOODLANDS]");
  subTitle.set("Explore.Wander.Discover");

  navBar.set({
    bar: welcomeBar
  });
  woodlands.logout();

</script>

<div class="uk-text-center" uk-grid>
  <div class="uk-width-1-2@m">
    <img width="800" src="{reveal}" alt="logo">
  </div>
  <div class="uk-width-1-2@m ">
    <div class="ui inverted large segment">
      <h1 class="ui inverted centered header">
        [WOODLANDS]
        <div class="sub header">Explore.Wander.Discover</div>
      </h1>
    </div>
    <div class="ui inverted large segment">
      <h2 class="ui inverted centered header">
        EXPLORE
        <div class="sub header">The Woodlands of Ireland</div>
      </h2>
    </div>

    <div class="ui inverted large segment">
      <h2 class="ui centered inverted header">
        WANDER
        <div class="sub header">Into different categories of Woods</div>
      </h2>
    </div>

    <div class="ui inverted large segment">
      <h2 class="ui centered inverted header">
        DISCOVER
        <div class="sub header">What lies inside each Wood</div>
      </h2>
    </div>
  </div>
</div>

<h3 class="ui horizontal divider header">
  Contact
</h3>
<h4 class="ui center aligned header">Visit us at woodlands.com for more information<br> or <br>Contact woodlands@gmail.com</h4>

<div class="uk-flex-middle uk-text-center" uk-grid>
  <div class="uk-width 1@m ">
    <img width="200" src="{woodlogo}" alt="logo">
  </div>
</div>