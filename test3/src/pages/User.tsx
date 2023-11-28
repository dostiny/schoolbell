import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import FormBottom from "../components/FormBottom";
import UserList from "../components/UserList";

export interface ListType {
  id: number | null;
  name: string;
  password: string;
}

const User = () => {
  const [inputName, setInputName] = useState<ListType[]>([
    { id: 0, name: "", password: "" },
  ]);
  const [nameTF, setNameTF] = useState<boolean>(false);
  const [passTF, setPassTF] = useState<boolean>(false);

  useEffect(() => {
    const newList = [...inputName];
    if (newList.some((item) => item.name === "" && item.password === "")) {
      setNameTF(false);
      setPassTF(false);
    }
  });

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
      <FormBottom
        inputName={inputName}
        setInputName={setInputName}
        nameTF={nameTF}
        passTF={passTF}
      />
      <UserList />
    </div>
  );
};

export default User;
