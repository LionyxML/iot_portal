import styled, { keyframes } from "styled-components";
import { bounce, fadeIn, tada } from "react-animations";

export const AnimateBounce = styled.div`
  animation: 2s ${keyframes`${bounce}`};
`;

export const AnimateTada = styled.div`
  animation: 2s ${keyframes`${tada}`};
`;

export const AnimateFadeIn3 = styled.div`
  animation: 3s ${keyframes`${fadeIn}`};
`;

export const AnimateFadeIn1 = styled.div`
  animation: 1s ${keyframes`${fadeIn}`};
`;
