<script>
  import {title, subTitle, navBar, welcomeBar} from "../stores"
  import LoginForm from "../components/LoginForm.svelte"
  import deer from "/src/assets/deer.jpg";
  import woodlogo from "/src/assets/woodlogo.jpg";
  title.set("[WOODLANDS]");
  subTitle.set("Explore.Wander.Discover");

  navBar.set({
    bar: welcomeBar
  });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
  <div class="uk-width-1-2@m">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <h3 class="uk-card-title uk-text-center">Welcome back!</h3>
      <LoginForm />
    </div>
  </div>
  <div class="uk-width-1-2@m ">
    <img width="800" src="{deer}" alt="deer">
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