import React, { FC } from "react";
import { IUser } from "../types/types";
import { UserItem } from "./UserItem";
import { useNavigate } from "react-router-dom";

interface UserListProps {
  users: IUser[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
  const navigate = useNavigate();
  return (
    <div>
      {users.map((user) => {
        return (
          <UserItem
            key={user.id}
            user={user}
            onClick={(user) => navigate("/users/" + user.id)}
          />
        );
      })}
    </div>
  );
};
