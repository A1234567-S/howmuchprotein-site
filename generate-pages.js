const fs = require('fs');
const path = require('path');

// Your CSV data (paste your full CSV here)
const csvData = `food_name,protein_per_100g,calories_per_100g,fat_per_100g,url_slug
Chicken Breast,31,165,3.6,chicken-breast
Eggs,13,143,10,eggs
Salmon,25,206,13,salmon
Tuna,23,116,1,tuna
Greek Yogurt,10,59,0.4,greek-yogurt
Paneer,18,265,20,paneer
Tofu,8,76,4.8,tofu
Lentils,9,116,0.4,lentils
Chickpeas,9,164,2.6,chickpeas
Kidney Beans,8.7,127,0.5,kidney-beans
Black Beans,8.9,132,0.5,black-beans
Peanuts,26,567,49,peanuts
Almonds,21,579,50,almonds
Walnuts,15,654,65,walnuts
Cashews,18,553,44,cashews
Pumpkin Seeds,19,559,49,pumpkin-seeds
Sunflower Seeds,21,584,51,sunflower-seeds
Flaxseeds,18,534,42,flaxseeds
Chia Seeds,17,486,31,chia-seeds
Oats,13,389,7,oats
Quinoa,14,368,6,quinoa
Brown Rice,7,111,0.9,brown-rice
White Rice,2.7,130,0.3,white-rice
Whole Wheat Bread,13,247,4.2,whole-wheat-bread
Avocado,2,160,15,avocado
Broccoli,2.8,55,0.6,broccoli
Spinach,2.9,23,0.4,spinach
Kale,4.3,49,0.9,kale
Mushrooms,3.1,22,0.3,mushrooms
Potatoes,2,77,0.1,potatoes
Sweet Potatoes,1.6,86,0.1,sweet-potatoes
Egg Whites,11,52,0.2,egg-whites
Whole Milk,3.4,61,3.3,whole-milk
Skim Milk,3.4,34,0.1,skim-milk
Soy Milk,3.3,43,2,soy-milk
Cottage Cheese,11,98,4.3,cottage-cheese
Cheddar Cheese,25,402,33,cheddar-cheese
Mozzarella,22,300,22,mozzarella
Yogurt,10,59,0.4,yogurt
Tempeh,19,195,11,tempeh
Edamame,11,121,5,edamame
Peas,5,81,0.4,peas
Corn,3.2,96,1.5,corn
Shrimp,24,99,0.3,shrimp
Crab,19,97,1.5,crab
Lobster,19,89,0.9,lobster
Prawns,21,85,0.5,prawns
Beef,26,250,15,beef
Lamb,25,294,21,lamb
Pork,27,242,14,pork
Turkey,29,189,7,turkey
Duck,23,337,28,duck
Cod,18,82,0.7,cod
Sardines,25,208,11.5,sardines
Anchovies,29,210,10,anchovies
Mackerel,20,305,25,mackerel
Tilapia,26,129,2.7,tilapia
Catfish,18,105,2.9,catfish
Scallops,24,137,1.5,scallops
Oysters,9,68,2,oysters
Clams,14,74,0.9,clams
Octopus,29,164,2.1,octopus
Squid,16,92,1.4,squid
Duck Eggs,13,185,14,duck-eggs
Goat Cheese,22,364,30,goat-cheese
Ricotta,11,174,13,ricotta
Parmesan,35,431,29,parmesan
Cottage Cheese (Low Fat),11,98,4,cottage-cheese-lowfat
Protein Powder,80,400,4,protein-powder
Whey Protein,90,370,3,whey-protein
Pea Protein,75,380,6,pea-protein
Brown Rice Protein,70,360,5,brown-rice-protein
Hemp Protein,50,340,9,hemp-protein
Seitan,25,370,2,seitan
Egg Noodles,12,384,3.3,egg-noodles
Pasta,13,371,1.5,pasta
Barley,12,354,2.3,barley
Millet,11,378,4.2,millet
Buckwheat,13,343,3.4,buckwheat
Amaranth,14,371,7,amaranth
Couscous,12,376,0.6,couscous
Farro,15,375,2,farro
Teff,13,367,2.4,teff
Soybeans,36,446,20,soybeans
Toor Dal,22,343,1.7,toor-dal
Moong Dal,24,347,1.2,moong-dal
Masoor Dal,25,360,1.3,masoor-dal
Urad Dal,27,341,1.6,urad-dal
Rajma,24,333,1.1,rajma
Chana Dal,22,364,2.1,chana-dal
Green Gram,23,347,1.3,green-gram
Horse Gram,22,321,0.9,horse-gram
Bengal Gram,20,360,2.5,bengal-gram
Soya Chunks,52,345,0.5,soya-chunks
Sprouts,4,40,0.5,sprouts
Egg Omelette,12,154,11,egg-omelette
Protein Bar,20,250,8,protein-bar
Paneer Bhurji,18,290,22,paneer-bhurji
Cottage Cheese Toast,14,220,9,cottage-cheese-toast
Protein Shake,30,200,2,protein-shake`;

