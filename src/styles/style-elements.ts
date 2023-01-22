import styled from "styled-components";

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
  max-width: 1100px;
  width: 100%;
  min-height: 760px;
  height: 100%;
  display: flex;
  align-items: center;
  background: ${props => props.theme['panel-background']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 4rem;
  gap: 2rem;
  img {
    border-radius: 10px;
  }
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 130%;
      }
      a {
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 160%;
        text-transform: uppercase;
        text-decoration: none;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        color: ${props => props.theme.blue};
        transition: border 0.2s;
        border-bottom: 2px solid transparent;
        &:hover {
          border-bottom: 2px solid ${props => props.theme.blue};
        }
      }
    }
    main {
      p {
        margin-top: 0.5rem;
        word-wrap: break-word;
      }
    }
    footer {
      display: flex;
      height: 100%;
      align-items: flex-end;
      gap: 1.5rem;
      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${props => props.theme['base-subtitle']};
        i {
          color: ${props => props.theme['base-label']};
        }
      }
      
    }
  }
`;
