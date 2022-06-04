<script>
  import woodlogo from "/src/assets/woodlogo.jpg"
  import {title, subTitle, user} from "../stores.js"
</script>

<div class="uk-width-1-2@m  uk-card uk-card-default uk-padding-small uk-visible@m">
  <div class="uk-grid">
    <div class="uk-width-1-3@m">
      <a href="/"> <img src="{woodlogo}" width="150" alt="logo"/> </a>
    </div>
    <div class="uk-width-expand@m uk-text-left">
      <div class="title">
        {$title}
      </div>
      <div class="uk-text-muted uk-text-medium">
        {$subTitle}
      </div>
    </div>
    <div class="uk-card uk-card-small uk-text-center uk-padding-remove">
      <a target="_blank" href="https://github.com/colmokeeffe/woodlands-svelte.git">
        <div>
          <i class='fas fa-code-branch fa-4x' style="color:rgb(0, 0, 0)" title="Source repo" pos="bottom" uk-tooltip></i>
        </div>
        <div class="uk-width-expand@m uk-text-left">
          <div class="uk-text-muted uk-text-center" style="font-size:xx-small">{$user.email} </div>
        </div>
      </a>
    </div>
  </div>
</div>
