import React from 'react';
import SearchInput from '@components/SearchInput';
import Suggestion from '@components/Suggestion';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </h2>
      </div>
      <SearchInput />
      <Suggestion />
    </div>
  );
}

export default App;
