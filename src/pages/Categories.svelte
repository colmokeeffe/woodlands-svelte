<script>
  import UserList from "../components/UserList.svelte";
  import woodlogo from "/src/assets/woodlogo.jpg";
  import {navBar, mainBar, subTitle, title} from "../stores"
  import Report from "../components/Report.svelte";

  title.set("[WOODLANDS]");
  subTitle.set("All Current Candidates");
  navBar.set({
    bar: mainBar
  });
</script>

<div class="uk-text-center" uk-grid>
  <div class="uk-width-1-2@m">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <UserList/>
      <Report/>
    </div>
  </div>
</div>
<div class="uk-flex-middle uk-text-center" uk-grid>
  <div class="uk-width 1@m ">
    <img width="200" src="{woodlogo}" alt="logo">
  </div>
</div>