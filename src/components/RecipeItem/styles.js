import styled from "styled-components";

import Image from 'next/image'

export const RecipeContainer = styled.div`
  width: calc((100% - 20px) / 3 );
`;

export const ReciepImage = styled(Image)`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;