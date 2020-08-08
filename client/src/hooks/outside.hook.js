import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {isChangeName} from "../redux/actions";

export function useOutsideAlerter(ref) {
  const dispatch = useDispatch()
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(isChangeName())
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, dispatch]);
}