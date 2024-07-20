"use client";
import { Provider } from "react-redux";
import store, { persistor } from "@/store/store";

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
