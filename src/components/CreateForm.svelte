<script lang="ts">

  import { onMount, getContext } from "svelte";
  import Coordinates from "./Coordinates.svelte";
  const woodlands = getContext("Woodlands");

  let title = "";
  let description = "";
  let latitude = 0;
  let longitude=0;
  let selectedCategory = 0;
  let categoryList=[];


let message =""
  onMount(async () => {
    categoryList = await woodlands.getCategories()
  })

  async function create() {
    const success = await woodlands.create(title, description, latitude, longitude,categoryList[selectedCategory])
    if (success) {
      message = `Thanks! You created the wood, ${title}`
    } else {
      message = "Oops, something went wrong!"
    }
  }


</script>

<h3 class="uk-heading-divider">Create a New Wood </h3>

<form on:submit|preventDefault={create} class="uk-form-stacked uk-text-left">
  <div class="ui inverted large segment">
    <div class="uk-width-1@m">
      <div class="uk-margin">
        <label class="uk-form-label-white" >Title of Woods</label>
        <div class="uk-form-controls">
          <input bind:value={title} class="uk-input" id="form-stacked-text" type="text" name="Title" placeholder="Woods Title">
        </div>
        <label class="uk-form-label-white" >Description of Woods</label>
        <div class="uk-form-controls">
          <input bind:value={description} class="uk-input" id="form-stacked-text" type="text" name="Description" placeholder="Description">
        </div>
        <div class="uk-text-center" uk-grid>
          <Coordinates bind:latitide={latitude} bind:longitude={longitude}/>
        <div class=" uk-width-1-1@m">
          <div class="uk-margin uk-text-left">
            <div class="uk-form-label-white">Select Category </div>
            <div class="uk-form-controls ">
              {#each categoryList as category, i}
                <label>
                  <input bind:group={selectedCategory} value={i} class="uk-radio" type="radio" name="category" />
                  {category.title}
                </label>
                <br>
              {/each}
            </div>
          </div>
    <div class=" uk-width-1-1@m">
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


