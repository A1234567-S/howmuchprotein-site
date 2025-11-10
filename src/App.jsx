import React, { useState, useEffect } from 'react';
import { Calculator, Activity, Target, TrendingUp, Globe } from 'lucide-react';

// Translation data
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
    // SEO Content
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
  },
  es: {
    title: "Calculadora de Proteínas",
    subtitle: "Calcula tus necesidades diarias de proteínas según tus objetivos",
    weight: "Tu Peso",
    weightPlaceholder: "Ingresa tu peso",
    activityLevel: "Nivel de Actividad",
    activities: {
      sedentary: "Sedentario (poco/sin ejercicio)",
      light: "Ligero (1-3 días/semana)",
      moderate: "Moderado (3-5 días/semana)",
      active: "Muy Activo (6-7 días/semana)",
      athlete: "Atleta (2x/día)"
    },
    goal: "Tu Objetivo",
    goals: {
      lose: "Perder Peso",
      maintain: "Mantener Peso",
      gain: "Ganar Músculo"
    },
    calculate: "Calcular Mis Necesidades de Proteínas",
    resultsTitle: "Tu Objetivo Diario de Proteínas",
    perDay: "por día",
    range: "Rango",
    perMeal: "por comida (3 comidas)",
    perKg: "por kg de peso corporal",
    tipsTitle: "Consejos Rápidos:",
    tips: [
      "Distribuye las proteínas uniformemente en las comidas para mejores resultados",
      "Apunta a 20-40g por comida para maximizar la síntesis de proteína muscular",
      "Incluye proteínas dentro de 2 horas después del ejercicio",
      "Buenas fuentes: pollo, pescado, huevos, yogur griego, legumbres, tofu"
    ],
    disclaimer1: "Esta calculadora usa fórmulas basadas en ciencia para individuos activos.",
    disclaimer2: "Consulta a un nutricionista para consejos personalizados.",
    seoTitle: "¿Cuánta Proteína Necesitas Diariamente?",
    seoIntro1: "La proteína es esencial para construir y reparar tejido muscular, apoyar la función inmune y mantener la salud general. Tus necesidades diarias de proteína dependen de varios factores incluyendo tu peso corporal, nivel de actividad y objetivos fitness.",
    seoIntro2: "La recomendación general para adultos es 0.8 gramos de proteína por kilogramo de peso corporal (0.36g por libra). Sin embargo, si eres activo o intentas ganar músculo, necesitarás significativamente más—típicamente entre 1.6 a 2.2 gramos por kilogramo (0.7-1g por libra).",
    benefitsTitle: "Por Qué Importa la Proteína",
    benefits: [
      { icon: "💪", title: "Construcción Muscular", desc: "La proteína proporciona aminoácidos necesarios para el crecimiento y reparación muscular después del ejercicio." },
      { icon: "🔥", title: "Control de Peso", desc: "Las dietas altas en proteínas aumentan la saciedad y aceleran el metabolismo, ayudando con la pérdida de grasa." },
      { icon: "🛡️", title: "Soporte Inmune", desc: "Los anticuerpos y células inmunes dependen de una ingesta adecuada de proteínas para funcionar correctamente." },
      { icon: "🦴", title: "Salud Ósea", desc: "La proteína apoya la densidad ósea y ayuda a mantener la fuerza esquelética con la edad." }
    ],
    requirementsTitle: "Requisitos de Proteína por Nivel de Actividad",
    tableHeaders: ["Nivel de Actividad", "Necesidades de Proteína", "Ejemplo (persona de 68 kg)"],
    tableRows: [
      ["Sedentario", "0.8g/kg (0.36g/lb)", "54g por día"],
      ["Ligeramente Activo", "1.2g/kg (0.55g/lb)", "82g por día"],
      ["Moderadamente Activo", "1.6g/kg (0.73g/lb)", "109g por día"],
      ["Muy Activo", "2.0g/kg (0.91g/lb)", "136g por día"],
      ["Atleta/Culturista", "2.2g/kg (1.0g/lb)", "150g por día"]
    ],
    foodsTitle: "Mejores Alimentos Ricos en Proteínas",
    foodsIntro: "Alcanzar tu objetivo diario de proteínas es más fácil cuando sabes qué alimentos contienen más proteína por porción:",
    animalSources: "Fuentes Animales",
    plantSources: "Fuentes Vegetales",
    animalFoods: [
      "Pechuga de pollo - 31g por 100g",
      "Carne magra - 26g por 100g",
      "Salmón - 25g por 100g",
      "Huevos - 6g por huevo grande",
      "Yogur griego - 10g por 100g",
      "Requesón - 11g por 100g"
    ],
    plantFoods: [
      "Lentejas - 9g por 100g cocidas",
      "Garbanzos - 8g por 100g cocidos",
      "Tofu - 8g por 100g",
      "Quinoa - 4g por 100g cocida",
      "Almendras - 21g por 100g",
      "Mantequilla de maní - 25g por 100g"
    ],
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      {
        q: "¿Puedes comer demasiada proteína?",
        a: "Para individuos sanos, comer hasta 2g por kg de peso corporal es seguro. Ingestas extremadamente altas (3g+ por kg) pueden estresar los riñones en personas con condiciones renales preexistentes. La mayoría de las personas no necesitan preocuparse por comer demasiada proteína."
      },
      {
        q: "¿Cuándo debo comer proteínas?",
        a: "Distribuye las proteínas uniformemente durante el día, apuntando a 20-40g por comida. Esto maximiza la síntesis de proteína muscular. Tener proteína dentro de 2 horas después del ejercicio es beneficioso pero no crítico si cumples totales diarios."
      },
      {
        q: "¿Necesito proteína en polvo?",
        a: "No, la proteína en polvo es un suplemento conveniente pero no necesario. Los alimentos enteros deben ser tu fuente principal de proteína. Usa proteína en polvo como suplemento cuando tengas dificultades para alcanzar tu objetivo diario solo con alimentos."
      },
      {
        q: "¿Es la proteína vegetal tan buena como la animal?",
        a: "Las proteínas vegetales pueden ser igual de efectivas cuando consumes una variedad de fuentes. Combina diferentes proteínas vegetales (frijoles + arroz, hummus + trigo integral) para obtener todos los aminoácidos esenciales. Puede que necesites un poco más de proteína vegetal debido a menor digestibilidad."
      },
      {
        q: "¿Cuánta proteína para perder peso?",
        a: "Durante la pérdida de peso, apunta a 1.6-2.4g por kg de peso corporal. Una mayor ingesta de proteína ayuda a preservar la masa muscular mientras estás en déficit calórico y aumenta la saciedad, facilitando seguir tu dieta."
      }
    ],
    ctaTitle: "¿Listo para Rastrear tu Proteína?",
    ctaSubtitle: "Usa nuestra calculadora arriba para encontrar tu objetivo personalizado de proteínas basado en tus metas.",
    ctaButton: "Calcular Ahora"
  },
  hi: {
    title: "प्रोटीन कैलकुलेटर",
    subtitle: "अपने लक्ष्यों के आधार पर अपनी दैनिक प्रोटीन आवश्यकताओं की गणना करें",
    weight: "आपका वजन",
    weightPlaceholder: "वजन दर्ज करें",
    activityLevel: "गतिविधि स्तर",
    activities: {
      sedentary: "निष्क्रिय (बहुत कम/कोई व्यायाम नहीं)",
      light: "हल्का (1-3 दिन/सप्ताह)",
      moderate: "मध्यम (3-5 दिन/सप्ताह)",
      active: "बहुत सक्रिय (6-7 दिन/सप्ताह)",
      athlete: "एथलीट (दिन में 2 बार)"
    },
    goal: "आपका लक्ष्य",
    goals: {
      lose: "वजन कम करें",
      maintain: "वजन बनाए रखें",
      gain: "मांसपेशियां बनाएं"
    },
    calculate: "मेरी प्रोटीन आवश्यकताओं की गणना करें",
    resultsTitle: "आपका दैनिक प्रोटीन लक्ष्य",
    perDay: "प्रति दिन",
    range: "सीमा",
    perMeal: "प्रति भोजन (3 भोजन)",
    perKg: "प्रति किलो शरीर का वजन",
    tipsTitle: "त्वरित सुझाव:",
    tips: [
      "सर्वोत्तम परिणामों के लिए भोजन में प्रोटीन को समान रूप से फैलाएं",
      "मांसपेशी प्रोटीन संश्लेषण को अधिकतम करने के लिए प्रति भोजन 20-40g का लक्ष्य रखें",
      "कसरत के 2 घंटे के भीतर प्रोटीन शामिल करें",
      "अच्छे स्रोत: चिकन, मछली, अंडे, ग्रीक दही, फलियां, टोफू"
    ],
    disclaimer1: "यह कैलकुलेटर सक्रिय व्यक्तियों के लिए विज्ञान-आधारित सूत्रों का उपयोग करता है।",
    disclaimer2: "व्यक्तिगत सलाह के लिए पोषण विशेषज्ञ से परामर्श लें।",
    seoTitle: "आपको प्रतिदिन कितना प्रोटीन चाहिए?",
    seoIntro1: "प्रोटीन मांसपेशी ऊतक के निर्माण और मरम्मत, प्रतिरक्षा कार्य का समर्थन और समग्र स्वास्थ्य बनाए रखने के लिए आवश्यक है। आपकी दैनिक प्रोटीन आवश्यकताएं आपके शरीर के वजन, गतिविधि स्तर और फिटनेस लक्ष्यों सहित कई कारकों पर निर्भर करती हैं।",
    seoIntro2: "वयस्कों के लिए सामान्य सिफारिश शरीर के वजन के प्रति किलोग्राम 0.8 ग्राम प्रोटीन (0.36g प्रति पाउंड) है। हालांकि, यदि आप सक्रिय हैं या मांसपेशियों का निर्माण करने की कोशिश कर रहे हैं, तो आपको काफी अधिक की आवश्यकता होगी—आमतौर पर 1.6 से 2.2 ग्राम प्रति किलोग्राम (0.7-1g प्रति पाउंड) के बीच।",
    benefitsTitle: "प्रोटीन क्यों महत्वपूर्ण है",
    benefits: [
      { icon: "💪", title: "मांसपेशी निर्माण", desc: "प्रोटीन व्यायाम के बाद मांसपेशियों की वृद्धि और मरम्मत के लिए आवश्यक अमीनो एसिड प्रदान करता है।" },
      { icon: "🔥", title: "वजन प्रबंधन", desc: "उच्च-प्रोटीन आहार तृप्ति बढ़ाते हैं और चयापचय को बढ़ावा देते हैं, वसा हानि में मदद करते हैं।" },
      { icon: "🛡️", title: "प्रतिरक्षा समर्थन", desc: "एंटीबॉडी और प्रतिरक्षा कोशिकाएं ठीक से काम करने के लिए पर्याप्त प्रोटीन सेवन पर निर्भर करती हैं।" },
      { icon: "🦴", title: "हड्डी स्वास्थ्य", desc: "प्रोटीन हड्डियों के घनत्व का समर्थन करता है और उम्र के साथ कंकाल की ताकत बनाए रखने में मदद करता है।" }
    ],
    requirementsTitle: "गतिविधि स्तर के अनुसार प्रोटीन आवश्यकताएं",
    tableHeaders: ["गतिविधि स्तर", "प्रोटीन की आवश्यकता", "उदाहरण (68 किलो व्यक्ति)"],
    tableRows: [
      ["निष्क्रिय", "0.8g/kg (0.36g/lb)", "54g प्रति दिन"],
      ["हल्का सक्रिय", "1.2g/kg (0.55g/lb)", "82g प्रति दिन"],
      ["मध्यम सक्रिय", "1.6g/kg (0.73g/lb)", "109g प्रति दिन"],
      ["बहुत सक्रिय", "2.0g/kg (0.91g/lb)", "136g प्रति दिन"],
      ["एथलीट/बॉडीबिल्डर", "2.2g/kg (1.0g/lb)", "150g प्रति दिन"]
    ],
    foodsTitle: "सर्वश्रेष्ठ उच्च-प्रोटीन खाद्य पदार्थ",
    foodsIntro: "जब आप जानते हैं कि कौन से खाद्य पदार्थों में प्रति सर्विंग सबसे अधिक प्रोटीन होता है, तो अपने दैनिक प्रोटीन लक्ष्य को पूरा करना आसान है:",
    animalSources: "पशु स्रोत",
    plantSources: "पौधे स्रोत",
    animalFoods: [
      "चिकन ब्रेस्ट - 31g प्रति 100g",
      "लीन बीफ - 26g प्रति 100g",
      "सैल्मन - 25g प्रति 100g",
      "अंडे - 6g प्रति बड़ा अंडा",
      "ग्रीक दही - 10g प्रति 100g",
      "कॉटेज चीज़ - 11g प्रति 100g"
    ],
    plantFoods: [
      "मसूर की दाल - 9g प्रति 100g पकी हुई",
      "छोले - 8g प्रति 100g पके हुए",
      "टोफू - 8g प्रति 100g",
      "क्विनोआ - 4g प्रति 100g पका हुआ",
      "बादाम - 21g प्रति 100g",
      "पीनट बटर - 25g प्रति 100g"
    ],
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faqs: [
      {
        q: "क्या आप बहुत अधिक प्रोटीन खा सकते हैं?",
        a: "स्वस्थ व्यक्तियों के लिए, शरीर के वजन के प्रति किलो 2g तक खाना सुरक्षित है। अत्यधिक उच्च सेवन (3g+ प्रति किलो) पूर्व-मौजूदा गुर्दे की स्थितियों वाले लोगों में गुर्दे पर तनाव डाल सकता है। अधिकांश लोगों को बहुत अधिक प्रोटीन खाने के बारे में चिंता करने की आवश्यकता नहीं है।"
      },
      {
        q: "मुझे प्रोटीन कब खाना चाहिए?",
        a: "पूरे दिन प्रोटीन को समान रूप से वितरित करें, प्रति भोजन 20-40g का लक्ष्य रखें। यह मांसपेशी प्रोटीन संश्लेषण को अधिकतम करता है। कसरत के 2 घंटे के भीतर प्रोटीन लेना फायदेमंद है लेकिन महत्वपूर्ण नहीं है यदि आप दैनिक कुल पूरा कर रहे हैं।"
      },
      {
        q: "क्या मुझे प्रोटीन पाउडर की आवश्यकता है?",
        a: "नहीं, प्रोटीन पाउडर एक सुविधाजनक पूरक है लेकिन आवश्यक नहीं है। संपूर्ण खाद्य पदार्थ आपका प्राथमिक प्रोटीन स्रोत होना चाहिए। प्रोटीन पाउडर को पूरक के रूप में उपयोग करें जब आप अकेले भोजन के माध्यम से अपने दैनिक लक्ष्य को पूरा करने के लिए संघर्ष करते हैं।"
      },
      {
        q: "क्या पौधे प्रोटीन पशु प्रोटीन जितना अच्छा है?",
        a: "पौधे प्रोटीन उतने ही प्रभावी हो सकते हैं जब आप विभिन्न स्रोतों का उपभोग करते हैं। सभी आवश्यक अमीनो एसिड प्राप्त करने के लिए विभिन्न पौधे प्रोटीन (बीन्स + चावल, हम्मस + साबुत गेहूं) को मिलाएं। कम पाचनशक्ति के कारण आपको थोड़ा अधिक पौधे प्रोटीन की आवश्यकता हो सकती है।"
      },
      {
        q: "वजन घटाने के लिए कितना प्रोटीन?",
        a: "वजन घटाने के दौरान, शरीर के वजन के 1.6-2.4g प्रति किलो का लक्ष्य रखें। उच्च प्रोटीन सेवन कैलोरी की कमी के दौरान मांसपेशी द्रव्यमान को संरक्षित करने में मदद करता है और तृप्ति बढ़ाता है, जिससे अपने आहार पर टिके रहना आसान हो जाता है।"
      }
    ],
    ctaTitle: "अपने प्रोटीन को ट्रैक करने के लिए तैयार हैं?",
    ctaSubtitle: "अपने लक्ष्यों के आधार पर अपना व्यक्तिगत प्रोटीन लक्ष्य खोजने के लिए ऊपर हमारे कैलकुलेटर का उपयोग करें।",
    ctaButton: "अभी गणना करें"
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

  // Load saved language preference
  useEffect(() => {
    const savedLang = localStorage.getItem('proteinCalcLang');
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    }
  }, []);

  // Save language preference
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
      alert(language === 'en' ? 'Please enter a valid weight' : 
            language === 'es' ? 'Por favor ingresa un peso válido' : 
            'कृपया एक मान्य वजन दर्ज करें');
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Language Switcher */}
        <div className="flex justify-end mb-4">
          <div className="bg-white rounded-lg shadow-md p-2 flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-600" />
            <button
              onClick={() => handleLanguageChange('en')}
              className={`px-3 py-1 rounded transition ${language === 'en' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              EN
            </button>
            <button
              onClick={() => handleLanguageChange('es')}
              className={`px-3 py-1 rounded transition ${language === 'es' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              ES
            </button>
            <button
              onClick={() => handleLanguageChange('hi')}
              className={`px-3 py-1 rounded transition ${language === 'hi' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              HI
            </button>
          </div>
        </div>

        {/* Header */}
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

        {/* Calculator Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
          {/* Weight Input */}
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

          {/* Activity Level */}
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

          {/* Goal */}
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

          {/* Calculate Button */}
          <button
            onClick={calculateProtein}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-lg transition text-lg shadow-lg hover:shadow-xl"
          >
            {t.calculate}
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {t.resultsTitle}
            </h2>
            
            {/* Main Result */}
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

            {/* Breakdown */}
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

            {/* Tips */}
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

        {/* Footer Info */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>{t.disclaimer1}</p>
          <p className="mt-1">{t.disclaimer2}</p>
        </div>

        {/* SEO Content Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.seoTitle}
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {t.seoIntro1}
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {t.seoIntro2}
            </p>

            {/* Benefits Section */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              {t.benefitsTitle}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {t.benefits.map((benefit, idx) => (
                <div key={idx} className={`p-5 rounded-lg ${
                  idx === 0 ? 'bg-blue-50' : 
                  idx === 1 ? 'bg-green-50' : 
                  idx === 2 ? 'bg-purple-50' : 'bg-orange-50'
                }`}>
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.icon} {benefit.title}</h4>
                  <p className="text-gray-700 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>

            {/* Protein by Activity Level */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              {t.requirementsTitle}
            </h3>
            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    {t.tableHeaders.map((header, idx) => (
                      <th key={idx} className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {t.tableRows.map((row, idx) => (
                    <tr key={idx}>
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className={`px-6 py-4 text-sm ${cellIdx === 0 ? 'text-gray-900' : 'text-gray-700'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* High-Protein Foods */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              {t.foodsTitle}
            </h3>
            
            <p className="text-gray-700 mb-4">
              {t.foodsIntro}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🥩 {t.animalSources}</h4>
                <ul className="space-y-2 text-gray-700">
                  {t.animalFoods.map((food, idx) => (
                    <li key={idx}><strong>{food.split(' - ')[0]}</strong> - {food.split(' - ')[1]}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🌱 {t.plantSources}</h4>
                <ul className="space-y-2 text-gray-700">
                  {t.plantFoods.map((food, idx) => (
                    <li key={idx}><strong>{food.split(' - ')[0]}</strong> - {food.split(' - ')[1]}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-8">
              {t.faqTitle}
            </h3>

            <div className="space-y-6">
              {t.faqs.map((faq, idx) => (
                <div key={idx} className="border-l-4 border-indigo-500 pl-4 py-2">
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">{t.ctaTitle}</h3>
              <p className="text-indigo-100 mb-6">{t.ctaSubtitle}</p>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
              >
                {t.ctaButton}
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
