import React, { useReducer } from "react";
import { SHOW_MODAL, CLOSE_MODAL, CLEAR_CONTENT } from "./types";

import ModalReducer from "./modalReducer";
import ModalContext from './modalContext';

const ModalState = (props) => {
  const initialState = {
    open: false,
    content: null,
  };

  const [state, dispatch] = useReducer(ModalReducer, initialState);

  // --- Methods
  const newModal = (body) => {
    dispatch({
      type: SHOW_MODAL,
      payload: body,
    });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
    setTimeout(() => {
      dispatch({ type: CLEAR_CONTENT });
    }, 500);
  };

  return (
    <ModalContext.Provider value={{
        open: state.open,
        content: state.content,
        newModal,
        closeModal
    }}>{props.children}</ModalContext.Provider>
  );
};
export default ModalState;
