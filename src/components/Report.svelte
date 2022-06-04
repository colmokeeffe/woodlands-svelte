<script>
    import {getContext, onMount} from 'svelte'


    const woodlands = getContext("Woodlands");
    let woodList = [];
    let categoryList = [];
    let userList = [];
    let id = "";
    let wood = "";
    let woodCount = 0;
    let userCount = 0;
    let categoryCount = 0;


    onMount(async () => {
        woodList = await woodlands.getWoods();
        woodCount = woodList.length;
        categoryList = await woodlands.getCategories();
        categoryCount = categoryList.length;
        userList = await woodlands.getUsers();
        userCount = userList.length;
    });

</script>
<h3 class="uk-heading-divider">
    Site Metrics </h3>
    <div class="uk-grid-column-large uk-grid-row-large uk-text-left" uk-grid>
        <div>
            <i style="color:red">{userCount} users</i>
        </div>
        <div>
            <i style="color:red">{woodCount} woods</i>
        </div>
        <div>
            <i style="color:red">{categoryCount} categories</i>
        </div>
    </div>
