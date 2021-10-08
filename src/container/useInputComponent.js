import { useState } from "react";
import axios from "axios";
import { initialValues } from "./constants";

export const useInputComponent = () => {
  const [resault, setResault] = useState("");

  const baseURL = "http://192.168.5.15:3000/calculate";

  const handleSubmit = (values, { resetForm }) => {
    axios.post(baseURL, { exp: values.calcValue }).then((res) => {
      setResault(res.data.result);
      resetForm({
        values: "",
      });
    });
  };

  return { handleSubmit, initialValues, resault };
};
