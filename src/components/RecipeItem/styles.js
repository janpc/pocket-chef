import styled from "styled-components";

import Image from 'next/image'

export const RecipeContainer = styled.div`
  min-width: 300px;
  box-sizing: border-box;
  border: 1px solid white;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(-73deg, rgb(21,31,41), rgb(12,13,14));
`;

export const ReciepImage = styled(Image)`
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
`;

export const RecipeInfo = styled.div`
  padding: 10px;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Icons = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  align-items: center;
  justify-content: ${props => props.right ? "end" : "start"};
  padding: 10px 10px 0;
`;

export const InfoIcon = styled.span`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const RecipeTitle = styled.h3`
  height: 2.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;