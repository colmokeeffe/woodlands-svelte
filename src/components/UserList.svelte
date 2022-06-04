<script>
    import {onMount, getContext} from 'svelte'
    import { Woodlands } from "../services/woodlands";
    const woodlands = getContext("Woodlands");

    let userList = [];

    onMount(async () => {
        userList = await woodlands.getUsers();
    });
</script>

<h3 class="uk-heading-divider">
    Users </h3>
<div class="uk-table uk-table-divider">
    <table class="uk-table">
        <thead>
        <th>
            Name
        </th>
        <th>
            E-Mail
        </th>
        </thead>
        <tbody class="uk-text-left">
        {#each userList as user}
            <tr>
                <td>
                    {user.firstName} {user.lastName}
                </td>
                <td>
                    {user.email}
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>
