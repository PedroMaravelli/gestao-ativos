import styled from 'styled-components';

export const CadastroSoft = styled.div`

`

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #ccc;
`;

export const Title = styled.h2`
  text-align: center;
  color: #5C5C5C;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #5C5C5C;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #5C5C5C;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #464646;
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
