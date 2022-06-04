<script lang="ts">
    import { onMount, getContext } from "svelte";
    const woodlands = getContext("Woodlands");
    let categoryList=[];
    let title = "";
    let message =""
    onMount(async () => {
        categoryList = await woodlands.getCategories()
    })

    onMount(async () => {
        console.log("in add category form");
    });

    async function addCategory() {
        const success = await woodlands.addCategory(title)
        console.log(success);
        if (success) {
            message = `Addition of the Category ${title}, is completed`
        } else {
            message = "Addition of a new Category not completed - some error occurred"
        }
    }
</script>
<h3 class="uk-heading-divider">Create a New Category </h3>

<form on:submit|preventDefault={addCategory} class="uk-form-stacked uk-text-left">
    <div class="ui inverted large segment">
        <div class="uk-width-1@m">
            <div class="uk-margin">
                <div class="uk-form-controls">
                    <input bind:value={title} class="uk-input" id="form-stacked-text" type="text" name="category title" placeholder="Category Title">
                </div>
            </div>
            <div class="uk-margin">
                <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Create</button>
            </div>
            {#if message}
                <div class="uk-text-left uk-text-small">
                    {message}
                </div>
            {/if}
        </div>
    </div>
</form>