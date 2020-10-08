import React from 'react';
import styled from 'styled-components';

const Example = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

const BoardList: React.FunctionComponent = () => (
  <>
    <h1>board list</h1>
    <Example />
  </>
);

export default BoardList;
