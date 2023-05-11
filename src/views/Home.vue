<template>
  <div>
  <input type="text" v-model="searchUsername" placeholder="輸入用戶名">
  <button @click="searchRepositories">搜尋</button>



  <h1>{{ searchUsername }} 的倉庫</h1>

  <ul>
    <li v-for="repo in repositories" :key="repo.id">{{ repo.name }}</li>
  </ul>

  <RepositoryPage :username="searchUsername"/>
</div>
  </template>
  
  <script>
  import RepositoryPage from '../components/RepositoryPage.vue';
import gitService from'../../gitService.js';
  export default {
    name: 'Home',
    components:{
    RepositoryPage
  },
  data() {
    return {
      repositories:[],
      searchUsername:''
    };
  },
  methods:{
    searchRepositories(){
      //清空搜尋結果
      this.repositories = [];
      gitService.getRepositories(this.searchUsername)
    .then(response => {
      this.repositories = response;
    })
    .catch(error => {
      console.error(error);
    });
  }  
  }
  };
  </script>