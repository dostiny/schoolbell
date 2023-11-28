import React, { useState } from "react";
import Form from "../components/Form";
import FormBottom from "../components/FormBottom";
import UserList from "../components/UserList";

const User = () => {
  const [inputCnt, setInputCnt] = useState<number[]>([0]);

  return (
    <div>
      {inputCnt.map((i, idx) => (
        <Form key={i} idx={idx} inputCnt={inputCnt} setInputCnt={setInputCnt} />
      ))}
      <FormBottom inputCnt={inputCnt} setInputCnt={setInputCnt} />
      <UserList />
    </div>
  );
};

export default User;
