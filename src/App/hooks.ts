import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./Store";

//* export the typed version of useSelector and useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> =  useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>