const INITIAL_STATE = {
  nearbyBusinesses: {
    data: [],
    loading: true,
  },
  viewingBusiness: {}
}

const fetchNearby = (state, action) => {
  return {
    ...state,
    nearbyBusinesses: { data: action.payload, loading: false },
  }
}

const idBusiness = (state, action) => {
  const selectedBusiness = {
    ...state.viewingBusiness, ...action.payload
  };
  return {
    ...state, viewingBusiness: selectedBusiness,
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_NEARBY': return fetchNearby(state, action);
    case 'ID_BUSINESS': return idBusiness(state, action);
    default: return state;
  }
}
