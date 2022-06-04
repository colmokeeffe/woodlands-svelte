<script>
  import {mainBar, navBar, subTitle, title} from "../stores"
  import Chart from 'svelte-frappe-charts';
  import {getContext, onMount} from "svelte";
  import UserList from "../components/UserList.svelte";
  import CategoryList from "../components/CategoryList.svelte";
  import woodsatnight from "/src/assets/woodsatnight.png";
  import woodlogo from "/src/assets/woodlogo.jpg";
  import Report from "../components/Report.svelte";


  const woodlands = getContext("Woodlands");

  title.set("[WOODLANDS]");
  subTitle.set("Explore.Wander.Discover");
  navBar.set({
    bar: mainBar
  });

  let categories = [];


  let woodsData = {
    labels: [],
    datasets: [
      {
        values: []
      }
    ]
  }

  let userData = {
    labels: [],
    datasets: [
      {
        values: []
      }
    ]
  }
  async function refreshCharts() {
    let woodList = await woodlands.getWoods();


    categories.forEach((category, i) => {
      let total = woodList.filter(wood => wood.category._id === category._id).reduce((a, b) => ({title: a.title + b.title}));
      woodsData.datasets[0].values[i] = total.title;
    });

    let users = new Map();
    woodList.forEach(wood => {users.set(wood.user._id, wood.user)})
    let i = 0;
    userData.labels = [];
    for (const [id, user] of users.entries()) {
      userData.labels.push(`${user.email}`);
      let sumCreated = woodList.filter(wood => wood.user._id == id).reduce((a, b) => ({title: a.title + b.title}));
      userData.datasets[0].values[i] = sumCreated.title;
      i++;
    }
  }


  onMount(async () => {
    categories = await woodlands.getCategories();
    let woodList = await woodlands.getWoods();
    woodsData.labels = [];
    categories.forEach(category => {
      woodsData.labels.push(`${category.title}`)
    })
    await refreshCharts();
  });

  onMount(async () => {

  });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
  <div class="uk-width-1-2@m ">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge uk-margin">
      <h3> Woods by Category </h3>
      <Chart data={woodsData} type="bar"/>
    </div>
  </div>
  <div class="uk-width-1-2@m ">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge uk-margin">
      <h3> Woods by User </h3>
      <Chart data={userData} type="donut"/>
    </div>
  </div>
  <div class="uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
      <img width="800" src="{woodsatnight}" alt="woods">
    </div>
    <div class="uk-width-1-2@m">
      <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
        <Report/>
        <UserList/>
      </div>
    </div>
  </div>
</div>


<h3 class="ui horizontal divider header">
  Contact
</h3>
<h4 class="ui center aligned header">Visit us at woodlands.com for more information<br> or <br>Contact woodlands@gmail.com</h4>

<div class="uk-flex-middle uk-text-center" uk-grid>
  <div class="uk-width 1@m ">
    <img width="200" src="{woodlogo}" alt="logo">
  </div>
</div>