import { configureStore } from "@reduxjs/toolkit";
import tabs from "./components/Tabs";

export const store = configureStore({
  reducer:{
    tabs,
  }
})
