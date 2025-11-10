import React, { useState } from 'react';
import { Calculator, Activity, Target, TrendingUp } from 'lucide-react';

export default function ProteinCalculator() {
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('lbs');
  const [activity, setActivity] = useState('moderate');
  const [goal, setGoal] = useState('maintain');
  const [result, setResult] = useState(null);

  const activityLevels = {
    sedentary: { label: 'Sedentary (little/no exercise)', multiplier: 0.8 },
    light: { label: 'Light (1-3 days/week)', multiplier: 1.0 },
    moderate: { label: 'Moderate (3-5 days/week)', multiplier: 1.2 },
    active: { label: 'Very Active (6-7 days/week)', multiplier: 1.4 },
    athlete: { label: 'Athlete (2x/day)', multiplier: 1.6 }
  };

  const goals = {
    lose: { label: 'Lose Weight', multiplier: 1.0, icon: TrendingUp },
    maintain: { label: 'Maintain Weight', multiplier: 1.0, icon: Target },
    gain: { label: 'Build Muscle', multiplier: 1.2, icon: Activity }
  };

  const calculateProtein = () => {
    if (!weight || weight <= 0) {
      alert('Please enter a valid weight');
      return;
    }

    // Convert to kg if needed
    let weightKg = unit === 'lbs' ? weight * 0.453592 : parseFloat(weight);
    
    // Base calculation: 1.6-2.2g per kg for most people
    let baseProtein = weightKg * 1.8;
    
    // Adjust for activity
    baseProtein *= activityLevels[activity].multiplier;
    
    // Adjust for goal
    baseProtein *= goals[goal].multiplier;
    
    // Calculate range (±10%)
    const min = Math.round(baseProtein * 0.9);
    const max = Math.round(baseProtein * 1.1);
    const daily = Math.round(baseProtein);
    
    // Meals breakdown
    const perMeal = Math.round(daily / 3);
    
    setResult({
      daily,
      min,
      max,
      perMeal,
      weightKg: Math.round(weightKg)
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Protein Calculator
          </h1>
          <p className="text-gray-600 text-lg">
            Calculate your daily protein needs based on your goals
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
          {/* Weight Input */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Weight
            </label>
            <div className="flex gap-3">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
              />
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg font-medium"
              >
                <option value="lbs">lbs</option>
                <option value="kg">kg</option>
              </select>
            </div>
          </div>

          {/* Activity Level */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Activity Level
            </label>
            <div className="space-y-2">
              {Object.entries(activityLevels).map(([key, { label }]) => (
                <label
                  key={key}
                  className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition ${
                    activity === key
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="activity"
                    value={key}
                    checked={activity === key}
                    onChange={(e) => setActivity(e.target.value)}
                    className="w-4 h-4 text-indigo-600"
                  />
                  <span className="ml-3 text-gray-700">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Goal */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Your Goal
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {Object.entries(goals).map(([key, { label, icon: Icon }]) => (
                <label
                  key={key}
                  className={`flex flex-col items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                    goal === key
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="goal"
                    value={key}
                    checked={goal === key}
                    onChange={(e) => setGoal(e.target.value)}
                    className="sr-only"
                  />
                  <Icon className={`w-6 h-6 mb-2 ${goal === key ? 'text-indigo-600' : 'text-gray-400'}`} />
                  <span className="text-sm font-medium text-gray-700 text-center">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateProtein}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-lg transition text-lg shadow-lg hover:shadow-xl"
          >
            Calculate My Protein Needs
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Your Daily Protein Target
            </h2>
            
            {/* Main Result */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 mb-6 text-center">
              <div className="text-white text-6xl font-bold mb-2">
                {result.daily}g
              </div>
              <div className="text-indigo-100 text-lg">
                per day
              </div>
              <div className="text-indigo-200 text-sm mt-2">
                Range: {result.min}g - {result.max}g
              </div>
            </div>

            {/* Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {result.perMeal}g
                </div>
                <div className="text-gray-600 text-sm">per meal (3 meals)</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {Math.round(result.daily / result.weightKg * 10) / 10}g
                </div>
                <div className="text-gray-600 text-sm">per kg body weight</div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-gray-900 mb-2">💡 Quick Tips:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Spread protein evenly across meals for best results</li>
                <li>• Aim for 20-40g per meal to maximize muscle protein synthesis</li>
                <li>• Include protein within 2 hours after workouts</li>
                <li>• Good sources: chicken, fish, eggs, Greek yogurt, legumes, tofu</li>
              </ul>
            </div>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>This calculator uses science-based formulas for active individuals.</p>
          <p className="mt-1">Consult a nutritionist for personalized advice.</p>
        </div>
      </div>
    </div>
  );
}
