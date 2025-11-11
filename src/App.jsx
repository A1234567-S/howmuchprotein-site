import React, { useState, useEffect } from 'react';
import { Calculator, Activity, Target, TrendingUp, Globe } from 'lucide-react';
import Navigation from './Navigation'
import { Analytics } from '@vercel/analytics/react';

const translations = {
  en: {
    title: "Protein Calculator",
    subtitle: "Calculate your daily protein needs based on your goals",
    weight: "Your Weight",
    weightPlaceholder: "Enter weight",
    activityLevel: "Activity Level",
    activities: {
      sedentary: "Sedentary (little/no exercise)",
      light: "Light (1-3 days/week)",
      moderate: "Moderate (3-5 days/week)",
      active: "Very Active (6-7 days/week)",
      athlete: "Athlete (2x/day)"
    },
    goal: "Your Goal",
    goals: {
      lose: "Lose Weight",
      maintain: "Maintain Weight",
      gain: "Build Muscle"
    },
    calculate: "Calculate My Protein Needs",
    resultsTitle: "Your Daily Protein Target",
    perDay: "per day",
    range: "Range",
    perMeal: "per meal (3 meals)",
    perKg: "per kg body weight",
    tipsTitle: "Quick Tips:",
    tips: [
      "Spread protein evenly across meals for best results",
      "Aim for 20-40g per meal to maximize muscle protein synthesis",
      "Include protein within 2 hours after workouts",
      "Good sources: chicken, fish, eggs, Greek yogurt, legumes, tofu"
    ],
    disclaimer1: "This calculator uses science-based formulas for active individuals.",
    disclaimer2: "Consult a nutritionist for personalized advice.",
    seoTitle: "How Much Protein Do You Need Daily?",
    seoIntro1: "Protein is essential for building and repairing muscle tissue, supporting immune function, and maintaining overall health. Your daily protein needs depend on several factors including your body weight, activity level, and fitness goals.",
    seoIntro2: "The general recommendation for adults is 0.8 grams of protein per kilogram of body weight (0.36g per pound). However, if you're active or trying to build muscle, you'll need significantly more—typically between 1.6 to 2.2 grams per kilogram (0.7-1g per pound).",
    benefitsTitle: "Why Protein Matters",
    benefits: [
      { icon: "💪", title: "Muscle Building", desc: "Protein provides amino acids needed for muscle growth and repair after exercise." },
      { icon: "🔥", title: "Weight Management", desc: "High-protein diets increase satiety and boost metabolism, helping with fat loss." },
      { icon: "🛡️", title: "Immune Support", desc: "Antibodies and immune cells rely on adequate protein intake to function properly." },
      { icon: "🦴", title: "Bone Health", desc: "Protein supports bone density and helps maintain skeletal strength as you age." }
    ],
    requirementsTitle: "Protein Requirements by Activity Level",
    tableHeaders: ["Activity Level", "Protein Needs", "Example (150 lbs person)"],
    tableRows: [
      ["Sedentary", "0.8g/kg (0.36g/lb)", "54g per day"],
      ["Lightly Active", "1.2g/kg (0.55g/lb)", "82g per day"],
      ["Moderately Active", "1.6g/kg (0.73g/lb)", "109g per day"],
      ["Very Active", "2.0g/kg (0.91g/lb)", "136g per day"],
      ["Athlete/Bodybuilder", "2.2g/kg (1.0g/lb)", "150g per day"]
    ],
    foodsTitle: "Best High-Protein Foods",
    foodsIntro: "Meeting your daily protein target is easier when you know which foods pack the most protein per serving:",
    animalSources: "Animal Sources",
    plantSources: "Plant Sources",
    animalFoods: [
      "Chicken breast - 31g per 100g",
      "Lean beef - 26g per 100g",
      "Salmon - 25g per 100g",
      "Eggs - 6g per large egg",
      "Greek yogurt - 10g per 100g",
      "Cottage cheese - 11g per 100g"
    ],
    plantFoods: [
      "Lentils - 9g per 100g cooked",
      "Chickpeas - 8g per 100g cooked",
      "Tofu - 8g per 100g",
      "Quinoa - 4g per 100g cooked",
      "Almonds - 21g per 100g",
      "Peanut butter - 25g per 100g"
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "Can you eat too much protein?",
        a: "For healthy individuals, eating up to 2g per kg of body weight is safe. Extremely high intakes (3g+ per kg) may stress the kidneys in people with pre-existing kidney conditions. Most people don't need to worry about eating too much protein."
      },
      {
        q: "When should I eat protein?",
        a: "Distribute protein evenly throughout the day, aiming for 20-40g per meal. This maximizes muscle protein synthesis. Having protein within 2 hours after workouts is beneficial but not critical if you're meeting daily totals."
      },
      {
        q: "Do I need protein powder?",
        a: "No, protein powder is a convenient supplement but not necessary. Whole foods should be your primary protein source. Use protein powder as a supplement when you struggle to meet your daily target through food alone."
      },
      {
        q: "Is plant protein as good as animal protein?",
        a: "Plant proteins can be just as effective when you consume a variety of sources. Combine different plant proteins (beans + rice, hummus + whole wheat) to get all essential amino acids. You may need slightly more plant protein due to lower digestibility."
      },
      {
        q: "How much protein for weight loss?",
        a: "During weight loss, aim for 1.6-2.4g per kg of body weight. Higher protein intake helps preserve muscle mass while in a calorie deficit and increases satiety, making it easier to stick to your diet."
      }
    ],
    ctaTitle: "Ready to Track Your Protein?",
    ctaSubtitle: "Use our calculator above to find your personalized protein target based on your goals.",
    ctaButton: "Calculate Now"
  }
};

