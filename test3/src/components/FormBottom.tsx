import React from "react";
import tw from "tailwind-styled-components";

const FormBottom = () => {
  return (
    <OutDiv>
      <Btn>Add User</Btn>
      <Btn>Confirm</Btn>
    </OutDiv>
  );
};

export default FormBottom;

const OutDiv = tw.div`my-5`;
const Btn = tw.button`border-solid border-2 border-black w-24 h-10 mr-3 hover:text-white hover:bg-black`;
