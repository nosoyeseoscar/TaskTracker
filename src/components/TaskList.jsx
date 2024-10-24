import { useState } from "react";
import { Task } from "./Task";

export default function TaskList({ children }) {
  //const []
  return (
    <div>
      <h2 className="text-slate-200 text-xl pb-2">Task List</h2>
      <div className="border border-slate-300 rounded-xl p-4">{children}</div>
    </div>
  );
}
