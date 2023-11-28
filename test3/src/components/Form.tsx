import React from "react";
import tw from "tailwind-styled-components";
import type { ListType } from "../pages/User";

interface PropsType {
  idx: number | null;
  inputName: ListType[];
  setInputName: React.Dispatch<React.SetStateAction<ListType[]>>;
}

const Form = ({ idx, inputName, setInputName }: PropsType) => {
  const OnRemove = (index: number) => {
    const newList = inputName.filter((i) => i.id !== index);
    setInputName(newList);
  };

  return (
    <OutDiv>
      <HeaderDiv>
        <HeaderTitle
          onClick={() => {
            console.log(inputName);
          }}
        >
          User - {idx}
        </HeaderTitle>
        <HeaderClose
          onClick={() => {
            typeof idx === "number" ? OnRemove(idx) : console.log(1);
          }}
        >
          X
        </HeaderClose>
      </HeaderDiv>
      <FormDiv>
        <FormTitle>Name</FormTitle>
        <InputDiv
          onChange={(e) => {
            console.log(e.target.value);
          }}
        ></InputDiv>
        <Message>ㅇㅇㅇㅇ</Message>
      </FormDiv>
      <FormDiv>
        <FormTitle
          onClick={() => {
            console.log(idx);
          }}
        >
          Password
        </FormTitle>
        <InputDiv type="password"></InputDiv>
      </FormDiv>
    </OutDiv>
  );
};

export default Form;

const OutDiv = tw.div`border-solid border-2 border-black text-black flex flex-col w-100 text-2xl text-center my-3`;
const HeaderDiv = tw.div`flex justify-between items-start m-3 font-bold`;
const HeaderTitle = tw.div``;
const HeaderClose = tw.button`border-solid border-2 border-black w-9 h-9 hover:text-white hover:bg-black`;
const FormDiv = tw.div`flex flex-col justify-start text-start m-3 text-lg`;
const FormTitle = tw.div``;
const InputDiv = tw.input`border-solid border-2 border-black h-12 px-3`;
const Message = tw.div`text-red-500 text-sm font-bold hidden`;
