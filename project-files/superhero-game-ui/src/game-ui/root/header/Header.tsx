import styled from 'styled-components';

export const Header = styled('ul')`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  width: 100%;
  outline: 0;
  background: #eb984e;
  border-bottom: 4px solid #333;
  
  li {
    display: flex;
    list-style: none;
    
    a {
      display: flex;
      padding: 12px 28px;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
      font-size: 16px;
      font-family: Arial, sans-serif;
      color: #333;
      
      &:hover {
        color: #555;
        background: #f7d2b1;
        border-color: #fff;
      }
    }
  }
`;