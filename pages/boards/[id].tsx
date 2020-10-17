import React from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

const GET_BOARD = gql`
  query Board($id: ID!) {
    board(id: $id) {
      id
      title
      content
      createdAt
    }
  }
`;

// const GET_BOARD = gql`
//   {
//     board(id: "Qm9hcmRUeXBlOjM=") {
//       id
//       title
//       content
//       createdAt
//     }
//   }
// `;

const Example = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
`;

const BoardDetail: React.FunctionComponent = () => {
  const {
    query: { id },
  } = useRouter();
  const { loading, error, data } = useQuery(GET_BOARD, { variables: { id } });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error to load!</p>;

  const {
    board: { title, content },
  } = data;

  return (
    <>
      <h1>board detail</h1>
      <Example />
      <h1>{title}</h1>
      <span>{content}</span>
    </>
  );
};

export default BoardDetail;
