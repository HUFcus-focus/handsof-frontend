import styled from "styled-components";
import { media } from "styles/theme";

export const DemoContentLayout = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.color.primary};
  ${media.mobile} {
    background: ${({ theme }) => theme.color.accent};
  }
  padding: 2rem;
`;

export const DemoContentText = styled.div`
  color: ${({ theme }) => theme.color.accent};
  ${media.mobile} {
    color: ${({ theme }) => theme.color.primary};
  }
  font-size: ${(props: { [keys: string]: string }) =>
    props.fontSize || "1.5rem"};
  margin: ${(props: { [keys: string]: string }) => props.m};
`;
