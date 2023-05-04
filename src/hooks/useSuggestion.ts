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
      console.log(event);

      const response = await getSuggestions({ name: event.target.value });
      setSuggestions(response);
    } catch (e) {
      setError('할 일 목록을 불러오는 데 실패하였습니다.');
    }
  };

  return {
    suggestions,
    handleSearchInput,
  };
}
