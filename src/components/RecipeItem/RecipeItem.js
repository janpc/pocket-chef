import { RecipeContainer, ReciepImage } from './styles'


export default function Home({item}) {
  return (
    <RecipeContainer>
      <ReciepImage
          src={item.image}
          alt={item.title}
          width={160}
          height={90}
        />
      <p>{item.title}</p>
    </RecipeContainer>
  )
}
