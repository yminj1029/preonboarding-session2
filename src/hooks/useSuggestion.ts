import { useState } from 'react';
import getSuggestions from '@api/searchApi';

type Suggestion = {
  id: number;
  name: string;
};

type Suggestions = Suggestion[];

export default function useSuggestion() {
  const [suggestions, setSuggestions] = useState<Suggestions>([]);
  const [error, setError] = useState<null | string>(null);

  const handleSearchInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const response = await getSuggestions({ name: event.target.value });
      setSuggestions(response);
    } catch (e) {
      setError('실패하였습니다.');
    }
  };

  return {
    suggestions,
    error,
    handleSearchInput,
  };
}
