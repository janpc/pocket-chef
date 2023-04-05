import ReciepItem from '@/components/RecipeItem'
import { RecipeContainer, LeftButton, ScrollerContainer, RigthButton } from './styles'
import { useEffect, useRef, useState } from 'react';
import { Next, Before } from '../icons/basicIcons';


export default function RecipeCarousel({items}) {
  const [position, setPosition] = useState(0);
  const [disabledBack, setDisabledBackward] = useState(false);
  const [disabledFordward, setDisabledFordward] = useState(true);
  const scrollContainer = useRef();

  useEffect(() => {
    

    const conatiner = scrollContainer.current;
    setDisabledBackward(conatiner.scrollLeft == 0)
    setDisabledFordward(conatiner.scrollWidth < conatiner.offsetWidth + conatiner.scrollLeft)
  }, [position])

  useEffect(() => {
    scrollContainer.current.addEventListener("scroll", enableButtons);

    return () => {
      scrollContainer.current.removeEventListener("scroll", enableButtons);
    };
  }, []);

  const scrollToPosition = (pos) => {
    setPosition(pos);
    scrollContainer.current.scrollTo({
      top: 0,
      left: pos * 320,
      behavior: 'smooth'
    });
  }

  const enableButtons = () => {
    const conatiner = scrollContainer.current;
    setDisabledBackward(conatiner.scrollLeft == 0)
    setDisabledFordward(conatiner.scrollWidth <= conatiner.offsetWidth + conatiner.scrollLeft)
    const pos = Math.floor(conatiner.scrollLeft * items.length / conatiner.scrollWidth)
    setPosition(pos);
  }

  const moveForward = () => {
    scrollToPosition(position + 1);
  }
  
  const moveBack = () => {
    scrollToPosition(position - 1);
  }
  return (
    <ScrollerContainer>
      <LeftButton disabled={disabledBack} onClick={moveBack}>
        <Before />
      </LeftButton>
      <RecipeContainer ref={scrollContainer}>
        {items.map(item =>
          <ReciepItem key={item.id} item={item} /> 
        )}
      </RecipeContainer>
      <RigthButton disabled={disabledFordward} onClick={moveForward}>
        <Next />
      </RigthButton>
    </ScrollerContainer>
  )
}
