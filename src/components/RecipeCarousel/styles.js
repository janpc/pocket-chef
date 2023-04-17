import styled from "styled-components";

export const Title = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 36px;
`;

export const ScrollerContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 80px;
`;

export const RecipeContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  overflow: hiden;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const LeftButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 10px;
  z-index: 1;
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
  border: none;
  ${props => props.disabled && "opacity: 0;" }

  &:hover {
    cursor: pointer;
  }
`

export const RigthButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 10px;
  z-index: 1;
  background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
  border: none;
  ${props => props.disabled && "opacity: 0;" }

  &:hover {
    cursor: pointer;
  }
`

