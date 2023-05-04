import api from './index';

type Suggestion = {
  id: number;
  name: string;
};

type Suggestions = Suggestion[];
type SearchInput = {
  name: string;
};

const getSuggestions = async (requestBody: SearchInput): Promise<Suggestions> => {
  const response = await api.get(`/api/v1/search-conditions/`, { params: requestBody });
  return response.data;
};

export default getSuggestions;
