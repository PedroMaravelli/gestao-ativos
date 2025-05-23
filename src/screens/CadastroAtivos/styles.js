import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const FormsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const Form = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fefefe;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;
export const Label = styled.label`
  margin-top: 1rem;
  display: block;
  font-weight: 600;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

export const Button = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  padding: 0.75rem;
  background: #1F3A93;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background:rgb(50, 80, 180);
  }
`;