<script>
    import {mainBar, navBar, subTitle, title} from "../stores";
    import { getContext, onMount } from "svelte";
    import deer from "/src/assets/deer.jpg";
    import woodlogo from "/src/assets/woodlogo.jpg";
    const woodlands = getContext("Woodlands");
    import EditWood from "../components/EditWood.svelte";
    let woodList = [];
    title.set("[WOODLANDS]");
    subTitle.set("Explore.Wander.Discover");

    navBar.set({
        bar: mainBar
    });

    onMount(async () => {
        woodList = await woodlands.getWoods();
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
            <h3 class="uk-card-title uk-text-center">Edit<!--{#each woodList as wood}
                 {wood.title}
            {/each}--></h3>
            <EditWood/>
        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <img width="800" src="{deer}" alt="deer">
    </div>
</div>



<h3 class="ui horizontal divider header">Contact</h3>
<h4 class="ui center aligned header">Visit us at woodlands.com for more information<br> or <br>Contact woodlands@gmail.com</h4>
<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width 1@m ">
        <img width="200" src="{woodlogo}" alt="logo">
    </div>
</div>