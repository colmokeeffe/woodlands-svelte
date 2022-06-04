<script>
    import {getContext, onMount} from 'svelte'

    const woodlands = getContext("Woodlands");
    let userList = [];
    let id = "";
    let errorMessage = "";
    let user = "";


    onMount(async () => {
        userList = await woodlands.getUsers();
    });


    async function deleteHandler(id) {
        const success
            = await woodlands.deleteUser(id)
        if (success) {
            userList = await woodlands.getUsers();

        } else {
            errorMessage = "error";
        }
    }

</script>

<div class="uk-margin uk-width-3xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <table class="uk-table uk-table-hover uk-table-divider">
        <caption>
            List of Users
        </caption>
        <thead>
        <th>
            First name
        </th>
        <th>
            Last name
        </th>
        <th>
            email
        </th>
        <th></th>
        </thead>
        <tbody class="uk-text-left">
        {#each userList as user}
            <tr>
                <td>
                    {user.firstName}
                </td>
                <td>
                    {user.lastName}
                </td>
                <td>
                    {user.email}
                </td>
                <td>
                    <button on:click={deleteHandler(user._id)} class="fas fa-trash-alt" style="color:red" title="delete"></button>
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>