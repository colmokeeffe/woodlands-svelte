<script>
  import WoodList from "../components/WoodList.svelte";
  import {navBar, mainBar, subTitle, title} from "../stores"
  import woodlogo from "/src/assets/woodlogo.jpg";


  title.set("[WOODLANDS]");
  subTitle.set("Explore.Wander.Discover");
  navBar.set({
    bar: mainBar
  });

</script>

<div class="uk-text-center" uk-grid>
  <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-4xlarge ">
    <WoodList/>
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

