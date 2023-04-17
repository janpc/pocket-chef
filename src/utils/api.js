export const getHomepageData = async () => {
 const res = await Promise.all([
    fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.SPOONACULAR_API_KEY}`),
    fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.SPOONACULAR_API_KEY}`),
    fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.SPOONACULAR_API_KEY}`)
  ])

  console.log(res);
}