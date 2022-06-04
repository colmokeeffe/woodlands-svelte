<script lang="ts">
    import { getContext, onMount } from "svelte";
    const woodlands = getContext("Woodlands");
    let woodList = [];
    let message = "";
    let categoryList=[];
    let _id="";

  onMount(async () => {
      woodList = await woodlands.getWoods();
  });
  onMount(async () => {
      categoryList = await woodlands.getCategories()
  })

    async function deleteWood(wood) {
        console.log(wood);
        const success = await woodlands.deleteWood(wood._id);
        if (success){
            console.log('dewooded');
        }
    }

    async function editWood(wood) {
        console.log(wood);
        const success = await woodlands.editWood(wood._id);
        if (success){
            console.log('edited');
        }
    }

</script>

<h3 class="uk-heading-divider">
  Wood List </h3>
<div class="uk-table uk-table-divider">
    <table class="uk-table">
        <div></div>
    <thead>
      <th>
        Title
      </th>
      <th>
        Description
      </th>
      <th>
        Latitude
      </th>
      <th>
        Longitude
      </th>
    </thead>
      <tbody class="uk-text-left">
      {#each woodList as wood}
          <tr>
          <td>
            {wood.title}
          </td>

          <td>
            {wood.description}
          </td>
          <td>
            {wood.latitude}
          </td>
          <td>
            {wood.longitude}
          </td>
              <td> <div class="uk-card uk-card-small uk-text-center uk-padding-remove">
                  <a href="/#/edit">
                      <div>
                  <icon class="fas fa-folder-open fa-2x" style="color:limegreen" title="Edit" > </icon>
                      </div>
                  </a>
              </div>
              </td>
              <td><icon on:click={() => deleteWood(wood)} class="fas fa-trash-alt fa-2x" style="color:rgb(220,7,55)" title="Delete"> </icon></td>
          </tr>
      {/each}
    </tbody>
  </table>
</div>

