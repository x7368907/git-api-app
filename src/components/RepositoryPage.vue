<template>
    <div>
        <h1>倉庫詳細信息</h1>
        <p>用戶名:{{ $route.params.username }}</p>
        <p>倉庫名:{{ $route.params.repoName }}</p>
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
        gitService.getRepositoryDetails(username, repoName)
            .then(response => {
                this.RepositoryDetails = response.data;
            })
            .catch(error => {
                console.error(error);
            });
    }
}

</script>