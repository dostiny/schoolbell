import React from "react";
import { useSelector } from "react-redux";
import tw from "tailwind-styled-components";
import { userListType } from "./../store/nameList";

const UserList = () => {
  let username = useSelector((state: { nameList: userListType[] }) => {
    return state;
  });

  return (
    <>
      {username.nameList.length === 0
        ? null
        : username.nameList.map((i) => (
            <OutDiv key={i.name}>
              <NameDiv>Name: {i.name}</NameDiv>
              <PasswordDiv>
                password: {i.password.substr(0, 3) + "****"}
              </PasswordDiv>
            </OutDiv>
          ))}
    </>
  );
};

export default UserList;

const OutDiv = tw.div`bg-gray-300 text-black flex flex-col w-100 text-lg p-3`;
const NameDiv = tw.div``;
const PasswordDiv = tw.div``;
