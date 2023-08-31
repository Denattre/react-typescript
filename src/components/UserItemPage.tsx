import React, { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

interface Param {
  [key: string]: string;
}

interface UserItemPageParams extends Param {
  id: string;
}

export const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <button onClick={() => navigate("/users")}>Назад</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>Email: {user?.email}</div>
      <div>
        Address: {user?.address.city}, {user?.address.street},{" "}
        {user?.address.zipcode}
      </div>
    </div>
  );
};
