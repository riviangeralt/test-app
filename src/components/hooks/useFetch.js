import { useToast } from "@chakra-ui/react";
import { useState } from "react";

const useFetch = (func, withToast) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const toast = useToast();

  const query = async (body = null) => {
    try {
      setIsLoading(true);
      const res = await func(body);
      setData(res);
      return res;
    } catch (error) {
      setError(error);
      if (withToast) {
        const isArrStr = typeof error?.data?.detail === "string";
        const errorArr = !isArrStr && Array.isArray(error?.data?.detail);
        if (errorArr) {
          Object.keys(error.data.detail).forEach((key) => {
            toast({
              description: error?.data?.detail[key]?.msg,
              status: "error",
              duration: 4000,
              isClosable: true,
              position: "top-right",
            });
          });
        } else {
          toast({
            description: error?.data?.detail || error?.message || 'Something went wrong',
            status: "error",
            duration: 4000,
            isClosable: true,
            position: "top-right",
          });
        }
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, query };
};

export default useFetch;
