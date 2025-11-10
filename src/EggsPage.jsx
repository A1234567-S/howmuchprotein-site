import React, { useState } from 'react';
import { Calculator, Egg } from 'lucide-react';

export default function EggsProteinPage() {
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('eggs');
  const [result, setResult] = useState(null);

  // Protein values per unit
  const proteinPer = {
    eggs: 6,        // per whole egg
    whites: 3.6,    // per egg white
    yolks: 2.7,     // per egg yolk
    grams: 0.13     // per gram of whole egg
  };

  const calculateProtein = () => {
    if (!quantity || quantity <= 0) {
      alert('Please enter a valid quantity');
      return;
    }

    const protein = Math.round(quantity * proteinPer[unit] * 10) / 10;
    const calories = unit === 'eggs' ? Math.round(quantity * 71) :
                    unit === 'whites' ? Math.round(quantity * 17) :
                    unit === 'yolks' ? Math.round(quantity * 54) :
                    Math.round(quantity * 1.43);

    setResult({
      protein,
      calories,
      quantity,
      unit
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-4">
          <a href="/" className="hover:text-indigo-600">Home</a> / 
          <a href="/foods" className="hover:text-indigo-600 ml-1">Foods</a> / 
          <span className="text-gray-900 ml-1">Eggs</span>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Egg className="w-12 h-12" />
            <h1 className="text-4xl font-bold">How Much Protein in Eggs?</h1>
          </div>
          <div className="text-6xl font-bold mb-2">6g</div>
          <div className="text-xl text-orange-100">per large egg</div>
        </div>

        {/* Quick Facts */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-gray-900 mb-2">13g</div>
            <div className="text-gray-600">per 100g</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-gray-900 mb-2">71</div>
            <div className="text-gray-600">calories per egg</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-gray-900 mb-2">5g</div>
            <div className="text-gray-600">fat per egg</div>
          </div>
        </div>

        {/* Interactive Calculator */}
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
              <option value="eggs">Whole Eggs</option>
              <option value="whites">Egg Whites</option>
              <option value="yolks">Egg Yolks</option>
              <option value="grams">Grams</option>
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
                <strong>{result.quantity} {unit === 'eggs' ? 'whole egg(s)' : 
                         unit === 'whites' ? 'egg white(s)' : 
                         unit === 'yolks' ? 'egg yolk(s)' : 
                         'grams'}</strong> contains {result.protein}g of protein and {result.calories} calories.
              </div>
            </div>
          )}
        </div>

        {/* Detailed Content */}
        <article className="bg-white rounded-2xl p-8 shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Protein Content in Different Parts</h2>
          <p className="text-gray-700 mb-6">
            Eggs are one of the most affordable and versatile sources of high-quality protein. Both the egg white and yolk 
            contain protein, but in different amounts. Understanding the protein distribution helps you customize your meals 
            based on your needs.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Part</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Protein</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Calories</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">1 whole large egg</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">6g</td>
                  <td className="px-6 py-4 text-sm text-gray-700">71 cal</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">1 egg white</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">3.6g</td>
                  <td className="px-6 py-4 text-sm text-gray-700">17 cal</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">1 egg yolk</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">2.7g</td>
                  <td className="px-6 py-4 text-sm text-gray-700">54 cal</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">100g (about 2 eggs)</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">13g</td>
                  <td className="px-6 py-4 text-sm text-gray-700">143 cal</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">2 egg whites</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">7.2g</td>
                  <td className="px-6 py-4 text-sm text-gray-700">34 cal</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Egg White vs Whole Egg: Which is Better?</h3>
          <p className="text-gray-700 mb-4">
            Both have benefits depending on your goals:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🥚 Whole Eggs</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ More total protein (6g vs 3.6g)</li>
                <li>✓ Contains all nutrients</li>
                <li>✓ Vitamins A, D, E, K in yolk</li>
                <li>✓ Choline for brain health</li>
                <li>⚠ Higher calories (71 vs 17)</li>
              </ul>
            </div>
            <div className="bg-green-50 p-5 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">⚪ Egg Whites</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Very low calorie (17 cal)</li>
                <li>✓ Zero fat</li>
                <li>✓ Zero cholesterol</li>
                <li>✓ Great for cutting weight</li>
                <li>⚠ Missing yolk nutrients</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="text-gray-700">
              <strong>Pro Tip:</strong> For weight loss, use 1 whole egg + 2-3 egg whites. You get the nutrients from the yolk 
              plus extra protein from whites without too many calories.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Nutritional Benefits Beyond Protein</h3>
          <p className="text-gray-700 mb-4">Eggs are incredibly nutritious. Beyond protein, they provide:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li><strong>Vitamin B12</strong> - Essential for nerve function and red blood cell production</li>
            <li><strong>Choline</strong> - Critical for brain development and function</li>
            <li><strong>Selenium</strong> - Powerful antioxidant that supports immune health</li>
            <li><strong>Vitamin D</strong> - Important for bone health and immune function</li>
            <li><strong>Lutein & Zeaxanthin</strong> - Protect eye health and reduce risk of cataracts</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-3">How Eggs Fit Your Daily Protein Needs</h3>
          <p className="text-gray-700 mb-4">
            One large egg provides 6g of protein. Here's how many eggs you'd need for different protein goals:
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">To get 20g protein (1 meal):</span>
                <span className="text-indigo-600 font-semibold">3-4 eggs</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">To get 30g protein (post-workout):</span>
                <span className="text-indigo-600 font-semibold">5 eggs</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">150 lb person's daily need (109g):</span>
                <span className="text-indigo-600 font-semibold">18 eggs (not recommended!)</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Note: While eggs are great protein sources, variety is key. Combine eggs with other protein sources throughout the day.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Best Ways to Prepare Eggs</h3>
          <p className="text-gray-700 mb-4">All cooking methods preserve protein content. Choose based on your health goals:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li><strong>Boiled</strong> - Healthiest option, no added fat, easy to prep in batches</li>
            <li><strong>Poached</strong> - Elegant and healthy, great for breakfast</li>
            <li><strong>Scrambled</strong> - Quick and versatile, use cooking spray instead of butter</li>
            <li><strong>Omelet</strong> - Perfect vehicle for veggies and extra protein</li>
            <li><strong>Baked</strong> - Great for meal prep (egg muffins, frittatas)</li>
            <li><strong>Avoid:</strong> Deep-frying adds unnecessary calories and unhealthy fats</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-gray-700">
              <strong>Food Safety:</strong> Always cook eggs thoroughly. Raw or undercooked eggs can contain salmonella bacteria. 
              Internal temperature should reach 160°F (71°C).
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Calculate Your Daily Protein Needs</h3>
            <p className="text-indigo-100 mb-4">Find out exactly how much protein you need based on your weight, activity level, and goals.</p>
            <a href="/" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
              Use Protein Calculator →
            </a>
          </div>
        </article>

        {/* Related Foods */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Compare with Other High-Protein Foods</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/foods/chicken-breast" className="block p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 transition">
              <div className="font-semibold text-gray-900">Chicken Breast</div>
              <div className="text-2xl font-bold text-indigo-600">31g</div>
              <div className="text-sm text-gray-600">per 100g</div>
            </a>
            <a href="/foods/greek-yogurt" className="block p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 transition">
              <div className="font-semibold text-gray-900">Greek Yogurt</div>
              <div className="text-2xl font-bold text-indigo-600">10g</div>
              <div className="text-sm text-gray-600">per 100g</div>
            </a>
            <a href="/foods/salmon" className="block p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 transition">
              <div className="font-semibold text-gray-900">Salmon</div>
              <div className="text-2xl font-bold text-indigo-600">25g</div>
              <div className="text-sm text-gray-600">per 100g</div>
            </a>
            <a href="/foods/cottage-cheese" className="block p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 transition">
              <div className="font-semibold text-gray-900">Cottage Cheese</div>
              <div className="text-2xl font-bold text-indigo-600">11g</div>
              <div className="text-sm text-gray-600">per 100g</div>
            </a>
            <a href="/foods/tuna" className="block p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 transition">
              <div className="font-semibold text-gray-900">Tuna</div>
              <div className="text-2xl font-bold text-indigo-600">23g</div>
              <div className="text-sm text-gray-600">per 100g</div>
            </a>
            <a href="/foods" className="block p-4 border-2 border-indigo-500 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition text-center">
              <div className="font-semibold text-indigo-600">View All Foods →</div>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
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
}
