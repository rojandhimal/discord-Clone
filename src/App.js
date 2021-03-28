import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <Chat />
        
     </div>
  );
}

export default App;