// Parse CSV
function parseCSV(csv) {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',');
  return lines.slice(1).map(line => {
    const values = line.split(',');
    return {
      name: values[0],
      protein: parseFloat(values[1]),
      calories: parseFloat(values[2]),
      fat: parseFloat(values[3]),
      slug: values[4]
    };
  });
}

// Generate component name from food name
function getComponentName(foodName) {
  return foodName.replace(/[^a-zA-Z0-9]/g, '') + 'Page';
}

// Generate food page component
function generateFoodPage(food) {
  const componentName = getComponentName(food.name);
  const proteinPerGram = (food.protein / 100).toFixed(4);
  const caloriesPerGram = (food.calories / 100).toFixed(2);

  return `import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function ${componentName}() {
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('grams');
  const [result, setResult] = useState(null);

  const proteinPer = {
    grams: ${proteinPerGram},
    serving: ${food.protein}
  };

  const calculateProtein = () => {
    if (!quantity || quantity <= 0) {
      alert('Please enter a valid quantity');
      return;
    }

    const protein = unit === 'grams' 
      ? Math.round(quantity * proteinPer.grams * 10) / 10
      : Math.round(quantity * proteinPer.serving * 10) / 10;
    
    const calories = unit === 'grams'
      ? Math.round(quantity * ${caloriesPerGram})
      : Math.round(quantity * ${food.calories});

    setResult({ protein, calories, quantity, unit });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-indigo-600">HowMuchProtein.in</a>
          <div className="flex gap-6">
            <a href="/" className="text-gray-600 hover:text-indigo-600">Calculator</a>
            <a href="/foods" className="text-gray-600 hover:text-indigo-600">Foods</a>
            <a href="/faq" className="text-gray-600 hover:text-indigo-600">FAQ</a>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-sm text-gray-600 mb-4">
          <a href="/" className="hover:text-indigo-600">Home</a> / 
          <a href="/foods" className="hover:text-indigo-600 ml-1">Foods</a> / 
          <span className="text-gray-900 ml-1">${food.name}</span>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white mb-8">
          <h1 className="text-4xl font-bold mb-4">How Much Protein in ${food.name}?</h1>
          <div className="text-6xl font-bold mb-2">${food.protein}g</div>
          <div className="text-xl text-indigo-100">per 100g</div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-gray-900 mb-2">${food.protein}g</div>
            <div className="text-gray-600">protein per 100g</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-gray-900 mb-2">${food.calories}</div>
            <div className="text-gray-600">calories per 100g</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-gray-900 mb-2">${food.fat}g</div>
            <div className="text-gray-600">fat per 100g</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-xl mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Calculate Protein in Your Serving</h2>
          </div>
          
          <div className="flex gap-3 mb-4">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter quantity"
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
            />
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg font-medium"
            >
              <option value="grams">Grams</option>
              <option value="serving">100g Servings</option>
            </select>
            <button
              onClick={calculateProtein}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Calculate
            </button>
          </div>

          {result && (
            <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-200">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Protein Content</div>
                  <div className="text-4xl font-bold text-indigo-600">{result.protein}g</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Calories</div>
                  <div className="text-4xl font-bold text-gray-900">{result.calories}</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-700">
                <strong>{result.quantity} {result.unit}</strong> contains {result.protein}g of protein and {result.calories} calories.
              </div>
            </div>
          )}
        </div>

        <article className="bg-white rounded-2xl p-8 shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About ${food.name}</h2>
          <p className="text-gray-700 mb-6">
            ${food.name} is a nutritious food that provides ${food.protein}g of protein per 100g serving. 
            With ${food.calories} calories per 100g, it's ${food.calories < 150 ? 'a relatively low-calorie' : 'an energy-dense'} protein source.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Nutritional Profile</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li><strong>Protein:</strong> ${food.protein}g per 100g</li>
            <li><strong>Calories:</strong> ${food.calories} per 100g</li>
            <li><strong>Fat:</strong> ${food.fat}g per 100g</li>
            <li><strong>Protein-to-Calorie Ratio:</strong> ${((food.protein / food.calories) * 100).toFixed(1)}%</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-3">How ${food.name} Fits Your Daily Protein Needs</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">For 54g daily protein goal:</span>
                <span className="text-indigo-600 font-semibold">${Math.round(5400 / food.protein)}g of ${food.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">For 109g daily protein goal:</span>
                <span className="text-indigo-600 font-semibold">${Math.round(10900 / food.protein)}g of ${food.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">For 150g daily protein goal:</span>
                <span className="text-indigo-600 font-semibold">${Math.round(15000 / food.protein)}g of ${food.name}</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Calculate Your Daily Protein Needs</h3>
            <p className="text-indigo-100 mb-4">Find out exactly how much protein you need based on your goals.</p>
            <a href="/" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
              Use Protein Calculator →
            </a>
          </div>
        </article>

        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Compare with Other High-Protein Foods</h2>
          <div className="text-center py-8 text-gray-600">
            <a href="/foods" className="text-indigo-600 hover:text-indigo-700 font-semibold">Browse All Protein-Rich Foods →</a>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 HowMuchProtein.in - Your Guide to Daily Protein Needs</p>
          <div className="mt-4 space-x-4">
            <a href="/privacy" className="text-gray-400 hover:text-white">Privacy</a>
            <a href="/terms" className="text-gray-400 hover:text-white">Terms</a>
            <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}`;
}

