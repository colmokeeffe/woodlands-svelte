import {writable} from "svelte/store";

export const welcomeBar = [
  {
    title: "Sign Up",
    icon: "fas fa-user-cog fa-3x",
    colour: "color:rgb(63, 160, 155)",
    link: "/#/signup",
  },
  {
    title: "Log In",
    icon: "fas fa-user-edit fa-3x",
    colour: "color:green",
    link: "/#/login",
  },
];

export let mainBar = [
  {
    title: "Create",
    icon: "fas fa fa-map-pin fa-3x",
    colour: "color:rgb(153, 196, 74)",
    link: "/#/create",
  },
  {
    title: "Woods so far",
    icon: "fas fa-th-list fa-3x",
    colour: "color:rgb(63, 122, 139)",
    link: "/#/woods",
  },
  {
    title: "Wood Map",
    icon: "fas fa-map-marked-alt fa-3x",
    colour: "rgb(102, 153, 255)",
    link: "/#/Map",
  },
  {
    title: "Analysis",
    icon: "fas fa-chart-line fa-3x",
    colour: "color:rgb(149, 93, 176)",
    link: "/#/analysis",
  },
  {
    title: "Update",
    icon: "fas fa-clipboard-list fa-3x",
    colour: "color:rgb(63, 122, 139)",
    link: "/#/settings",
  },
  {
    title: "Reviews",
    icon: "fa fa-comments fa-3x",
    colour: "color:rgb(235, 229, 52)",
    link: "/#/reviews",
  },
  {
    title: "Logout",
    icon: "fas fa-sign-out-alt fa-3x",
    colour: "color:rgb(156, 70, 128)",
    link: "/#/logout",
  },

  /*{
    title: "Admin",
    icon: "fas fa-sign-out-alt fa-3x",
    colour: "color:rgb(156, 70, 128)",
    link: "/#/admin",
  },*/

];

/*export const adminBar = [{


  title: "Admin",
  icon: "fas fa-sign-out-alt fa-3x",
  colour: "color:rgb(156, 70, 128)",
  link: "/#/admin",
}];*/


export const navBar = writable({
  bar: [],
});
export const title = writable("");
export const subTitle = writable("");

export const adminBar = writable({
  email: "",
  token: "",
});

export const user = writable({
  email: "",
  token: "",
});

export const wood = writable({
  _id: "",
  title: "",
  description: "",
  latitude: "",
  longitude: "",
});
export const category = writable({
  email: "",
  token: "",
});