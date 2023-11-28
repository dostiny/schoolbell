import React, { useState } from "react";
import Form from "../components/Form";
import FormBottom from "../components/FormBottom";
import UserList from "../components/UserList";

const User = () => {
  const [inputCnt, setInputCnt] = useState<number[]>([0]);

  return (
    <div>
      {inputCnt.map(() => (
        <Form />
      ))}

      <FormBottom />
      <UserList />
      <button
        onClick={() => {
          setInputCnt([...inputCnt, 0]);
        }}
      >
        버튼
      </button>
    </div>
  );
};

export default User;
