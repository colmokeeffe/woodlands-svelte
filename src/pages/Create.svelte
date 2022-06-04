<script>

  import {mainBar, navBar, subTitle, title} from "../stores"
  import CreateForm from "../components/CreateForm.svelte";
  import AddCategoryForm from "../components/AddCategoryForm.svelte";
  import woodlogo from "/src/assets/woodlogo.jpg";
  import {category} from "../stores"
  title.set("[WOODLANDS]");
  subTitle.set("Explore.Wander.Discover");
  navBar.set({
    bar: mainBar
  });

</script>
<div class="uk-flex-middle uk-text-center" uk-grid>
  <div class="uk-width-1-2@m">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <CreateForm />
    </div></div>

    <div class="uk-width-1-2@m">
      <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
        <AddCategoryForm/>
      </div>
    </div>
  </div>

<div class="uk-card uk-card-small uk-card-secondary uk-card-body">
  <h3 class="uk-card-title">Upload an Image:</h3>
  <form class="uk-form-horizontal" action="/uploadfile/{$category._id}" method="POST" enctype="multipart/form-data">
    <div class="uk-margin">
      <label class="uk-form-label" >Select Image</label>
      <div class="uk-form-controls">
        <input type="file" class="uk-input" name="imagefile" accept="image/png, image/jpeg">
      </div>
    </div>
    <p uk-margin>
      <input type="submit" value="Upload" class="uk-button uk-button-default">
    </p>
  </form>
</div>



<h3 class="ui horizontal divider header">Contact</h3>
<h4 class="ui center aligned header">Visit us at woodlands.com for more information<br> or <br>Contact woodlands@gmail.com</h4>
<div class="uk-flex-middle uk-text-center" uk-grid>
  <div class="uk-width 1@m ">
    <img width="200" src="{woodlogo}" alt="logo">
  </div>
</div>