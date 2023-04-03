import axios from "axios";

const GitHubAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_BASE_URL,
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json',
    'X-GitHub-Api-Version': '2022-11-28'
  }
});

export default GitHubAxiosInstance
