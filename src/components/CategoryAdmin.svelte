<script>
    import {getContext, onMount} from 'svelte'

    const woodlands = getContext("Woodlands");
    let categoryList = [];
    let id = "";
    let errorMessage = "";
    let category = "";


    onMount(async () => {
        categoryList = await woodlands.getCategories();
    });


    async function deleteHandler(id) {
        const success
            = await woodlands.deleteCategory(id)
        if (success) {
            categoryList = await woodlands.getCategories();
        } else {
            errorMessage =  "error occurred";
        }
    }

</script>

<div class="uk-margin uk-width-3xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <table class="uk-table uk-table-hover uk-table-divider">
        <caption>
            Categories:
        </caption>
        <thead>
        <th>
            Title
        </th>
        <th></th>
        </thead>
        <tbody class="uk-text-left">
        {#each categoryList as category}
            <tr>
                <td>
                    {category.title}
                </td>
                <td>
                    <button on:click={deleteHandler(category._id)} class="fas fa-trash-alt" style="color:red" title="delete"></button>
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>