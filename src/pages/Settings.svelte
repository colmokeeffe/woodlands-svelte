<script lang="ts">
    import {mainBar, navBar, subTitle, title} from "../stores";
    import SettingsForm from "../components/SettingsForm.svelte";
    import illustrated from "/src/assets/illustrated.jpg";
    import woodlogo from "/src/assets/woodlogo.jpg";

    title.set("[WOODLANDS]");
    subTitle.set("Explore.Wander.Discover");

    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <h3 class="uk-card-title uk-text-center">Edit your Profile</h3>
            <SettingsForm />
        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <img width="800" src="{illustrated}" alt="illustrated">
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