import { SHOW_MODAL, CLOSE_MODAL, CLEAR_CONTENT } from "./types";

const ModalReducer = (state, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        open: true,
        content: action.payload,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        open: false,
      };

      case CLEAR_CONTENT:
      return {
        ...state,
        content: null,
      };
  }
};

export default ModalReducer
