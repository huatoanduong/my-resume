// import jsonData from '@public/data.json';
// import jsonData from 'file-loader!@public/data.json';
// import jsonData from '../../../public/data.json';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Hàm fetch danh sách users
const getData = async () => {
  // const url = jsonData as string;

  // const path = jsonData as any as string;
  // const { data } = await axios.get(<string><any>jsonData);
  const { data } = await axios.get("public/data.json");
  // const { data } = await axios.get(import('@public/data.json'));
  // const { data } = await axios.get('@public/data.json');
  // fetch(jsonData)

  // const data = <string><any>jsonData;
  // debugger;
  return data;
};

const useData = () => {
  return useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });
};

export { getData, useData };
