import React, { useState } from 'react';
import SearchInput from '@components/SearchInput';
import Suggestion from '@components/Suggestion';
import './App.css';
import useSuggestion from '@hooks/useSuggestion';

function App() {
  const [state, setState] = useState('');
  const { suggestions, handleSearchInput } = useSuggestion();

  return (
    <div className="App">
      <div className="App-header">
        <h2>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </h2>
      </div>
      <SearchInput handleInput={handleSearchInput} />
      <Suggestion />
    </div>
  );
}

export default App;
