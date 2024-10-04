import styled from "styled-components";

export const LayoutContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.5rem;
  padding: 2rem 2rem;
  height: 100%;
`;

export const PageContent = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: 760px;
  height: 100%;
  display: flex;
  align-items: center;
  background: ${props => props.theme['primary']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 3rem;
  @media (max-width: 680px) {
		padding: 2rem;
  }
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;