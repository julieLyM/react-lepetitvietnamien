import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: uppercase;
font-size: 1.2em;
background:transparent;
border: 0.05rem solid var(--red);
border-color: ${props => props.cart ? "var(--green)": "var(--red)"};
color: ${prop => (prop.cart ? "var(--green)" :"var(--red)")};
width: 100px;
height: 50px;
display: flex;
margin-left: 70%;
cursor: pointer;
border-radius: 10px;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 2%;
transition: all 0.5s ease-in-out;
&:hover {
  background: ${prop => prop.cart ? "var(--green)" : "var(--red)"};
  color: var(--blue);
};
&:focus {
  outline: none;
};

`;