<script>
    import ReviewList from "../components/ReviewList.svelte";
    import ReviewForm from "../components/ReviewForm.svelte";
    import {navBar, mainBar, subTitle, title} from "../stores"
    import woodlogo from "/src/assets/woodlogo.jpg";


    title.set("[WOODLANDS]");
    subTitle.set("Explore.Wander.Discover");
    navBar.set({
        bar: mainBar
    });


</script>
<h3 class="uk-heading-divider">Page Under Construction</h3>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <ReviewForm/>
        </div>
    </div>


        <div class="uk-width-1-2@m">
            <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
                <ReviewList/>
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