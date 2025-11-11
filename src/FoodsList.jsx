import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './FoodsList.css'

const FoodsList = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const foods = [
    // Proteins - Meat & Poultry
    { name: 'Chicken Breast', path: '/foods/chicken-breast', category: 'Meat & Poultry', protein: '31g' },
    { name: 'Turkey', path: '/foods/turkey', category: 'Meat & Poultry', protein: '29g' },
    { name: 'Beef', path: '/foods/beef', category: 'Meat & Poultry', protein: '26g' },
    { name: 'Lamb', path: '/foods/lamb', category: 'Meat & Poultry', protein: '25g' },
    { name: 'Pork', path: '/foods/pork', category: 'Meat & Poultry', protein: '27g' },
    { name: 'Duck', path: '/foods/duck', category: 'Meat & Poultry', protein: '29g' },
    
    // Fish & Seafood
    { name: 'Salmon', path: '/foods/salmon', category: 'Fish & Seafood', protein: '25g' },
    { name: 'Tuna', path: '/foods/tuna', category: 'Fish & Seafood', protein: '29g' },
    { name: 'Cod', path: '/foods/cod', category: 'Fish & Seafood', protein: '20g' },
    { name: 'Sardines', path: '/foods/sardines', category: 'Fish & Seafood', protein: '24g' },
    { name: 'Anchovies', path: '/foods/anchovies', category: 'Fish & Seafood', protein: '29g' },
    { name: 'Mackerel', path: '/foods/mackerel', category: 'Fish & Seafood', protein: '23g' },
    { name: 'Tilapia', path: '/foods/tilapia', category: 'Fish & Seafood', protein: '26g' },
    { name: 'Catfish', path: '/foods/catfish', category: 'Fish & Seafood', protein: '17g' },
    { name: 'Shrimp', path: '/foods/shrimp', category: 'Fish & Seafood', protein: '24g' },
    { name: 'Crab', path: '/foods/crab', category: 'Fish & Seafood', protein: '19g' },
    { name: 'Lobster', path: '/foods/lobster', category: 'Fish & Seafood', protein: '19g' },
    { name: 'Prawns', path: '/foods/prawns', category: 'Fish & Seafood', protein: '24g' },
    { name: 'Scallops', path: '/foods/scallops', category: 'Fish & Seafood', protein: '14g' },
    { name: 'Oysters', path: '/foods/oysters', category: 'Fish & Seafood', protein: '10g' },
    { name: 'Clams', path: '/foods/clams', category: 'Fish & Seafood', protein: '12g' },
    { name: 'Octopus', path: '/foods/octopus', category: 'Fish & Seafood', protein: '30g' },
    { name: 'Squid', path: '/foods/squid', category: 'Fish & Seafood', protein: '30g' },

    // Eggs & Dairy
    { name: 'Eggs', path: '/foods/eggs', category: 'Eggs & Dairy', protein: '13g' },
    { name: 'Egg Whites', path: '/foods/egg-whites', category: 'Eggs & Dairy', protein: '11g' },
    { name: 'Duck Eggs', path: '/foods/duck-eggs', category: 'Eggs & Dairy', protein: '14g' },
    { name: 'Greek Yogurt', path: '/foods/greek-yogurt', category: 'Eggs & Dairy', protein: '17g' },
    { name: 'Yogurt', path: '/foods/yogurt', category: 'Eggs & Dairy', protein: '3.5g' },
    { name: 'Whole Milk', path: '/foods/whole-milk', category: 'Eggs & Dairy', protein: '3.2g' },
    { name: 'Skim Milk', path: '/foods/skim-milk', category: 'Eggs & Dairy', protein: '3.4g' },
    { name: 'Soy Milk', path: '/foods/soy-milk', category: 'Eggs & Dairy', protein: '3.3g' },
    { name: 'Cottage Cheese', path: '/foods/cottage-cheese', category: 'Eggs & Dairy', protein: '11g' },
    { name: 'Cottage Cheese (Low Fat)', path: '/foods/cottage-cheese-lowfat', category: 'Eggs & Dairy', protein: '12g' },
    { name: 'Cheddar Cheese', path: '/foods/cheddar-cheese', category: 'Eggs & Dairy', protein: '7g' },
    { name: 'Mozzarella', path: '/foods/mozzarella', category: 'Eggs & Dairy', protein: '6.3g' },
    { name: 'Parmesan', path: '/foods/parmesan', category: 'Eggs & Dairy', protein: '10g' },
    { name: 'Goat Cheese', path: '/foods/goat-cheese', category: 'Eggs & Dairy', protein: '5.3g' },
    { name: 'Ricotta', path: '/foods/ricotta', category: 'Eggs & Dairy', protein: '7g' },
    { name: 'Paneer', path: '/foods/paneer', category: 'Eggs & Dairy', protein: '23g' },

    // Legumes & Pulses
    { name: 'Lentils', path: '/foods/lentils', category: 'Legumes & Pulses', protein: '9g' },
    { name: 'Chickpeas', path: '/foods/chickpeas', category: 'Legumes & Pulses', protein: '8.9g' },
    { name: 'Kidney Beans', path: '/foods/kidney-beans', category: 'Legumes & Pulses', protein: '8.7g' },
    { name: 'Black Beans', path: '/foods/black-beans', category: 'Legumes & Pulses', protein: '8.9g' },
    { name: 'Soybeans', path: '/foods/soybeans', category: 'Legumes & Pulses', protein: '11g' },
    { name: 'Toor Dal', path: '/foods/toor-dal', category: 'Legumes & Pulses', protein: '12g' },
    { name: 'Moong Dal', path: '/foods/moong-dal', category: 'Legumes & Pulses', protein: '12g' },
    { name: 'Masoor Dal', path: '/foods/masoor-dal', category: 'Legumes & Pulses', protein: '9g' },
    { name: 'Urad Dal', path: '/foods/urad-dal', category: 'Legumes & Pulses', protein: '12g' },
    { name: 'Rajma', path: '/foods/rajma', category: 'Legumes & Pulses', protein: '9g' },
    { name: 'Chana Dal', path: '/foods/chana-dal', category: 'Legumes & Pulses', protein: '11g' },
    { name: 'Green Gram', path: '/foods/green-gram', category: 'Legumes & Pulses', protein: '12g' },
    { name: 'Horse Gram', path: '/foods/horse-gram', category: 'Legumes & Pulses', protein: '13g' },
    { name: 'Bengal Gram', path: '/foods/bengal-gram', category: 'Legumes & Pulses', protein: '19g' },

    // Nuts & Seeds
    { name: 'Peanuts', path: '/foods/peanuts', category: 'Nuts & Seeds', protein: '7.3g' },
    { name: 'Almonds', path: '/foods/almonds', category: 'Nuts & Seeds', protein: '6.3g' },
    { name: 'Walnuts', path: '/foods/walnuts', category: 'Nuts & Seeds', protein: '4.3g' },
    { name: 'Cashews', path: '/foods/cashews', category: 'Nuts & Seeds', protein: '5.2g' },
    { name: 'Pumpkin Seeds', path: '/foods/pumpkin-seeds', category: 'Nuts & Seeds', protein: '9g' },
    { name: 'Sunflower Seeds', path: '/foods/sunflower-seeds', category: 'Nuts & Seeds', protein: '6g' },
    { name: 'Flaxseeds', path: '/foods/flaxseeds', category: 'Nuts & Seeds', protein: '1.4g' },
    { name: 'Chia Seeds', path: '/foods/chia-seeds', category: 'Nuts & Seeds', protein: '2.8g' },

    // Grains & Cereals
    { name: 'Oats', path: '/foods/oats', category: 'Grains & Cereals', protein: '2.4g' },
    { name: 'Quinoa', path: '/foods/quinoa', category: 'Grains & Cereals', protein: '1.4g' },
    { name: 'Brown Rice', path: '/foods/brown-rice', category: 'Grains & Cereals', protein: '0.8g' },
    { name: 'White Rice', path: '/foods/white-rice', category: 'Grains & Cereals', protein: '0.3g' },
    { name: 'Whole Wheat Bread', path: '/foods/whole-wheat-bread', category: 'Grains & Cereals', protein: '3.6g' },
    { name: 'Egg Noodles', path: '/foods/egg-noodles', category: 'Grains & Cereals', protein: '3.3g' },
    { name: 'Pasta', path: '/foods/pasta', category: 'Grains & Cereals', protein: '3.6g' },
    { name: 'Barley', path: '/foods/barley', category: 'Grains & Cereals', protein: '2.3g' },
    { name: 'Millet', path: '/foods/millet', category: 'Grains & Cereals', protein: '3.5g' },
    { name: 'Buckwheat', path: '/foods/buckwheat', category: 'Grains & Cereals', protein: '3.4g' },
    { name: 'Amaranth', path: '/foods/amaranth', category: 'Grains & Cereals', protein: '2.1g' },
    { name: 'Couscous', path: '/foods/couscous', category: 'Grains & Cereals', protein: '3.8g' },
    { name: 'Farro', path: '/foods/farro', category: 'Grains & Cereals', protein: '5.5g' },
    { name: 'Teff', path: '/foods/teff', category: 'Grains & Cereals', protein: '3.6g' },

    // Vegetables
    { name: 'Avocado', path: '/foods/avocado', category: 'Vegetables', protein: '1.5g' },
    { name: 'Broccoli', path: '/foods/broccoli', category: 'Vegetables', protein: '2.8g' },
    { name: 'Spinach', path: '/foods/spinach', category: 'Vegetables', protein: '2.9g' },
    { name: 'Kale', path: '/foods/kale', category: 'Vegetables', protein: '2.4g' },
    { name: 'Mushrooms', path: '/foods/mushrooms', category: 'Vegetables', protein: '2.7g' },
    { name: 'Potatoes', path: '/foods/potatoes', category: 'Vegetables', protein: '1.7g' },
    { name: 'Sweet Potatoes', path: '/foods/sweet-potatoes', category: 'Vegetables', protein: '0.6g' },
    { name: 'Peas', path: '/foods/peas', category: 'Vegetables', protein: '5g' },
    { name: 'Corn', path: '/foods/corn', category: 'Vegetables', protein: '3.3g' },

    // Soy Products
    { name: 'Tofu', path: '/foods/tofu', category: 'Soy Products', protein: '8g' },
    { name: 'Tempeh', path: '/foods/tempeh', category: 'Soy Products', protein: '19g' },
    { name: 'Edamame', path: '/foods/edamame', category: 'Soy Products', protein: '11g' },
    { name: 'Soya Chunks', path: '/foods/soya-chunks', category: 'Soy Products', protein: '49g' },
    { name: 'Sprouts', path: '/foods/sprouts', category: 'Soy Products', protein: '3g' },

    // Seitan
    { name: 'Seitan', path: '/foods/seitan', category: 'Plant-Based', protein: '25g' },

    // Prepared Foods
    { name: 'Egg Omelette', path: '/foods/egg-omelette', category: 'Prepared Foods', protein: '11g' },
    { name: 'Paneer Bhurji', path: '/foods/paneer-bhurji', category: 'Prepared Foods', protein: '18g' },
    { name: 'Cottage Cheese Toast', path: '/foods/cottage-cheese-toast', category: 'Prepared Foods', protein: '15g' },
    { name: 'Protein Bar', path: '/foods/protein-bar', category: 'Prepared Foods', protein: '20g' },
    { name: 'Protein Shake', path: '/foods/protein-shake', category: 'Prepared Foods', protein: '25g' },

    // Protein Powders
    { name: 'Protein Powder', path: '/foods/protein-powder', category: 'Protein Supplements', protein: '20g' },
    { name: 'Whey Protein', path: '/foods/whey-protein', category: 'Protein Supplements', protein: '24g' },
    { name: 'Pea Protein', path: '/foods/pea-protein', category: 'Protein Supplements', protein: '20g' },
    { name: 'Brown Rice Protein', path: '/foods/brown-rice-protein', category: 'Protein Supplements', protein: '15g' },
    { name: 'Hemp Protein', path: '/foods/hemp-protein', category: 'Protein Supplements', protein: '10g' },
  ]

  const categories = ['all', ...new Set(foods.map(f => f.category))]

  const filteredFoods = useMemo(() => {
    return foods.filter(food => {
      const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || food.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <div className="foods-list-container">
      <div className="foods-header">
        <h1>🥗 All Foods & Protein Sources</h1>
        <p>Browse our comprehensive database of high-protein foods</p>
      </div>

      <div className="foods-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search foods..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filters">
          <h3>Filter by Category:</h3>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="foods-stats">
        <p>Found <strong>{filteredFoods.length}</strong> items</p>
      </div>

      <div className="foods-grid">
        {filteredFoods.length > 0 ? (
          filteredFoods.map(food => (
            <Link key={food.name} to={food.path} className="food-card">
              <div className="food-card-content">
                <h3>{food.name}</h3>
                <p className="food-category">{food.category}</p>
                <p className="food-protein">💪 {food.protein} protein</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="no-results">
            <p>No foods found matching your search.</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
              className="reset-btn"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default FoodsList
