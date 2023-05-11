import axios from 'axios';

const gitService = {
  getRepositories(username) {
    const url = `https://api.github.com/users/${username}/repos`;


    return axios.get(url)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw new Error(`Failed to fetch repositories: ${error}`);
      });
    },

  getRepositoryDetails(username, repoName) {
    const url = `https://api.github.com/repos/${username}/${repoName}`;

    return axios.get(url)
      .then(response => {
        // 在此處處理獲取的倉庫詳細信息
        return response.data;
      })
      .catch(error => {
        throw new Error(`Failed to fetch repository details: ${error}`)
      });
  }
};

export default gitService;






