import { useQuery } from "@tanstack/react-query";
import Users from "../../models/Users";
import queryKeys from "./QueryKeys";
import { AxiosError } from "axios";
import GitHubAxiosInstance from "../../GitHubAxiosInstance";

const DEFAULT_PER_PAGE = 5

export type UsersQueryProps = {
  q: string,
  per_page?: number
}

const useFetchUsersQuery = (props: UsersQueryProps) => {
  const { q = '', per_page = DEFAULT_PER_PAGE } = props
  return useQuery<Users, AxiosError>({
    queryKey: [queryKeys.SEARCH_USERS, { ...props }],
    queryFn: async () => {
      const response = await GitHubAxiosInstance.get(`/search/users?q=${encodeURIComponent(props.q)}&per_page=${per_page}`)
      return response.data
    },
    enabled: Boolean(q),
    keepPreviousData: Boolean(q)
  })

}
export default useFetchUsersQuery;
