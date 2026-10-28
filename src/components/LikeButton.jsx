import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-family: sans-serif;
`;

const LikeCount = styled.p`
  font-size: 18px;
  color: #555555;
  margin: 0;
`;

const IconButton = styled.button`
  background-color: white;
  border: 2px solid #000000; // 검은색 얇은 테두리
  border-radius: 6px;       // 약간 둥근 모서리
  padding: 6px 12px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

function LikeButton() {
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      setCount(count + 1);
      setIsLiked(true);
    } else {
      setCount(count - 1);
      setIsLiked(false);
    }
  };

  return (
    <Container>
      <LikeCount>좋아요 {count}</LikeCount>
      
      <IconButton onClick={handleLike}>
        👍
      </IconButton>
    </Container>
  );
}

export default LikeButton;