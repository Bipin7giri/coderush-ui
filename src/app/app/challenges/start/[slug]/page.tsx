import React from "react";

const page = ({ params }: any) => {
  return <div>{params.slug}</div>;
};

export default page;
