import React from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';

const GET_BOARDS = gql`
  {
    boards {
      edges {
        node {
          id
          title
          content
          createdAt
          customField
          photo
        }
      }
    }
  }
`;

const Example = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

const BoardList: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(GET_BOARDS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error to load!</p>;
  console.log(data);

  return (
    <>
      <h1>board list</h1>
      <Example />
    </>
  );
};

export default BoardList;
