<script lang="ts">
    import {getContext, onMount} from "svelte";
    import {wood} from "../stores";
    let title = "";
    let description = "";
    let latitude = 0;
    let longitude = 0;
    let message = "";

    let woodList =[];
    const woodlands = getContext("Woodlands");

    onMount(async () => {
        woodList = await woodlands.getWoods();
    });

    async function saveWood() {
        let success = await woodlands.editWood(title, description, latitude, longitude, $wood._id)
        if (success) {
            message = `Wood ${title} updated`;
        } else {
            message = "Error, Wood not edited";
        }
    }
</script>

<form on:submit|preventDefault={saveWood} class="uk-form-stacked uk-text-left">
    <div class="uk-grid uk-grid-stack">
        <div class="uk-width-1-1">
            <div class="uk-margin">
                <div class="uk-inline uk-width-1-1">
                    <label class="uk-form-label">Title</label>
                    <span class="uk-form-icon" uk-icon="icon: empty"></span>
                    <input bind:value={title} class="uk-input" id="form-stacked-text" type="string" name="title" placeholder="Title">
                </div>
                <div class="uk-inline uk-width-1-1">
                    <label class="uk-form-label">Description</label>
                    <span class="uk-form-icon" uk-icon="icon: empty"></span>
                    <input bind:value={description} class="uk-input" id="form-stacked-text" type="string" name="description" placeholder="Description">
                </div>
                <div class="uk-inline uk-width-1-1">
                    <label class="uk-form-label">Latitude</label>
                    <input bind:value={latitude} class="uk-input" id="form-stacked-text" type="decimal" name="latitude" placeholder="0.0">
                </div>
                <div class="uk-inline uk-width-1-1">
                    <label class="uk-form-label">Longitude</label>
                    <input bind:value={longitude} class="uk-input" id="form-stacked-text" type="decimal" name="longitude" placeholder="0.0">
                </div>
                <div class="uk-inline uk-width-1-1">
                    <label class="uk-form-label">Click to Edit</label>
                    <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Edit Wood</button>
                </div>
            </div>
        </div>
    </div>
    {#if message}
        <div class="uk-text-left uk-text-small">
            {message}
        </div>
    {/if}
</form>