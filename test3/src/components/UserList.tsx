import React from "react";
import { useSelector } from "react-redux";
import tw from "tailwind-styled-components";

const UserList = () => {
  let username = useSelector((state) => {
    return state;
  });
  return (
    <OutDiv>
      {username ? null : null}
      <NameDiv>Name : </NameDiv>
      <PasswordDiv>password : </PasswordDiv>
    </OutDiv>
  );
};

export default UserList;

const OutDiv = tw.div`bg-gray-300 text-black flex flex-col w-100 text-lg p-3`;
const NameDiv = tw.div``;
const PasswordDiv = tw.div``;
