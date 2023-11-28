import React from "react";
import tw from "tailwind-styled-components";

interface PropsType {
  inputCnt: number[];
  setInputCnt: React.Dispatch<React.SetStateAction<number[]>>;
}

const FormBottom = ({ inputCnt, setInputCnt }: PropsType) => {
  return (
    <OutDiv>
      <Btn
        onClick={() => {
          setInputCnt([...inputCnt, inputCnt[inputCnt.length - 1] + 1]);
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
