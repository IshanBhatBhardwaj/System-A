import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import RecipieCard from "./components/RecipieCard"
import NavBar from "./components/navbar"
import SavedRecipie from "./components/SavedRecipie"


function App() {
  const recipes = [
    {
      title: "Grilled Chicken Salad",
      description: "A healthy grilled chicken salad with mixed greens, avocado, and a tangy vinaigrette.",
      imgSrc: "./download.jpg",
      meats: ["chicken"],
      vegetables: ["lettuce", "avocado", "tomato"],
      colors: ["green", "red"],
      isVegan: false,
      isVegetarian: false
    },
    {
      title: "Spaghetti Carbonara",
      description: "Classic Italian pasta with pancetta, eggs, and Parmesan cheese.",
      imgSrc: "./download.jpg",
      meats: ["pancetta"],
      vegetables: [],
      colors: ["yellow"],
      isVegan: false,
      isVegetarian: false
    },
    {
      title: "Vegan Buddha Bowl",
      description: "A colorful vegan bowl packed with quinoa, roasted chickpeas, and fresh veggies.",
      imgSrc: "./download.jpg",
      meats: [],
      vegetables: ["spinach", "sweet potato", "avocado", "tomato"],
      colors: ["orange", "green", "red"],
      isVegan: true,
      isVegetarian: true
    },
    {
      title: "BBQ Pulled Pork Sandwich",
      description: "Slow-cooked BBQ pulled pork served with coleslaw on a brioche bun.",
      imgSrc: "./download.jpg",
      meats: ["pork"],
      vegetables: ["cabbage", "carrot"],
      colors: ["brown", "orange"],
      isVegan: false,
      isVegetarian: false
    },
    {
      title: "Vegetarian Stir-Fry",
      description: "A quick and easy stir-fry with tofu, broccoli, and bell peppers.",
      imgSrc: "./download.jpg",
      meats: [],
      vegetables: ["broccoli", "bell peppers", "onion"],
      colors: ["green", "yellow", "red"],
      isVegan: false,
      isVegetarian: true
    },
    {
      title: "Beef Tacos",
      description: "Traditional beef tacos with homemade salsa, lettuce, and shredded cheese.",
      imgSrc: "./download.jpg",
      meats: ["beef"],
      vegetables: ["lettuce", "tomato", "onion"],
      colors: ["green", "red"],
      isVegan: false,
      isVegetarian: false
    },
    {
      title: "Lentil Soup",
      description: "Hearty and comforting lentil soup with carrots and celery.",
      imgSrc: "./download.jpg",
      meats: [],
      vegetables: ["lentils", "carrot", "celery"],
      colors: ["orange", "green"],
      isVegan: true,
      isVegetarian: true
    },
    {
      title: "Shrimp Scampi",
      description: "Succulent shrimp cooked in garlic butter and served over linguine.",
      imgSrc: "./download.jpg",
      meats: ["shrimp"],
      vegetables: ["parsley"],
      colors: ["white", "green"],
      isVegan: false,
      isVegetarian: false
    },
    {
      title: "Vegetarian Pizza",
      description: "A delicious pizza topped with fresh tomatoes, spinach, and mushrooms.",
      imgSrc: "./download.jpg",
      meats: [],
      vegetables: ["tomato", "spinach", "mushrooms"],
      colors: ["red", "green", "brown"],
      isVegan: false,
      isVegetarian: true
    }
  ];

  const [data, setData] = useState(recipes)
  const [savedItems, setSavedItems] = useState([])
  const [filters, setFilters] = useState({
    vegan: false,
    vegetarian: false,
    meats: []
  });

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "vegan" || name === "vegetarian") {
      setFilters((prev) => ({
        ...prev,
        [name]: checked
      }));
    } else if (name === "meats") {
      setFilters((prev) => ({
        ...prev,
        meats: checked
          ? [...prev.meats, value] 
          : prev.meats.filter((meat) => meat !== value)
      }))
    }
  }
  
  const filteredData = data.filter((recipe) => {
    if (filters.vegan && !recipe.isVegan) return false
    if (filters.vegetarian && !recipe.isVegetarian) return false
    if (filters.meats.length && !filters.meats.some((meat) => recipe.meats.includes(meat))) return false
    return true;
  });

  const saveRecipie = (recipie) => {
   
    setSavedItems((prev)=> {
      if (savedItems.includes(recipie)) {
        return prev
      }
      return [...prev, recipie]
    })
  }


  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="containerForPage">
        <div className="filterSection">
          <p><b>Filter Menu</b></p>
            <label>
              <input
                type="checkbox"
                name="vegan"
                checked={filters.vegan}
                onChange={handleFilterChange}
              />
              Is Vegan
            </label>
            <label>
              <input
                type="checkbox"
                name="vegetarian"
                checked={filters.vegetarian}
                onChange={handleFilterChange}
              />
              Is Vegetarian
            </label>
            <h4>Meats:</h4>
            <label>
              <input
                type="checkbox"
                name="meats"
                value="chicken"
                onChange={handleFilterChange}
              />
              Has Chicken
            </label>
            <label>
          <input
            type="checkbox"
            name="meats"
            value="beef"
            onChange={handleFilterChange}
          />
          Has Beef
          </label>
          <label>
            <input
              type="checkbox"
              name="meats"
              value="pork"
              onChange={handleFilterChange}
            />
            Has Pork
          </label>
          </div>
        <div className="mainSection">
          {filteredData.map((recipie, idx) => {
            return(
              <RecipieCard key={idx} onClick={() => saveRecipie(recipie)} data={recipie}></RecipieCard>
            )
          })}
        </div>
        <div className="savedSection">
          {savedItems.map((recipie) => {
            return (
              <SavedRecipie data={recipie}></SavedRecipie>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
