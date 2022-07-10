import styled from "styled-components";
import { device } from "../components/breakpoints";

export const Container = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: 218px repeat(5, 1fr);
  grid-template-rows: 48px 360px repeat(4, 1fr);
  height: 100vh;
  gap: 30px;
  box-sizing: border-box;
  @media ${device.tablet} {
    min-height: 100%;
  }
  @media ${device.mobile} {
    grid-template-columns: repeat(6, 1fr);
    height: auto;
    min-height: 100%;
  }
`;
