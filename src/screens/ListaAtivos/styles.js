import styled from "styled-components";



export const Wrapper = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fefefe;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const Button = styled.button`
  background-color: #1F3A93;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color:rgb(43, 66, 142);
  }
`;

export const Section = styled.div`
  margin-top: 20px;
`;

export const AtivoItem = styled.li`
  margin-left: 16px;
`;
    
    
export const Card = styled.div`
  background-color: #f4f4f4;
  padding: 16px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
`;

export const CardTitle = styled.h4`
  margin: 0 0 8px 0;
`;

export const CardDetail = styled.p`
  margin: 4px 0;
`;

export const DeleteButton = styled.button`
  margin-top: 10px;
  padding: 6px 12px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #c9302c;
  }
`;

    

