<script>
    import WoodList from "../components/WoodList.svelte";
    import {navBar, adminBar, subTitle, title, mainBar} from "../stores"
    import Report from "../components/Report.svelte";
    import UserAdmin from "../components/UserAdmin.svelte";
    import CategoryAdmin from "../components/CategoryAdmin.svelte";
    import woodlogo from "/src/assets/woodlogo.jpg";


    title.set("[WOODLANDS]");
    subTitle.set("Explore.Wander.Discover");
    navBar.set({
        bar: adminBar
    });
</script>

<div>
    <Report/>
</div>

<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
        <div class="uk-width-expand@m"><UserAdmin /></div>
    </div>
    <div class="uk-width-expand@m"><CategoryAdmin />></div>
</div>
<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width 1@m ">
        <img width="200" src="{woodlogo}" alt="logo">
    </div>
</div>