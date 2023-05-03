import React from 'react';
import styled from 'styled-components';

const SearchDiv = styled.div`
  display: flex;
  border-radius: 42px;
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  max-width: 490px;
  position: relative;
  padding-right: 8px;
  width: 100%;
  margin: 0 auto;
`;

const SearchInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 0px;
  width: 100%;
  align-items: center;
  .search_bar-div {
    color: #a7afb7;
    position: absolute;
    pointer-events: none;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    .icon-prev-reading-glasses {
      display: block;
      width: 16px;
      height: 16px;
      margin: 0px 12px 0px 24px;
    }
    .input-placeholder {
      display: block;
      font-size: 1.125rem;
      font-weight: 400;
      letter-spacing: -0.018em;
      line-height: 1.6;
    }
  }
  input[type='search'] {
    caret-color: rgb(25, 118, 210);
    padding-left: 50px;
    width: 100%;
    border: 0;
    background-color: transparent;
    min-width: 0;
    flex: 1;
    outline-offset: -2px;
    overflow: visible;
    outline: none;
    font-size: 1.125rem;
    line-height: 1.15;
    ::-webkit-search-cancel-button {
      position:relative;  
      right:20px;
      height: 30px;
      width: 30px;
  }
`;

const SearchBtnDiv = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 0;
  cursor: pointer;
  background-color: #007be9;
  color: #ffffff;
  align-items: center;
  width: 48px;
  height: 48px;
  .icon-next-reading-glasses {
    width: 21px;
    height: 21px;
  }
`;
function SearchInput() {
  return (
    <SearchDiv>
      <SearchInputDiv>
        <label htmlFor="search_bar_main" />
        <div className="search_bar-div">
          <span className="icon-prev-reading-glasses">
            <svg viewBox="0 0 16 16" fill="currentColor" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z" />
            </svg>
          </span>
        </div>
        <input id="search_bar_main" type="search" spellCheck="false" placeholder="질환명을 입력해 주세요" />
      </SearchInputDiv>
      <SearchBtnDiv type="button">
        <div className="icon-next-reading-glasses">
          <svg viewBox="0 0 16 16" fill="currentColor" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z" />
          </svg>
        </div>
      </SearchBtnDiv>
    </SearchDiv>
  );
}

export default SearchInput;
