import { createClient } from '@supabase/supabase-js'
import './style.css'

const supabaseUrl = 'https://moqzweyzqfmaujwqzjje.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey)
console.log(supabase)

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Recipes</h1>
`

const main = async () => {

  const getData = async () => {
    let { data, error } = await supabase
      .from('recipes')
      .select('title')

    return data;
  }

  const data = await getData();

  console.log({ data })

  app.innerHTML += data?.map(recipe => `<div>${recipe.title}</div>`).join('');
}

main();