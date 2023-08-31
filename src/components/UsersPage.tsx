import React, { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { UserList } from "./UserList";
import List from "./List";
import { UserItem } from "./UserItem";
import { useNavigate } from "react-router-dom";

export const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <p>Компонент списка пользователей</p>
      <UserList users={users} />
      <p>Универсальный компонент списков</p>
      <List
        items={users}
        renderItem={(user: IUser) => {
          return (
            <UserItem
              onClick={(user) => navigate("/users/" + user.id)}
              user={user}
              key={user.id}
            ></UserItem>
          );
        }}
      ></List>
    </div>
  );
};
