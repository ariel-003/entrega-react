import styled from "styled-components";

export const Button = styled.button`
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "30px")};
`;