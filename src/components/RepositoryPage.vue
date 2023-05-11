<template>
    <div>
        <h1>倉庫詳細信息</h1>
        <h3>用戶名:{{ $route.params.username }}</h3>
        <h3>倉庫名:{{ $route.params.repoName }}</h3>
        <div v-if="RepositoryDetails">
            <p>倉庫描述:{{ RepositoryDetails.description }}</p>
            <p>倉庫語言:{{ RepositoryDetails.language }}</p>
        </div>
    </div>
</template>

<script>
import gitService from '../../gitService.js';
export default {
    data() {
        return {
            RepositoryDetails:null
        }
    },
    mounted() {
        const username = this.$route.params.username;
        const repoName = this.$route.params.repoName;
        console.log(username, repoName);
        gitService.getRepositoryDetails(username, repoName)
            .then(response => {
                this.RepositoryDetails = response;
            })
            .catch(error => {
                console.error(error);
            });
    }
}

</script>

<style scoped>
h1{
    color: purple;
}
h3{
    color:blue
}
p{
    color: brown;
}

</style>