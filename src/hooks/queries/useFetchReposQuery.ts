import { useQuery } from "@tanstack/react-query";
import queryKeys from "./QueryKeys";
import Repo from "../../models/Repo";
import { AxiosError } from "axios";
import GitHubAxiosInstance from "../../GitHubAxiosInstance";

const DEFAULT_PER_PAGE = 5

export type ReposQueryProps = {
  username: string,
  per_page?: number
}

const useFetchReposQuery = (props: ReposQueryProps) => {
  const { username = '', per_page = DEFAULT_PER_PAGE } = props

  return useQuery<Repo[], AxiosError>({
    queryKey: [queryKeys.USER_REOPS, { ...props }],
    queryFn: async () => {
      const response = await GitHubAxiosInstance.get(`/users/${username}/repos?per_page=${per_page}`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      return response.data
    },
    enabled: Boolean(username)
  })
}

export default useFetchReposQuery;
