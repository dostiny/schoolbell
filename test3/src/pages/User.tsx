import React, { useState } from "react";
import Form from "../components/Form";
import FormBottom from "../components/FormBottom";
import UserList from "../components/UserList";

export interface ListType {
  id: number | null;
  name: string;
}

export interface InfoType {
  name: string;
  password: string;
}

const User = () => {
  const [inputName, setInputName] = useState<ListType[]>([{ id: 0, name: "" }]);
  const [nameList, setNameList] = useState<string[]>([]);
  const [nameTF, setNameTF] = useState<string>("");
  const [passTF, setPassTF] = useState<string>("");

  return (
    <div>
      {inputName.map((i, idx) => (
        <Form
          idx={idx}
          id={i.id}
          inputName={inputName}
          setInputName={setInputName}
          nameTF={nameTF}
          setNameTf={setNameTF}
          passTF={passTF}
          setPassTF={setPassTF}
        />
      ))}
      <FormBottom inputName={inputName} setInputName={setInputName} />
      <UserList />
    </div>
  );
};

export default User;
