const initialState = {
  loading: false,
  misTokens: '',
  tokensContract: '', 
  numDeBoletos: '',
  bote: '',
  ganador:'',
  owner:'',
  error: false,
  errorMsg: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        misTokens: action.payload.misTokens,
        tokensContract: action.payload.tokensContract,
        numDeBoletos: action.payload.numDeBoletos,
        bote: action.payload.bote,
        ganador: action.payload.ganador,
        owner: action.payload.owner,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
