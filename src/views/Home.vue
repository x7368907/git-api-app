<template>
  <div class="container row ">
  <div class=" input-group mb-3 d-flex justify-content-center">
    <input type="text" v-model="searchUsername" placeholder="輸入用戶名" class="form-control" aria-label="Example text with button addon" aria-describedby="button-addon1">
    <button class="btn btn-primary" type="button" id="button-addon1" @click="searchRepositories">搜尋</button>
  </div>
  <h1>{{ searchUsername }} 的倉庫</h1>
  
 <table class="table">
<thead>
  <tr>
    <th scope="col">倉庫名</th>
    <th scope="col">連結</th>
  </tr>
</thead>
<tbody>
  <tr v-for="repo in repositories" :key="repo.id" class="table-success">
    <th scope="row">{{ repo.name }}</th>
    <th scope="row"> <button @click="navigateToRepository(repo.owner.login,repo.name)" type="button" class="btn btn-outline-primary">{{ repo.name }}</button>
    </th>
  </tr>
</tbody>

 </table>
<!-- 
  <ul>  -->
    <!-- <li v-for="repo in repositories" :key="repo.id">{{ repo.name }} -->
      <!-- <button   @click="navigateToRepository(repo.owner.login, repo.name)" type="button" class="btn btn-success">
          {{ repo.name }}
        </button> -->
   
    <!-- </li> -->
  <!-- </ul> -->

</div>
  </template>
  
  <script>
  import RepositoryPage from '../components/RepositoryPage.vue';
import gitService from'../../gitService.js';
import { Button } from 'ant-design-vue';
  const ButtonGroup = Button.Group;
  export default {
    name: 'Home',
    components:{
    RepositoryPage,
    AButton: Button,
      AButtonGroup: ButtonGroup,
  },
  data() {
    return {
      username: '',
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
  },
  navigateToRepository(username, repoName) {
      // 使用 this.$router.push 进行手动导航
      this.$router.push(`/repository/${username}/${repoName}`);
    }
  } 
  };
  </script>

<style lang="scss" scoped>
* { margin: 0;
   padding: 0;
   list-style: none;

  }
.row{
margin: 5rem 5rem;

}

h1{
  color:blue;
  text-align: center;
}

</style>