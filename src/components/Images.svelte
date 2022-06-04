<script>
    import {getContext, onMount} from 'svelte'
    const woodlands = getContext("Woodlands");
    let images = [];
    onMount(async () => {
        images = await woodlands.getImages();
    });

</script>


<div class="uk-container uk-padding-small">
</div>

