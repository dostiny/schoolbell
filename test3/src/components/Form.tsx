import React from "react";
import tw from "tailwind-styled-components";

const Form = () => {
  return (
    <OutDiv>
      <HeaderDiv>
        <HeaderTitle>유저</HeaderTitle>
        <HeaderClose>X</HeaderClose>
      </HeaderDiv>
      <FormDiv>
        <FormTitle>Name</FormTitle>
        <InputDiv></InputDiv>
        <Message>ㅇㅇㅇㅇ</Message>
      </FormDiv>
      <FormDiv>
        <FormTitle>Password</FormTitle>
        <InputDiv type="password"></InputDiv>
      </FormDiv>
    </OutDiv>
  );
};

export default Form;

const OutDiv = tw.div`border-solid border-2 border-black text-black flex flex-col w-100 text-2xl text-center my-3`;
const HeaderDiv = tw.div`flex justify-between items-start m-3`;
const HeaderTitle = tw.div``;
const HeaderClose = tw.button`border-solid border-2 border-black w-9 h-9 hover:text-white hover:bg-black`;
const FormDiv = tw.div`flex flex-col justify-start text-start m-3 text-lg`;
const FormTitle = tw.div``;
const InputDiv = tw.input`border-solid border-2 border-black h-12 px-3`;
const Message = tw.div`text-red-500 text-sm font-bold hidden`;
