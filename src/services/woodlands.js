import axios from "axios";
import {user} from "../stores";


export class Woodlands {
  categoryList = [];
  woodList = [];

  userList =[];
  baseUrl = "";


  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    if (localStorage.wood) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.wood);
    }
  }

  async getCategories() {
    try {
      const response = await axios.get(this.baseUrl + "/api/categories");
      this.categoryList = response.data;
      return this.categoryList;
    } catch (error) {
      return [];
    }
  }

  async getWoods() {
    try {
      const response = await axios.get(this.baseUrl + "/api/woods");
      this.woodList = response.data;
      return this.woodList;
    } catch (error) {
      return [];
    }
  }

  async deleteWood(id) {
    const response = await axios.delete(this.baseUrl + "/api/woods/" + id);
    console.log(response);
    console.log('passed');
    window.location.reload();
    return response.status === 200;
  } catch (error) {
    return false;
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token
        });
        localStorage.wood = JSON.stringify(response.data.token);
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      token: ""
    });
    this.woodList = [];
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.wood = null;
  }

  async create(title, description, latitude, longitude, category, categoryid) {
    try {
      const wood = {
        title: title,
        description: description,
        latitude:latitude,
        longitude:longitude,
      category: category,
        categoryid: categoryid
      };
      console.log(wood);
      const response = await axios.post(this.baseUrl + `/api/categories/${categoryid}/woods`, wood);
      return response.status == 201;
    } catch (error) {
      return false;
    }
  }

  async deleteUser(id) {
    try {
      const response = await axios.delete(`${this.baseUrl}/api/users/${id}`);
      console.log(response.data)
      const newUser = await response.data;
      user.set(newUser);
      return true;
    } catch (error) {
      return false;
    }
  }


  async getImages() {
    try {
      const response = await axios.get(this.baseUrl + "/api/images")
      this.imageList = await response.data;
      return this.imageList;
    } catch (error) {
      return [];
    }
  }

  async getImage(id) {
    try {
      const response = await axios.get(this.baseUrl + '/api/images/' + id);
      return response.data;
    } catch (error) {
      return null;
    }
  }

  async uploadImage(newImage) {
    const response = await axios.post(this.baseUrl + '/api/images', newImage);
    return response.data;
  }


  async deleteOneImage(wood_id, img_id) {
    const response = await axios.delete(this.baseUrl + '/api/wood/'+wood_id+'/images/' + img_id);
    return response.data;
  }

  async deleteCategory(id) {
    try {
      console.log("deleteCategory")
      const response = await axios.delete(`${this.baseUrl}/api/categories/${id}`);
      console.log(response.data)
      return true;
    } catch (error) {
      return false;
    }
  }

  async editWood(title, description, latitude, longitude, id ) {
    try {
      const wood = {
        title: title,
        description: description,
        latitude: latitude,
        longitude: longitude,
        _id: id
      };
      console.log(wood);
      const response = await axios.patch(`${this.baseUrl}/api/woods/${id}` ,wood);
      return response.status == 200;
    } catch (error) {
      return [];
    }
  };

  async updateSettings(firstName, lastName, email, password, identity,) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        _id: identity
      };
      console.log(userDetails);
      const response = await axios.post(this.baseUrl + `/api/users/${identity}`, userDetails);
      const newUser = await response.data;
      user.set(newUser);
      return true;
    } catch (error) {
      return false;
    }
  }


  async getUsers() {
    try {
      const response = await axios.get(this.baseUrl + "/api/users");
      this.userList = response.data;
      return this.userList;
    } catch (error) {
      return [];
    }
  }

  async addCategory(title) {
    try {
      const category = {
        title: title
      };
      console.log(category);
      const response = await axios.post(this.baseUrl + "/api/categories", category);
      console.log(response);
      return response.status == 201;
    } catch (error) {
      return false;
    }
  }

  async createReview(email,comment ){
    try {

      let timestamp = new Date().toISOString();
      console.log(email);
      console.log(comment);
      const review = {
        reviewer: email,
        comment: comment,
        date: timestamp
      };

      this.reviewList.push(review);
      const response = await axios.post(this.baseUrl + "/api/reviews", review);
      console.log(response);
      return response.status == 201;
    } catch (error) {
      return false;
    }
  }

  async getReviews() {
    try {
      const response = await axios.get(this.baseUrl + "/api/reviews")
      this.reviewList = response.data;
      return this.reviewList;
    } catch (error) {
      return [];
    }
  }


  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      const response = await axios.post(this.baseUrl + "/api/users", userDetails);
      const newUser = await response.data;
      user.set(newUser);
      return true;
    } catch (error) {
      return false;
    }
  }
}
