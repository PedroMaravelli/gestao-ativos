// src/components/RedeForm.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  color: #5C5C5C;
  margin-bottom: 20px;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #5C5C5C;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #5C5C5C;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #4a4a4a;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #5C5C5C;
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;
  text-align: left;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;
