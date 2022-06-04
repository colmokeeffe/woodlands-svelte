<script lang="ts">
    import { getContext } from "svelte";
    const woodlands = getContext("Woodlands");
    import {user} from "../stores";
    let email = $user.email;
    let review = "";
    let errorMessage = "";


    async function submitReview() {
        const success = await woodlands.createReview(email, review);
        if (success) {
            console.log("Review submitted");
        } else {
            errorMessage = "Oops,, an error occurred!";
        }
    }

</script>
<h3 class="uk-heading-divider">Review Submission </h3>
<form on:submit|preventDefault={submitReview}>
    <div class="uk-margin uk-text-left">
        <label class="uk-form-label">Email</label>
        <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: mail"></span>
            <input bind:value={email} class="uk-input uk-form-large" type="text" name="email">
        </div>
        <label class="uk-form-label">Comment</label>
        <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: comment"></span>
            <input bind:value={review} class="uk-input uk-form-large" type="text" review="review">
        </div>

    </div>
    <div class="uk-margin">
        <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Submit Review</button>
    </div>
    {#if errorMessage}
        <div class="uk-text-left uk-text-small">
            {errorMessage}
        </div>
    {/if}
</form>
