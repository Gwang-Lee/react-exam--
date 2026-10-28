import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-family: sans-serif;
  margin-top: 20px;
`;

const StyledInput = styled.input`
  width: 250px;
  padding: 8px 10px;
  font-size: 16px;
  border: 1px solid #767676;
  border-radius: 2px;
  outline: none;

  &:focus {
    border-color: #000000;
  }
`;

const OutputText = styled.p`
  font-size: 20px;
  color: #333333;
  margin: 0;
`;

function LiveInput() {

  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Container>
      <StyledInput 
        type="text" 
        placeholder="텍스트를 입력하세요" 
        value={text}
        onChange={handleChange}
      />
      
      <OutputText>입력값: {text}</OutputText>
    </Container>
  );
}

export default LiveInput;