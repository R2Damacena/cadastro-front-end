import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { UserData } from "../interface/UserData";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<UserData[]> => {
  const response = axios.get(API_URL + "/demo/all");
  return response;
};

export function useUserData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["user-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}