import { useEffect } from 'react';
import styled from 'styled-components';

const PageText = styled.h1`
  font-size: 24px;
  color: #000000;
  font-family: sans-serif;
  margin: 20px 0;
  text-align: center;
`;

function Page() {

  useEffect(() => {
    console.log("페이지 로딩…");
  }, []); 

  return (
    <div>
      <PageText>페이지</PageText>
    </div>
  );
}

export default Page;