export default function ProteinCalculator() {
  const [language, setLanguage] = useState('en');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('lbs');
  const [activity, setActivity] = useState('moderate');
  const [goal, setGoal] = useState('maintain');
  const [result, setResult] = useState(null);

  const t = translations[language];

  useEffect(() => {
    const savedLang = localStorage.getItem('proteinCalcLang');
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    }
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('proteinCalcLang', lang);
  };

  const activityLevels = {
    sedentary: { multiplier: 0.8 },
    light: { multiplier: 1.0 },
    moderate: { multiplier: 1.2 },
    active: { multiplier: 1.4 },
    athlete: { multiplier: 1.6 }
  };

  const goals = {
    lose: { multiplier: 1.0 },
    maintain: { multiplier: 1.0 },
    gain: { multiplier: 1.2 }
  };

  const calculateProtein = () => {
    if (!weight || weight <= 0) {
      alert('Please enter a valid weight');
      return;
    }

    let weightKg = unit === 'lbs' ? weight * 0.453592 : parseFloat(weight);
    let baseProtein = weightKg * 1.8;
    baseProtein *= activityLevels[activity].multiplier;
    baseProtein *= goals[goal].multiplier;
    
    const min = Math.round(baseProtein * 0.9);
    const max = Math.round(baseProtein * 1.1);
    const daily = Math.round(baseProtein);
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
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-end mb-4">
            <div className="bg-white rounded-lg shadow-md p-2 flex items-center gap-2">
              <Globe className="w-4 h-4 text-gray-600" />
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 rounded transition ${language === 'en' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                EN
              </button>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {t.title}
            </h1>
            <p className="text-gray-600 text-lg">
              {t.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.weight}
              </label>
              <div className="flex gap-3">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={t.weightPlaceholder}
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

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                {t.activityLevel}
              </label>
              <div className="space-y-2">
                {Object.keys(activityLevels).map((key) => (
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
                    <span className="ml-3 text-gray-700">{t.activities[key]}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                {t.goal}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.keys(goals).map((key) => {
                  const Icon = key === 'lose' ? TrendingUp : key === 'maintain' ? Target : Activity;
                  return (
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
                      <span className="text-sm font-medium text-gray-700 text-center">{t.goals[key]}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <button
              onClick={calculateProtein}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-lg transition text-lg shadow-lg hover:shadow-xl"
            >
              {t.calculate}
            </button>
          </div>

          {result && (
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {t.resultsTitle}
              </h2>
              
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 mb-6 text-center">
                <div className="text-white text-6xl font-bold mb-2">
                  {result.daily}g
                </div>
                <div className="text-indigo-100 text-lg">
                  {t.perDay}
                </div>
                <div className="text-indigo-200 text-sm mt-2">
                  {t.range}: {result.min}g - {result.max}g
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {result.perMeal}g
                  </div>
                  <div className="text-gray-600 text-sm">{t.perMeal}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {Math.round(result.daily / result.weightKg * 10) / 10}g
                  </div>
                  <div className="text-gray-600 text-sm">{t.perKg}</div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">💡 {t.tipsTitle}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  {t.tips.map((tip, idx) => (
                    <li key={idx}>• {tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>{t.disclaimer1}</p>
            <p className="mt-1">{t.disclaimer2}</p>
          </div>
        </div>
      </div>
    </>
  );
}