// Generate routing code for main.jsx
function generateRoutingCode(foods) {
  const imports = foods.map(food => {
    const componentName = getComponentName(food.name);
    return `import ${componentName} from './${componentName}';`;
  }).join('\n');

  const routes = foods.map(food => {
    const componentName = getComponentName(food.name);
    return `        <Route path="/foods/${food.slug}" element={<${componentName} />} />`;
  }).join('\n');

  return `// ========================================
// ADD THESE IMPORTS TO YOUR main.jsx
// (Add after your existing imports)
// ========================================

${imports}

// ========================================
// ADD THESE ROUTES INSIDE YOUR <Routes>
// (Add after your existing routes)
// ========================================

${routes}

// ========================================
// COMPLETE main.jsx EXAMPLE:
// ========================================

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
${imports}
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
${routes}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)`;
}

// Main function
function main() {
  console.log('🚀 Starting Food Page Generator...\n');

  // Parse CSV
  const foods = parseCSV(csvData);
  console.log(`📊 Found ${foods.length} foods in CSV\n`);

  // Create src directory if it doesn't exist
  const srcDir = path.join(process.cwd(), 'src');
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir);
    console.log('📁 Created src/ directory\n');
  }

  // Generate pages
  console.log('📝 Generating food pages...\n');
  let successCount = 0;
  let errorCount = 0;

  foods.forEach((food, index) => {
    try {
      const componentName = getComponentName(food.name);
      const filename = `${componentName}.jsx`;
      const filepath = path.join(srcDir, filename);
      const content = generateFoodPage(food);

      fs.writeFileSync(filepath, content, 'utf8');
      successCount++;
      console.log(`✅ ${index + 1}/${foods.length}: Created ${filename}`);
    } catch (error) {
      errorCount++;
      console.log(`❌ ${index + 1}/${foods.length}: Failed to create ${food.name} - ${error.message}`);
    }
  });

  // Generate routing code
  console.log('\n📝 Generating routing code...\n');
  const routingCode = generateRoutingCode(foods);
  const routingFilepath = path.join(process.cwd(), 'ROUTING_CODE.txt');
  fs.writeFileSync(routingFilepath, routingCode, 'utf8');
  console.log('✅ Created ROUTING_CODE.txt\n');

  // Summary
  console.log('========================================');
  console.log('✨ GENERATION COMPLETE!');
  console.log('========================================');
  console.log(`✅ Successfully created: ${successCount} pages`);
  if (errorCount > 0) {
    console.log(`❌ Failed: ${errorCount} pages`);
  }
  console.log('\n📋 Next Steps:');
  console.log('1. Check the src/ folder for all generated .jsx files');
  console.log('2. Open ROUTING_CODE.txt and copy the code');
  console.log('3. Update your src/main.jsx with the routing code');
  console.log('4. Run: git add .');
  console.log('5. Run: git commit -m "Add 102 food pages"');
  console.log('6. Run: git push');
  console.log('7. Manually trigger deploy on Netlify');
  console.log('\n🎉 All done! Your 102 food pages are ready!\n');
}

// Run the script
main();
