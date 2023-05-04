import React from 'react';
import styled from 'styled-components';
import glasses from '../image/glasses.svg';

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff;
  align-items: flex-start;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  max-width: 490px;
  position: relative;
  width: 100%;
  margin: 15px auto;
`;

const TitleSpan = styled.span`
  letter-spacing: 0.02em;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.6;
  color: rgb(80, 106, 137);
  padding: 20px 0px 0px 20px;
`;

const SuggestionList = styled.ul`
  list-style: none;
  align-items: center;
  font-size: 1.125rem;
  padding: 0 10px;
  li {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    ::before {
      content: url('${glasses}');
      display: block;
      color: #a7afb7;
      width: 22px;
      height: 18px;
      margin: 0 5px;
    }
  }
`;

type SuggestionData = {
  id: number;
  name: string;
};

interface SuggestionProps {
  suggestionList: SuggestionData[];
}

function Suggestion(props: SuggestionProps) {
  const { suggestionList } = props;
  return (
    <SearchDiv>
      <TitleSpan>추천 검색어</TitleSpan>
      <SuggestionList>
        {suggestionList.length === 0 ? (
          <div>데이터가 없습니다.</div>
        ) : (
          suggestionList.map(suggestion => <li>{suggestion.name}</li>)
        )}
      </SuggestionList>
    </SearchDiv>
  );
}

export default Suggestion;
