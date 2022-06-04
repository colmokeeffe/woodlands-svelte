<script>
    import {getContext, onMount} from 'svelte'
    import {Woodlands} from "../services/woodlands";
    const woodlands = getContext("Woodlands");
    let reviewList;

    onMount(async () => {
        reviewList = await woodlands.getReviews();
        console.log(reviewList);
    })

</script>


<h3 class="uk-heading-divider">Review Board</h3>
<div class="uk-table uk-table-divider uk-table-hover">
    <table class="uk-table uk-table-divider uk-table-hover">
        <thead>
        <th>
            Date
        </th>
        <th>
            Reviewer
        </th>
        </thead>
        <tbody class="uk-text-left uk-table-hover">
        {#if reviewList}
            {#each reviewList as review}
                <tr>
                    <td>{review.date}</td>
                    <td>{review.reviewer} : {review.comment}</td>
                </tr>
            {/each}
        {/if}
        </tbody>
    </table>
</div>