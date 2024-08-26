// server.js
const express = require('express');
var cors = require('cors')

const app = express();

app.use(cors())


const products = {
  message: 'Hello, this is your JSON response!',
  status: 'success',
  products: [
      {
      "id": 1,
      "name": "Organic Almonds",
      "description": "High-quality organic almonds sourced from sustainable farms.",
      "price": 15.99,
      "category": "Nuts",
      "imageUrl": "https://nuttyyogi.com/cdn/shop/products/Almonds.jpg?v=1606373738"
    },
    {
      "id": 2,
      "name": "Whole Grain Oats",
      "description": "Healthy whole grain oats perfect for breakfast and baking.",
      "price": 8.99,
      "category": "Grains",
      "imageUrl": "https://media.healthyfood.com/wp-content/uploads/2017/03/Ask-the-experts-Wholegrain-rice-and-oats.jpg"
    },
    {
      "id": 3,
      "name": "Organic Honey",
      "description": "Pure organic honey with no additives, straight from the hive.",
      "price": 12.99,
      "category": "Sweeteners",
      "imageUrl": "https://i.etsystatic.com/34674631/r/il/9f68b1/5812899464/il_fullxfull.5812899464_gfsl.jpg"
    },
    {
      "id": 4,
      "name": "Quinoa",
      "description": "Versatile and nutritious organic quinoa for salads and side dishes.",
      "price": 10.99,
      "category": "Grains",
      "imageUrl": "https://www.thespruceeats.com/thmb/056dZw_MvkyU6T-CVLmsnKfc5cg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-173429447-574861083df78ccee1b8bf66.jpg"
    },
    {
      "id": 5,
      "name": "Chia Seeds",
      "description": "Organic chia seeds rich in omega-3 fatty acids and fiber.",
      "price": 9.99,
      "category": "Seeds",
      "imageUrl": "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2021/11/chia_seeds_GettyImages1282395572_Thumb-732x549.jpg"
    },
    {
      "id": 6,
      "name": "Coconut Oil",
      "description": "Cold-pressed organic coconut oil, great for cooking and skincare.",
      "price": 14.99,
      "category": "Oils",
      "imageUrl": "https://www.greendna.in/cdn/shop/products/coconut-oil_11_640x.jpg?v=1593247466"
    },
    {
      "id": 7,
      "name": "Green Tea",
      "description": "Organic green tea leaves for a refreshing and healthy beverage.",
      "price": 7.99,
      "category": "Beverages",
      "imageUrl": "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/matcha-green-tea-1296x728-feature.jpg?w=1155&h=1528"
    },
    {
      "id": 8,
      "name": "Dried Apricots",
      "description": "Naturally sweet organic dried apricots, perfect for snacking.",
      "price": 11.99,
      "category": "Dried Fruits",
      "imageUrl": "https://www.excaliburdehydrator-recipes.com/wp-content/uploads/2018/01/DriedApricots_800x800.jpg"
    },
    {
      "id": 9,
      "name": "Organic Spinach",
      "description": "Fresh and nutrient-rich organic spinach leaves.",
      "price": 3.99,
      "category": "Vegetables",
      "imageUrl": "https://www.orgpick.com/cdn/shop/products/spnach_large_01cac1a1-246f-433c-b02b-e2c7986fe95c.jpg?v=1569550040"
    },
    {
      "id": 10,
      "name": "Organic Avocados",
      "description": "Creamy and delicious organic avocados, perfect for salads and sandwiches.",
      "price": 6.99,
      "category": "Fruits",
      "imageUrl": "https://www.melissas.com/cdn/shop/products/image-of-organic-avocado-organics-28658515607596_600x600.jpg?v=1627982727"
    },
    {
      "id": 11,
      "name": "Organic Walnuts",
      "description": "Nutritious organic walnuts with a rich, earthy flavor.",
      "price": 16.99,
      "category": "Nuts",
      "imageUrl": "https://mdpiblog.wordpress.sciforum.net/wp-content/uploads/sites/4/2023/01/walnuts.jpg"
    },
    {
      "id": 12,
      "name": "Barley",
      "description": "Organic barley for soups, stews, and as a side dish.",
      "price": 7.49,
      "category": "Grains",
      "imageUrl": "https://bakerpedia.com/wp-content/uploads/2018/11/Barley_baking-ingredients-e1543524143272.jpg"
    },
    // {
    //   "id": 13,
    //   "name": "Maple Syrup",
    //   "description": "Pure organic maple syrup for a natural sweetener.",
    //   "price": 13.49,
    //   "category": "Sweeteners",
    //   "imageUrl": "https://www.sweetorganic.com/images/maple_syrup.jpg"
    // },
    // {
    //   "id": 14,
    //   "name": "Chickpeas",
    //   "description": "Organic chickpeas, perfect for making hummus or adding to salads.",
    //   "price": 9.49,
    //   "category": "Legumes",
    //   "imageUrl": "https://www.healthybeans.com/images/chickpeas.jpg"
    // },
    // {
    //   "id": 15,
    //   "name": "Flax Seeds",
    //   "description": "Rich in omega-3, these organic flax seeds are great for smoothies.",
    //   "price": 6.99,
    //   "category": "Seeds",
    //   "imageUrl": "https://www.superseeds.com/images/flax_seeds.jpg"
    // },
    // {
    //   "id": 16,
    //   "name": "Olive Oil",
    //   "description": "Extra virgin organic olive oil for cooking and dressings.",
    //   "price": 17.99,
    //   "category": "Oils",
    //   "imageUrl": "https://www.healthyolive.com/images/olive_oil.jpg"
    // },
    // {
    //   "id": 17,
    //   "name": "Herbal Tea",
    //   "description": "Organic herbal tea with a blend of natural herbs.",
    //   "price": 8.49,
    //   "category": "Beverages",
    //   "imageUrl": "https://www.herbalbeverages.com/images/herbal_tea.jpg"
    // },
    // {
    //   "id": 18,
    //   "name": "Dates",
    //   "description": "Naturally sweet and organic dates, ideal for snacking.",
    //   "price": 11.49,
    //   "category": "Dried Fruits",
    //   "imageUrl": "https://www.organicdates.com/images/dates.jpg"
    // },
    // {
    //   "id": 19,
    //   "name": "Organic Kale",
    //   "description": "Nutrient-dense organic kale, perfect for salads and smoothies.",
    //   "price": 4.49,
    //   "category": "Vegetables",
    //   "imageUrl": "https://www.freshkale.com/images/kale.jpg"
    // },
    // {
    //   "id": 20,
    //   "name": "Organic Apples",
    //   "description": "Crisp and juicy organic apples, great for snacks and desserts.",
    //   "price": 5.99,
    //   "category": "Fruits",
    //   "imageUrl": "https://www.freshapples.com/images/apples.jpg"
    // },
    // {
    //   "id": 21,
    //   "name": "Pumpkin Seeds",
    //   "description": "Organic pumpkin seeds, rich in nutrients and flavor.",
    //   "price": 8.99,
    //   "category": "Seeds",
    //   "imageUrl": "https://www.nutritionpumpkin.com/images/pumpkin_seeds.jpg"
    // },
    // {
    //   "id": 22,
    //   "name": "Farro",
    //   "description": "Organic farro, an ancient grain for salads and soups.",
    //   "price": 9.99,
    //   "category": "Grains",
    //   "imageUrl": "https://www.ancientgrains.com/images/farro.jpg"
    // },
    // {
    //   "id": 23,
    //   "name": "Agave Syrup",
    //   "description": "Natural agave syrup, a sweet alternative to honey.",
    //   "price": 11.49,
    //   "category": "Sweeteners",
    //   "imageUrl": "https://www.naturalsweeteners.com/images/agave_syrup.jpg"
    // },
    // {
    //   "id": 24,
    //   "name": "Lentils",
    //   "description": "Organic lentils, ideal for soups, stews, and salads.",
    //   "price": 7.49,
    //   "category": "Legumes",
    //   "imageUrl": "https://www.healthylentils.com/images/lentils.jpg"
    // },
    // {
    //   "id": 25,
    //   "name": "Sesame Seeds",
    //   "description": "Organic sesame seeds, perfect for adding crunch to dishes.",
    //   "price": 6.99,
    //   "category": "Seeds",
    //   "imageUrl": "https://www.seaseseeds.com/images/sesame_seeds.jpg"
    // },
    // {
    //   "id": 26,
    //   "name": "Sunflower Oil",
    //   "description": "Pure organic sunflower oil for cooking and baking.",
    //   "price": 12.99,
    //   "category": "Oils",
    //   "imageUrl": "https://www.sunfloweroil.com/images/sunflower_oil.jpg"
    // },
    // {
    //   "id": 27,
    //   "name": "Chamomile Tea",
    //   "description": "Organic chamomile tea for a calming and soothing beverage.",
    //   "price": 7.99,
    //   "category": "Beverages",
    //   "imageUrl": "https://www.chamomilitea.com/images/chamomile_tea.jpg"
    // },
    // {
    //   "id": 28,
    //   "name": "Raisins",
    //   "description": "Organic raisins, sweet and chewy for snacking and baking.",
    //   "price": 9.49,
    //   "category": "Dried Fruits",
    //   "imageUrl": "https://www.naturalraisins.com/images/raisins.jpg"
    // },
    // {
    //   "id": 29,
    //   "name": "Beet Greens",
    //   "description": "Fresh organic beet greens, packed with nutrients.",
    //   "price": 4.99,
    //   "category": "Vegetables",
    //   "imageUrl": "https://www.freshbeetgreens.com/images/beet_greens.jpg"
    // },
    // {
    //   "id": 30,
    //   "name": "Pears",
    //   "description": "Organic pears, juicy and sweet for snacks and desserts.",
    //   "price": 6.49,
    //   "category": "Fruits",
    //   "imageUrl": "https://www.freshpears.com/images/pears.jpg"
    // },
    // {
    //   "id": 31,
    //   "name": "Hemp Seeds",
    //   "description": "Organic hemp seeds, rich in protein and essential fatty acids.",
    //   "price": 10.99,
    //   "category": "Seeds",
    //   "imageUrl": "https://www.nutritionhemp.com/images/hemp_seeds.jpg"
    // },
    // {
    //   "id": 32,
    //   "name": "Millet",
    //   "description": "Organic millet, a versatile grain for a variety of dishes.",
    //   "price": 7.99,
    //   "category": "Grains",
    //   "imageUrl": "https://www.ancientmillet.com/images/millet.jpg"
    // },
    // {
    //   "id": 33,
    //   "name": "Honeydew Syrup",
    //   "description": "Natural honeydew syrup, a sweet and fruity alternative.",
    //   "price": 14.49,
    //   "category": "Sweeteners",
    //   "imageUrl": "https://www.naturalhoneydew.com/images/honeydew_syrup.jpg"
    // },
    // {
    //   "id": 34,
    //   "name": "Black Beans",
    //   "description": "Organic black beans, perfect for soups, salads, and stews.",
    //   "price": 8.49,
    //   "category": "Legumes",
    //   "imageUrl": "https://www.healthblackbeans.com/images/black_beans.jpg"
    // },
    // {
    //   "id": 35,
    //   "name": "Poppy Seeds",
    //   "description": "Organic poppy seeds, great for baking and adding flavor.",
    //   "price": 7.99,
    //   "category": "Seeds",
    //   "imageUrl": "https://www.naturalpoppy.com/images/poppy_seeds.jpg"
    // },
    // {
    //   "id": 36,
    //   "name": "Grapeseed Oil",
    //   "description": "Organic grapeseed oil, ideal for high-heat cooking.",
    //   "price": 15.99,
    //   "category": "Oils",
    //   "imageUrl": "https://www.grapeseedoil.com/images/grapeseed_oil.jpg"
    // },
    // {
    //   "id": 37,
    //   "name": "Peppermint Tea",
    //   "description": "Organic peppermint tea for a refreshing and soothing drink.",
    //   "price": 8.49,
    //   "category": "Beverages",
    //   "imageUrl": "https://www.pepperminttea.com/images/peppermint_tea.jpg"
    // },
    // {
    //   "id": 38,
    //   "name": "Apricot Jam",
    //   "description": "Delicious organic apricot jam for spreads and desserts.",
    //   "price": 11.49,
    //   "category": "Sweeteners",
    //   "imageUrl": "https://www.organicjam.com/images/apricot_jam.jpg"
    // },
    // {
    //   "id": 39,
    //   "name": "Green Lentils",
    //   "description": "Organic green lentils, great for soups and salads.",
    //   "price": 8.99,
    //   "category": "Legumes",
    //   "imageUrl": "https://www.naturalgreenlentils.com/images/green_lentils.jpg"
    // },
    // {
    //   "id": 40,
    //   "name": "Cinnamon",
    //   "description": "Organic ground cinnamon, perfect for baking and seasoning.",
    //   "price": 5.99,
    //   "category": "Spices",
    //   "imageUrl": "https://www.naturalspices.com/images/cinnamon.jpg"
    // },
    // {
    //   "id": 41,
    //   "name": "Organic Cabbage",
    //   "description": "Fresh organic cabbage, great for salads and cooking.",
    //   "price": 3.49,
    //   "category": "Vegetables",
    //   "imageUrl": "https://www.freshcabbage.com/images/cabbage.jpg"
    // },
    // {
    //   "id": 42,
    //   "name": "Ginger Tea",
    //   "description": "Organic ginger tea for a warming and invigorating beverage.",
    //   "price": 9.49,
    //   "category": "Beverages",
    //   "imageUrl": "https://www.gingertea.com/images/ginger_tea.jpg"
    // },
    // {
    //   "id": 43,
    //   "name": "Sweet Potatoes",
    //   "description": "Organic sweet potatoes, perfect for roasting and baking.",
    //   "price": 5.99,
    //   "category": "Vegetables",
    //   "imageUrl": "https://www.freshsweetpotatoes.com/images/sweet_potatoes.jpg"
    // },
    // {
    //   "id": 44,
    //   "name": "Walnut Oil",
    //   "description": "Organic walnut oil, rich and nutty for dressings and cooking.",
    //   "price": 18.99,
    //   "category": "Oils",
    //   "imageUrl": "https://www.walnutoil.com/images/walnut_oil.jpg"
    // },
    // {
    //   "id": 45,
    //   "name": "Organic Pine Nuts",
    //   "description": "Sweet and nutty organic pine nuts for salads and cooking.",
    //   "price": 21.99,
    //   "category": "Nuts",
    //   "imageUrl": "https://www.organicpinenuts.com/images/pine_nuts.jpg"
    // },
    // {
    //   "id": 46,
    //   "name": "Brown Rice",
    //   "description": "Organic brown rice, a whole grain staple for various dishes.",
    //   "price": 9.49,
    //   "category": "Grains",
    //   "imageUrl": "https://www.brownrice.com/images/brown_rice.jpg"
    // },
    // {
    //   "id": 47,
    //   "name": "Date Syrup",
    //   "description": "Natural date syrup, a sweet and healthy alternative to sugar.",
    //   "price": 12.49,
    //   "category": "Sweeteners",
    //   "imageUrl": "https://www.datesyrup.com/images/date_syrup.jpg"
    // },
    // {
    //   "id": 48,
    //   "name": "Black Sesame Seeds",
    //   "description": "Organic black sesame seeds, perfect for adding a unique flavor.",
    //   "price": 7.99,
    //   "category": "Seeds",
    //   "imageUrl": "https://www.naturalblackseeds.com/images/black_sesame_seeds.jpg"
    // },
    // {
    //   "id": 49,
    //   "name": "Tumeric Powder",
    //   "description": "Organic turmeric powder, known for its health benefits and vibrant color.",
    //   "price": 8.99,
    //   "category": "Spices",
    //   "imageUrl": "https://www.organicspices.com/images/turmeric_powder.jpg"
    // },
    // {
    //   "id": 50,
    //   "name": "Organic Carrots",
    //   "description": "Fresh and crunchy organic carrots, ideal for snacks and cooking.",
    //   "price": 4.99,
    //   "category": "Vegetables",
    //   "imageUrl": "https://www.freshcarrots.com/images/carrots.jpg"
    // }
  ]
};


// Define a route that returns JSON
app.get('/api/products', (req, res) => {
    
    res.json(products);
});


app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.products.find(p => p.id === productId);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
