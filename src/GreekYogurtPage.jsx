import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function GreekYogurtPage() {
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('grams');
  const [result, setResult] = useState(null);

  const proteinPer = {
    grams: 0.1000,
    serving: 10
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
      ? Math.round(quantity * 0.59)
      : Math.round(quantity * 59);

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
          <span className="text-gray-900 ml-1">Greek Yogurt</span>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white mb-8">
          <h1 className="text-4xl font-bold mb-4">How Much Protein in Greek Yogurt?</h1>
          <div className="text-6xl font-bold mb-2">10g</div>
          <div className="text-xl text-indigo-100">per 100g</div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-gray-900 mb-2">10g</div>
            <div className="text-gray-600">protein per 100g</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-gray-900 mb-2">59</div>
            <div className="text-gray-600">calories per 100g</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-gray-900 mb-2">0.4g</div>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Greek Yogurt</h2>
          <p className="text-gray-700 mb-6">
            Greek Yogurt is a nutritious food that provides 10g of protein per 100g serving. 
            With 59 calories per 100g, it's a relatively low-calorie protein source.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Nutritional Profile</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li><strong>Protein:</strong> 10g per 100g</li>
            <li><strong>Calories:</strong> 59 per 100g</li>
            <li><strong>Fat:</strong> 0.4g per 100g</li>
            <li><strong>Protein-to-Calorie Ratio:</strong> 16.9%</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-3">How Greek Yogurt Fits Your Daily Protein Needs</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">For 54g daily protein goal:</span>
                <span className="text-indigo-600 font-semibold">540g of Greek Yogurt</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">For 109g daily protein goal:</span>
                <span className="text-indigo-600 font-semibold">1090g of Greek Yogurt</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">For 150g daily protein goal:</span>
                <span className="text-indigo-600 font-semibold">1500g of Greek Yogurt</span>
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
}