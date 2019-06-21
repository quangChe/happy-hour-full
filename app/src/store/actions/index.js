import api from '../../utils/apis';

export const fetchNearby = () => async dispatch => {
  const response = await api.searchNearby();
  dispatch({ type: 'FETCH_NEARBY', payload: response, loading: false});
}

export const fetchById = (id) => async dispatch => {
  const response = await api.searchId(id);
  return dispatch({type: 'ID_BUSINESS', payload: response})
}