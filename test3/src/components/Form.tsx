import React, { useState } from "react";
import tw from "tailwind-styled-components";
import type { ListType } from "../pages/User";

interface PropsType {
  idx: number;
  id: number | null;
  inputName: ListType[];
  setInputName: React.Dispatch<React.SetStateAction<ListType[]>>;
  nameTF: boolean;
  setNameTf: React.Dispatch<React.SetStateAction<boolean>>;
  passTF: boolean;
  setPassTF: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form = ({
  idx,
  id,
  inputName,
  setInputName,
  nameTF,
  setNameTf,
  passTF,
  setPassTF,
}: PropsType) => {
  const [nameMsg, setNameMsg] = useState<string>("");
  const [passMsg, setPassMst] = useState<string>("");

  const OnRemove = (index: number) => {
    const newList = inputName.filter((i) => i.id !== index);
    setInputName(newList);
  };

  const changeName = (event: any) => {
    const newList = [...inputName];
    newList[idx].name = event;
    setInputName(newList);
    if (event.length === 0) {
      setNameMsg("Name is requirde");
      setNameTf(false);
    } else if (event.length < 3) {
      setNameMsg("Name must be at loast 3 charaters long.");
      setNameTf(false);
    } else if (event.length >= 3) {
      setNameMsg("");
      if (newList.some((item) => item.id !== idx && item.name === event)) {
        setNameMsg("The name '" + event + "' is duplicated.");
        setNameTf(false);
      } else {
        setNameMsg("");
        setNameTf(true);
      }
    }
  };

  const changePwd = (event: any) => {
    const newList = [...inputName];
    newList[idx].password = event;
    setInputName(newList);
    if (event.length === 0) {
      setPassMst("password is requirde");
      setPassTF(false);
    } else if (event.length < 6) {
      setPassMst("Password must be at loast 6 charaters long.");
      setPassTF(false);
    } else if (event.length >= 6) {
      setPassMst("");
      setPassTF(true);
    }
  };

  return (
    <OutDiv>
      <HeaderDiv>
        <HeaderTitle>User - {id}</HeaderTitle>
        <HeaderClose
          onClick={() => {
            if (typeof id === "number") {
              OnRemove(id);
            }
          }}
        >
          X
        </HeaderClose>
      </HeaderDiv>
      <FormDiv>
        <FormTitle>Name</FormTitle>
        <InputDiv
          className={`${nameMsg ? "border-red-600" : ""}`}
          value={inputName[idx].name}
          onChange={(e) => {
            changeName(e.target.value);
          }}
        ></InputDiv>
        <Message className={`${nameMsg ? "" : "hidden"}`}>{nameMsg}</Message>
      </FormDiv>
      <FormDiv>
        <FormTitle>Password</FormTitle>
        <InputDiv
          className={`${passMsg ? "border-red-600" : ""}`}
          type="password"
          value={inputName[idx].password}
          onChange={(e) => {
            changePwd(e.target.value);
          }}
        ></InputDiv>
        <Message className={`${passMsg ? "" : "hidden"}`}>{passMsg}</Message>
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
const Message = tw.div`text-red-500 text-sm font-bold mt-1`;
