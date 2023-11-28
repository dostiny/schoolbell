import React from "react";
import tw from "tailwind-styled-components";
import type { ListType } from "../pages/User";

interface PropsType {
  inputName: ListType[];
  setInputName: React.Dispatch<React.SetStateAction<ListType[]>>;
}

const FormBottom = ({ inputName, setInputName }: PropsType) => {
  const AddList = () => {
    const lastIdx: number | null = inputName[inputName.length - 1].id;
    if (typeof lastIdx === "number") {
      setInputName([...inputName, { id: lastIdx + 1, name: "", password: "" }]);
    }
  };
  return (
    <OutDiv>
      <Btn
        onClick={() => {
          AddList();
        }}
      >
        Add User
      </Btn>
      <Btn>Confirm</Btn>
    </OutDiv>
  );
};

export default FormBottom;

const OutDiv = tw.div`my-5`;
const Btn = tw.button`border-solid border-2 border-black w-24 h-10 mr-3 hover:text-white hover:bg-black`;
