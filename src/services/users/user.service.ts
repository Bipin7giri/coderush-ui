import { dev_base_url } from "@/constants/baseurl";

export const getMe = (token: string) => {
  return fetch(dev_base_url + "/users/me", {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  }).then(async (res) => {
    const data = await res.json();
    console.log(data);
    return data;
  });
};
