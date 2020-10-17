import React from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';

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

const Board = ({ item }) => {
  const { id, title } = item;
  return (
    <div>
      <Link href={`boards/${id}`}>
        <a> {title} </a>
      </Link>
    </div>
  );
};

const BoardList: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(GET_BOARDS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error to load!</p>;
  const {
    boards: { edges },
  } = data;

  return (
    <>
      <h1>board list</h1>
      <Example />
      {edges.map((item) => (
        <Board key={item.node.id} item={item.node} />
      ))}
    </>
  );
};

export default BoardList;
