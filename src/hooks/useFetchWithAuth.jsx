import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import authHeaders from "../utils/Authheader";

const useFetchWIthAuth = () => {
  const [data, setdata] = useState();
  const [isLoading, setisLoading] = useState(false);

  const request = async (reqUrl, reqType, reqData = {}, successMsg) => {
    try {
      setisLoading(true);
      const res = await axios({
        method: reqType,
        url: reqUrl,
        data: reqData,
        headers: authHeaders(),
      });
      setdata(res.data);
      toast.success(successMsg);
      setisLoading(false);
    } catch (e) {
      setisLoading(false);
      toast.error(e.response.data.error);
    }
  };

  return { request, data, isLoading };
};

export default useFetchWIthAuth;
