import React from "react";
import { Card, CardVariant } from "./components/Card";
import { EventsExample } from "./components/EventsExample";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsersPage } from "./components/UsersPage";
import { TodosPage } from "./components/TodosPage";
import { NavLink } from "react-router-dom";
import { UserItemPage } from "./components/UserItemPage";
import { TodoItemPage } from "./components/TodoItemPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div style={{ display: "flex", gap: 15, marginBottom: 15 }}>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/users">Пользователи</NavLink>
          <NavLink to="/todos">Список дел</NavLink>
        </div>
        <Routes>
          <Route
            index
            element={
              <div>
                <EventsExample />
                <Card
                  variant={CardVariant.outlined}
                  width="200px"
                  height="200px"
                >
                  <button>Кнопка</button>
                </Card>
              </div>
            }
          />
          <Route path={"/users"} element={<UsersPage />}></Route>
          <Route path={"/users/:id"} element={<UserItemPage />}></Route>
          <Route path={"/todos"} element={<TodosPage />}></Route>
          <Route path={"/todos/:id"} element={<TodoItemPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
