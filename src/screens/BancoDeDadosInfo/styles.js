import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  font-family: Arial, sans-serif;
  margin-left: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Section = styled.div`
  margin-bottom: 2rem;
`;

export const Card = styled.div`
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: left;
  }

  th {
    background-color: #eaeaea;
  }
`;