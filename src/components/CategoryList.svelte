<script>
  import {onMount, getContext} from 'svelte'
  const woodlands = getContext("Woodlands");

  let categoryList;
  onMount(async () => {
    categoryList = await woodlands.getCategories()
  })
</script>

<h3 class="uk-heading-divider">
  Category List </h3>
<div class="uk-table uk-table-divider">
  <table class="uk-table">
    <thead>
      <th>
        Title
      </th>
    </thead>
    <tbody class="uk-text-left">
      {#if categoryList}
        {#each categoryList as category}
          <tr>
            <td>{category.title}</td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>
