import { Gluten, Vegan, Vegeterian, Time, User } from '../icons/ReciepeIcons'
import { RecipeContainer, RecipeInfo, ReciepImage, IconContainer, InfoIcon, RecipeTitle, Icons } from './styles'


export default function ReciepItem({item}) {
  return (
    <RecipeContainer>
      <ReciepImage
        src={item.image || "/no-photo.png"}
        alt={item.title}
        width={160}
        height={90}
      />
      <RecipeInfo>
        <RecipeTitle>{item.title}</RecipeTitle>
        <IconContainer>
          <Icons>
            {item.gluttenFree || <Gluten />}
            {item.Vegeterian && <Vegeterian />}
            {item.vegan && <Vegan />}
          </Icons>
          <Icons right>
            {item.servings && <InfoIcon>{item.servings}<User /></InfoIcon>}
            {item.readyInMinutes && <InfoIcon>{item.readyInMinutes}<Time /></InfoIcon>}
          </Icons>
        </IconContainer>
      </RecipeInfo>
    </RecipeContainer>
  )
}
