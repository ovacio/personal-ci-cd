import { useQuery } from "@tanstack/react-query";
import { getProjectsInfo } from "../projects/info";


export const useGetProjectsQuery = () => {
  return useQuery({
    queryKey: ['getProjects'],
    queryFn: getProjectsInfo
  })
}
