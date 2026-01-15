import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from "./Header.jsx";

export default function WebLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
