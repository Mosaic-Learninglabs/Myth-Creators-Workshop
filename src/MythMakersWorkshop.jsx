import React, { useState, useEffect } from 'react';

const MythMakersWorkshop = () => {
  const [language, setLanguage] = useState('en');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Character types
  const characters = [
    {
      emoji: '🦅',
      en: 'Eagle',
      es: 'Águila',
      traits: { en: ['wise', 'proud', 'free'], es: ['sabio', 'orgulloso', 'libre'] },
      words: {
        en: ['soaring', 'sharp-eyed', 'majestic', 'powerful', 'watchful'],
        es: ['volando alto', 'vista aguda', 'majestuoso', 'poderoso', 'vigilante']
      }
    },
    {
      emoji: '🐍',
      en: 'Snake',
      es: 'Serpiente',
      traits: { en: ['cunning', 'patient', 'mysterious'], es: ['astuto', 'paciente', 'misterioso'] },
      words: {
        en: ['slithering', 'silent', 'swift', 'hidden', 'coiled'],
        es: ['deslizándose', 'silencioso', 'rápido', 'oculto', 'enrollado']
      }
    },
    {
      emoji: '🦉',
      en: 'Owl',
      es: 'Búho',
      traits: { en: ['wise', 'observant', 'solitary'], es: ['sabio', 'observador', 'solitario'] },
      words: {
        en: ['nocturnal', 'silent', 'watching', 'mysterious', 'perched'],
        es: ['nocturno', 'silencioso', 'observando', 'misterioso', 'posado']
      }
    },
    {
      emoji: '🐺',
      en: 'Wolf',
      es: 'Lobo',
      traits: { en: ['loyal', 'fierce', 'independent'], es: ['leal', 'feroz', 'independiente'] },
      words: {
        en: ['howling', 'hunting', 'loyal', 'wild', 'fierce'],
        es: ['aullando', 'cazando', 'leal', 'salvaje', 'feroz']
      }
    },
    {
      emoji: '🦊',
      en: 'Fox',
      es: 'Zorro',
      traits: { en: ['clever', 'quick', 'playful'], es: ['inteligente', 'rápido', 'juguetón'] },
      words: {
        en: ['cunning', 'quick', 'clever', 'sly', 'darting'],
        es: ['astuto', 'rápido', 'inteligente', 'taimado', 'corriendo']
      }
    },
    {
      emoji: '🐢',
      en: 'Turtle',
      es: 'Tortuga',
      traits: { en: ['patient', 'wise', 'steady'], es: ['paciente', 'sabio', 'constante'] },
      words: {
        en: ['slow', 'ancient', 'patient', 'steady', 'protected'],
        es: ['lento', 'antiguo', 'paciente', 'constante', 'protegido']
      }
    },
    {
      emoji: '🦁',
      en: 'Lion',
      es: 'León',
      traits: { en: ['brave', 'proud', 'strong'], es: ['valiente', 'orgulloso', 'fuerte'] },
      words: {
        en: ['roaring', 'proud', 'powerful', 'fierce', 'commanding'],
        es: ['rugiendo', 'orgulloso', 'poderoso', 'feroz', 'dominante']
      }
    },
    {
      emoji: '🐻',
      en: 'Bear',
      es: 'Oso',
      traits: { en: ['strong', 'protective', 'solitary'], es: ['fuerte', 'protector', 'solitario'] },
      words: {
        en: ['strong', 'protective', 'powerful', 'towering', 'fierce'],
        es: ['fuerte', 'protector', 'poderoso', 'imponente', 'feroz']
      }
    },
    {
      emoji: '🦌',
      en: 'Deer',
      es: 'Ciervo',
      traits: { en: ['gentle', 'swift', 'graceful'], es: ['gentil', 'rápido', 'elegante'] },
      words: {
        en: ['leaping', 'graceful', 'swift', 'gentle', 'alert'],
        es: ['saltando', 'elegante', 'rápido', 'gentil', 'alerta']
      }
    },
    {
      emoji: '🐦',
      en: 'Raven',
      es: 'Cuervo',
      traits: { en: ['intelligent', 'mysterious', 'bold'], es: ['inteligente', 'misterioso', 'atrevido'] },
      words: {
        en: ['flying', 'black', 'intelligent', 'watching', 'calling'],
        es: ['volando', 'negro', 'inteligente', 'observando', 'graznando']
      }
    },
    {
      emoji: '🐇',
      en: 'Rabbit',
      es: 'Conejo',
      traits: { en: ['quick', 'cautious', 'timid'], es: ['rápido', 'cauteloso', 'tímido'] },
      words: {
        en: ['hopping', 'fast', 'nervous', 'alert', 'hiding'],
        es: ['saltando', 'rápido', 'nervioso', 'alerta', 'escondido']
      }
    },
    {
      emoji: '🦅',
      en: 'Hawk',
      es: 'Halcón',
      traits: { en: ['focused', 'swift', 'fierce'], es: ['enfocado', 'rápido', 'feroz'] },
      words: {
        en: ['diving', 'focused', 'hunting', 'swift', 'sharp'],
        es: ['cayendo', 'enfocado', 'cazando', 'rápido', 'agudo']
      }
    }
  ];

  // Settings
  const settings = [
    {
      emoji: '🏔️',
      en: 'Mountain',
      es: 'Montaña',
      words: {
        en: ['steep', 'high', 'rocky', 'cold', 'distant'],
        es: ['empinado', 'alto', 'rocoso', 'frío', 'distante']
      }
    },
    {
      emoji: '🌲',
      en: 'Forest',
      es: 'Bosque',
      words: {
        en: ['dark', 'quiet', 'ancient', 'shadowy', 'dense'],
        es: ['oscuro', 'silencioso', 'antiguo', 'sombrío', 'denso']
      }
    },
    {
      emoji: '🏜️',
      en: 'Desert',
      es: 'Desierto',
      words: {
        en: ['hot', 'endless', 'dry', 'harsh', 'empty'],
        es: ['caliente', 'infinito', 'seco', 'duro', 'vacío']
      }
    },
    {
      emoji: '🌊',
      en: 'Ocean',
      es: 'Océano',
      words: {
        en: ['deep', 'vast', 'powerful', 'blue', 'endless'],
        es: ['profundo', 'vasto', 'poderoso', 'azul', 'infinito']
      }
    },
    {
      emoji: '☁️',
      en: 'Sky',
      es: 'Cielo',
      words: {
        en: ['high', 'open', 'vast', 'bright', 'limitless'],
        es: ['alto', 'abierto', 'vasto', 'brillante', 'ilimitado']
      }
    },
    {
      emoji: '🌋',
      en: 'Volcano',
      es: 'Volcán',
      words: {
        en: ['hot', 'dangerous', 'powerful', 'rumbling', 'fiery'],
        es: ['caliente', 'peligroso', 'poderoso', 'rugiendo', 'ardiente']
      }
    },
    {
      emoji: '❄️',
      en: 'Tundra',
      es: 'Tundra',
      words: {
        en: ['frozen', 'white', 'cold', 'quiet', 'harsh'],
        es: ['congelado', 'blanco', 'frío', 'silencioso', 'duro']
      }
    },
    {
      emoji: '🏞️',
      en: 'Valley',
      es: 'Valle',
      words: {
        en: ['green', 'peaceful', 'sheltered', 'hidden', 'quiet'],
        es: ['verde', 'pacífico', 'protegido', 'oculto', 'silencioso']
      }
    },
    {
      emoji: '🌌',
      en: 'Night Sky',
      es: 'Cielo Nocturno',
      words: {
        en: ['dark', 'starry', 'infinite', 'mysterious', 'vast'],
        es: ['oscuro', 'estrellado', 'infinito', 'misterioso', 'vasto']
      }
    },
    {
      emoji: '🏛️',
      en: 'Temple',
      es: 'Templo',
      words: {
        en: ['ancient', 'sacred', 'stone', 'quiet', 'mysterious'],
        es: ['antiguo', 'sagrado', 'piedra', 'silencioso', 'misterioso']
      }
    },
    {
      emoji: '🌾',
      en: 'Field',
      es: 'Campo',
      words: {
        en: ['open', 'golden', 'peaceful', 'wide', 'endless'],
        es: ['abierto', 'dorado', 'pacífico', 'amplio', 'infinito']
      }
    },
    {
      emoji: '🏞️',
      en: 'River',
      es: 'Río',
      words: {
        en: ['flowing', 'rushing', 'fast', 'deep', 'winding'],
        es: ['fluyendo', 'corriendo', 'rápido', 'profundo', 'serpenteante']
      }
    }
  ];

  // Terronez 10 Values - just as reference
  const terronezValues = [
    { id: 1, en: 'Believe we can', es: 'Creemos que podemos', emoji: '💪' },
    { id: 2, en: 'Listen actively', es: 'Escuchamos activamente', emoji: '👂' },
    { id: 3, en: 'Share our ideas', es: 'Compartimos ideas', emoji: '💡' },
    { id: 4, en: 'Help others', es: 'Ayudamos a otros', emoji: '🤝' },
    { id: 5, en: 'Keep everyone safe', es: 'Mantenemos seguridad', emoji: '🛡️' },
    { id: 6, en: 'Learn from mistakes', es: 'Aprendemos de errores', emoji: '📚' },
    { id: 7, en: 'Value all voices', es: 'Valoramos todas las voces', emoji: '🌟' },
    { id: 8, en: 'Be honest', es: 'Somos honestos', emoji: '💎' },
    { id: 9, en: 'Manage emotions', es: 'Manejamos emociones', emoji: '🧘' },
    { id: 10, en: 'Respect our space', es: 'Respetamos nuestro espacio', emoji: '🏠' }
  ];

  // State
  const [char1, setChar1] = useState(null);
  const [char2, setChar2] = useState(null);
  const [setting, setSetting] = useState(null);

  const [spinning, setSpinning] = useState({
    char1: false,
    char2: false,
    setting: false
  });

  const [locked, setLocked] = useState({
    char1: false,
    char2: false,
    setting: false
  });

  const [selectedTransitions, setSelectedTransitions] = useState([]);
  const [highlightedValue, setHighlightedValue] = useState(null);

  const allSpun = char1 && char2 && setting;

  // Generate sentence frames (not complete sentences)
  const generateSentenceStarters = () => {
    if (!allSpun) return null;

    return {
      exposition: {
        en: [
          `Long ago, in the ${setting[language]}...`,
          `The ${char1[language]} was known for...`,
          `In ancient times, when...`
        ],
        es: [
          `Hace mucho tiempo, en el/la ${setting[language]}...`,
          `El/La ${char1[language]} era conocido/a por...`,
          `En tiempos antiguos, cuando...`
        ]
      },
      rising: {
        en: [
          `One day, when the ${char2[language]}...`,
          `Everything changed when...`,
          `The ${char1[language]} noticed that...`
        ],
        es: [
          `Un día, cuando el/la ${char2[language]}...`,
          `Todo cambió cuando...`,
          `El/La ${char1[language]} notó que...`
        ]
      },
      climax: {
        en: [
          `The moment of truth came when...`,
          `Neither the ${char1[language]} nor the ${char2[language]} would...`,
          `In the heart of the ${setting[language]}...`
        ],
        es: [
          `El momento de la verdad llegó cuando...`,
          `Ni el/la ${char1[language]} ni el/la ${char2[language]} iba a...`,
          `En el corazón del/de la ${setting[language]}...`
        ]
      },
      falling: {
        en: [
          `Slowly, something began to change...`,
          `After this, the ${char1[language]}...`,
          `The ${char2[language]} showed that...`
        ],
        es: [
          `Lentamente, algo comenzó a cambiar...`,
          `Después de esto, el/la ${char1[language]}...`,
          `El/La ${char2[language]} mostró que...`
        ]
      },
      resolution: {
        en: [
          `From that day forward...`,
          `To this day, the ${setting[language]}...`,
          `The ${char1[language]} learned that...`
        ],
        es: [
          `Desde ese día en adelante...`,
          `Hasta el día de hoy, el/la ${setting[language]}...`,
          `El/La ${char1[language]} aprendió que...`
        ]
      }
    };
  };

  const sentenceStarters = generateSentenceStarters();

  // Transition words
  const transitions = {
    time: {
      en: ['Then', 'Next', 'Later', 'Soon', 'Meanwhile', 'Suddenly', 'Eventually', 'Finally'],
      es: ['Entonces', 'Luego', 'Más tarde', 'Pronto', 'Mientras tanto', 'De repente', 'Finalmente', 'Al final']
    },
    contrast: {
      en: ['However', 'But', 'Yet', 'Although', 'While', 'On the other hand'],
      es: ['Sin embargo', 'Pero', 'Aún así', 'Aunque', 'Mientras', 'Por otro lado']
    },
    cause: {
      en: ['Because', 'Since', 'As a result', 'Therefore', 'Consequently'],
      es: ['Porque', 'Ya que', 'Como resultado', 'Por lo tanto', 'Consecuentemente']
    }
  };

  // Spinning functions
  const spinCharacter = (charNum) => {
    const key = `char${charNum}`;
    setSpinning(prev => ({ ...prev, [key]: true }));
    setLocked(prev => ({ ...prev, [key]: false }));

    let count = 0;
    const maxSpins = 15 + Math.floor(Math.random() * 10);

    const interval = setInterval(() => {
      let newChar;
      do {
        newChar = characters[Math.floor(Math.random() * characters.length)];
      } while (
        (charNum === 1 && char2 && newChar.en === char2.en) ||
        (charNum === 2 && char1 && newChar.en === char1.en)
      );

      if (charNum === 1) setChar1(newChar);
      else setChar2(newChar);

      count++;
      if (count >= maxSpins) {
        clearInterval(interval);
        setSpinning(prev => ({ ...prev, [key]: false }));
      }
    }, 100);
  };

  const spinSetting = () => {
    setSpinning(prev => ({ ...prev, setting: true }));
    setLocked(prev => ({ ...prev, setting: false }));

    let count = 0;
    const maxSpins = 15 + Math.floor(Math.random() * 10);

    const interval = setInterval(() => {
      const newSetting = settings[Math.floor(Math.random() * settings.length)];
      setSetting(newSetting);

      count++;
      if (count >= maxSpins) {
        clearInterval(interval);
        setSpinning(prev => ({ ...prev, setting: false }));
      }
    }, 100);
  };

  const lockElement = (element) => {
    setLocked(prev => ({ ...prev, [element]: true }));
  };

  const toggleTransition = (word) => {
    if (selectedTransitions.includes(word)) {
      setSelectedTransitions(selectedTransitions.filter(w => w !== word));
    } else {
      setSelectedTransitions([...selectedTransitions, word]);
    }
  };

  const resetAll = () => {
    setChar1(null);
    setChar2(null);
    setSetting(null);
    setLocked({ char1: false, char2: false, setting: false });
    setSelectedTransitions([]);
    setHighlightedValue(null);
  };

  const text = {
    title: { en: '🌟 Myth Maker\'s Workshop 🌟', es: '🌟 Taller de Creadores de Mitos 🌟' },
    subtitle: { en: 'Spin your elements, choose your lesson, tell your story', es: 'Gira tus elementos, elige tu lección, cuenta tu historia' },
    char1Label: { en: 'Character 1', es: 'Personaje 1' },
    char2Label: { en: 'Character 2', es: 'Personaje 2' },
    settingLabel: { en: 'Setting', es: 'Escenario' },
    traits: { en: 'Traits:', es: 'Rasgos:' },
    spinBtn: { en: 'Spin!', es: '¡Girar!' },
    spinning: { en: 'Spinning...', es: 'Girando...' },
    keepIt: { en: '✅ Keep', es: '✅ Guardar' },
    spinAgain: { en: '🔄 Spin', es: '🔄 Girar' },
    terronezTitle: { en: 'Terronez T-Wolves Values', es: 'Valores Terronez T-Wolves' },
    terronezHelp: { en: 'Click a value your myth could teach', es: 'Haz clic en un valor que tu mito podría enseñar' },
    wordBankTitle: { en: 'Word Bank', es: 'Banco de Palabras' },
    transitionsTitle: { en: 'Transition Words', es: 'Palabras de Transición' },
    plotStructureTitle: { en: 'Plot Structure', es: 'Estructura del Argumento' },
    exposition: { en: 'Exposition (Beginning)', es: 'Exposición (Inicio)' },
    risingAction: { en: 'Rising Action', es: 'Acción Ascendente' },
    climax: { en: 'Climax (Turning Point)', es: 'Clímax (Punto Crucial)' },
    fallingAction: { en: 'Falling Action', es: 'Acción Descendente' },
    resolution: { en: 'Resolution (Ending)', es: 'Resolución (Final)' },
    resetBtn: { en: '🎲 Start Over', es: '🎲 Empezar de Nuevo' },
    writingReminder: { en: '✍️ Write in your shared group PowerPoint - use this as your guide!', es: '✍️ Escribe en tu PowerPoint compartido del grupo - ¡usa esto como tu guía!' }
  };

  const SpinnerCard = ({ title, emoji, label, traits, onSpin, isSpinning, element, isLocked }) => (
    <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border-2 border-blue-500 border-opacity-30 flex flex-col items-center relative">
      {isLocked && (
        <div className="absolute top-3 right-3 text-green-400 text-2xl">✓</div>
      )}
      <h3 className="text-sm font-bold text-blue-300 mb-3 uppercase tracking-wider">{title}</h3>
      <div className={`text-7xl mb-3 transition-transform duration-150 ${isSpinning ? 'animate-pulse scale-110' : ''}`}>
        {emoji || '?'}
      </div>
      <div className="text-center mb-3 min-h-[50px]">
        <p className="text-white font-bold text-xl mb-1">{label || '???'}</p>
        {traits && (
          <p className="text-blue-300 text-xs">
            {traits.join(', ')}
          </p>
        )}
      </div>
      <div className="flex gap-2 w-full">
        {!isLocked ? (
          <>
            <button
              onClick={onSpin}
              disabled={isSpinning}
              className={`flex-1 px-3 py-2 rounded-xl font-bold text-sm transition-all duration-200 ${
                isSpinning
                  ? 'bg-gray-600 cursor-not-allowed text-gray-400'
                  : 'bg-gradient-to-r from-blue-600 to-yellow-600 hover:from-blue-500 hover:to-yellow-500 text-white shadow-lg hover:shadow-yellow-500/50 hover:scale-105'
              }`}
            >
              {isSpinning ? text.spinning[language] : text.spinBtn[language]}
            </button>
            {emoji && !isSpinning && (
              <button
                onClick={() => lockElement(element)}
                className="px-3 py-2 rounded-xl font-bold text-sm bg-green-600 hover:bg-green-500 text-white transition-all hover:scale-105"
              >
                {text.keepIt[language]}
              </button>
            )}
          </>
        ) : (
          <button
            onClick={onSpin}
            className="flex-1 px-3 py-2 rounded-xl font-bold text-sm bg-orange-600 hover:bg-orange-500 text-white transition-all hover:scale-105"
          >
            {text.spinAgain[language]}
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-gray-900 relative overflow-hidden">
      {/* Cursor glow effect */}
      <div
        className="pointer-events-none fixed w-96 h-96 rounded-full opacity-20 blur-3xl bg-gradient-to-r from-blue-600 to-yellow-400 transition-all duration-200"
        style={{
          left: cursorPos.x - 192,
          top: cursorPos.y - 192,
        }}
      />

      {/* Starry background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-4">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-3 flex justify-between items-center">
          <div className="text-blue-300 font-semibold text-sm">
            {[char1, char2, setting].filter(Boolean).length}/3 Elements
          </div>
          <div className="flex gap-2">
            {allSpun && (
              <button
                onClick={resetAll}
                className="bg-gray-800 bg-opacity-60 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-sm font-semibold hover:bg-opacity-80 transition-all border border-blue-500 border-opacity-30"
              >
                {text.resetBtn[language]}
              </button>
            )}
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="bg-gray-800 bg-opacity-60 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-sm font-semibold hover:bg-opacity-80 transition-all border border-blue-500 border-opacity-30"
            >
              {language === 'en' ? '🇪🇸 ES' : '🇬🇧 EN'}
            </button>
          </div>
        </div>

        {/* Title */}
        <header className="text-center mb-4 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400 mb-1">
            {text.title[language]}
          </h1>
          <p className="text-sm text-blue-200">{text.subtitle[language]}</p>
        </header>

        {/* Writing Reminder */}
        <div className="max-w-5xl mx-auto mb-4">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg p-3 border-2 border-yellow-400">
            <p className="text-purple-950 text-center font-bold text-sm">
              {text.writingReminder[language]}
            </p>
          </div>
        </div>

        {/* Spinners - Horizontal */}
        <div className="max-w-7xl mx-auto mb-4">
          <div className="grid grid-cols-3 gap-4">
            <SpinnerCard
              title={text.char1Label[language]}
              emoji={char1?.emoji}
              label={char1?.[language]}
              traits={char1?.traits[language]}
              onSpin={() => spinCharacter(1)}
              isSpinning={spinning.char1}
              element="char1"
              isLocked={locked.char1}
            />

            <SpinnerCard
              title={text.settingLabel[language]}
              emoji={setting?.emoji}
              label={setting?.[language]}
              onSpin={spinSetting}
              isSpinning={spinning.setting}
              element="setting"
              isLocked={locked.setting}
            />

            <SpinnerCard
              title={text.char2Label[language]}
              emoji={char2?.emoji}
              label={char2?.[language]}
              traits={char2?.traits[language]}
              onSpin={() => spinCharacter(2)}
              isSpinning={spinning.char2}
              element="char2"
              isLocked={locked.char2}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left: Terronez Values + Word Banks */}
          <div className="space-y-4">
            {/* Terronez 10 Reference */}
            <div className="bg-gradient-to-br from-yellow-900 to-orange-900 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-2xl p-4 border-2 border-yellow-500 border-opacity-40">
              <h2 className="text-xl font-bold text-yellow-300 mb-2 text-center">
                🐺 {text.terronezTitle[language]}
              </h2>
              <p className="text-yellow-200 text-xs text-center mb-3">{text.terronezHelp[language]}</p>

              <div className="grid grid-cols-2 gap-2">
                {terronezValues.map(value => (
                  <button
                    key={value.id}
                    onClick={() => setHighlightedValue(highlightedValue === value.id ? null : value.id)}
                    className={`p-2 rounded-lg transition-all text-left ${
                      highlightedValue === value.id
                        ? 'bg-yellow-500 bg-opacity-80 border-2 border-yellow-300 scale-105'
                        : 'bg-gray-900 bg-opacity-40 border border-yellow-600 border-opacity-30 hover:bg-opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{value.emoji}</span>
                      <p className={`text-xs font-semibold leading-tight ${
                        highlightedValue === value.id ? 'text-gray-900' : 'text-yellow-100'
                      }`}>
                        {value[language]}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Word Bank */}
            {allSpun && (
              <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl shadow-2xl p-4 border border-blue-500 border-opacity-30">
                <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400 mb-3 text-center">
                  💬 {text.wordBankTitle[language]}
                </h2>

                <div className="space-y-3">
                  <div className="bg-blue-900 bg-opacity-40 p-3 rounded-lg min-h-[80px] flex flex-col justify-center">
                    <h3 className="font-bold text-blue-300 text-sm mb-2 text-center">
                      {char1.emoji} {char1[language]}
                    </h3>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {char1.words[language].map((word, i) => (
                        <div key={i} className="bg-gray-900 bg-opacity-60 px-2 py-1 rounded text-xs text-gray-200">
                          {word}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-yellow-900 bg-opacity-40 p-3 rounded-lg min-h-[80px] flex flex-col justify-center">
                    <h3 className="font-bold text-yellow-300 text-sm mb-2 text-center">
                      {setting.emoji} {setting[language]}
                    </h3>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {setting.words[language].map((word, i) => (
                        <div key={i} className="bg-gray-900 bg-opacity-60 px-2 py-1 rounded text-xs text-gray-200">
                          {word}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-800 bg-opacity-40 p-3 rounded-lg min-h-[80px] flex flex-col justify-center">
                    <h3 className="font-bold text-blue-200 text-sm mb-2 text-center">
                      {char2.emoji} {char2[language]}
                    </h3>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {char2.words[language].map((word, i) => (
                        <div key={i} className="bg-gray-900 bg-opacity-60 px-2 py-1 rounded text-xs text-gray-200">
                          {word}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Transitions */}
          <div>
            {allSpun && (
              <div className="space-y-4">
                {/* Plot Structure */}
                <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl shadow-2xl p-4 border border-blue-500 border-opacity-30">
                  <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400 mb-3 text-center">
                    📖 {text.plotStructureTitle[language]}
                  </h2>

                  <div className="space-y-3">
                    {/* Exposition */}
                    <div className="bg-green-900 bg-opacity-40 p-3 rounded-lg">
                      <h3 className="font-bold text-green-300 text-xs mb-2">🌅 {text.exposition[language]}</h3>
                      <div className="space-y-1.5">
                        {sentenceStarters?.exposition[language].map((starter, i) => (
                          <div key={i} className="bg-gray-900 bg-opacity-60 p-2 rounded text-xs text-gray-200 leading-snug">
                            {starter}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rising Action */}
                    <div className="bg-blue-800 bg-opacity-40 p-3 rounded-lg">
                      <h3 className="font-bold text-blue-300 text-xs mb-2">📈 {text.risingAction[language]}</h3>
                      <div className="space-y-1.5">
                        {sentenceStarters?.rising[language].map((starter, i) => (
                          <div key={i} className="bg-gray-900 bg-opacity-60 p-2 rounded text-xs text-gray-200 leading-snug">
                            {starter}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Climax */}
                    <div className="bg-red-900 bg-opacity-40 p-3 rounded-lg">
                      <h3 className="font-bold text-red-300 text-xs mb-2">⚡ {text.climax[language]}</h3>
                      <div className="space-y-1.5">
                        {sentenceStarters?.climax[language].map((starter, i) => (
                          <div key={i} className="bg-gray-900 bg-opacity-60 p-2 rounded text-xs text-gray-200 leading-snug">
                            {starter}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Falling Action */}
                    <div className="bg-orange-900 bg-opacity-40 p-3 rounded-lg">
                      <h3 className="font-bold text-orange-300 text-xs mb-2">📉 {text.fallingAction[language]}</h3>
                      <div className="space-y-1.5">
                        {sentenceStarters?.falling[language].map((starter, i) => (
                          <div key={i} className="bg-gray-900 bg-opacity-60 p-2 rounded text-xs text-gray-200 leading-snug">
                            {starter}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Resolution */}
                    <div className="bg-purple-900 bg-opacity-40 p-3 rounded-lg">
                      <h3 className="font-bold text-purple-300 text-xs mb-2">🎯 {text.resolution[language]}</h3>
                      <div className="space-y-1.5">
                        {sentenceStarters?.resolution[language].map((starter, i) => (
                          <div key={i} className="bg-gray-900 bg-opacity-60 p-2 rounded text-xs text-gray-200 leading-snug">
                            {starter}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transitions */}
                <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl shadow-2xl p-4 border border-blue-500 border-opacity-30">
                  <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400 mb-3 text-center">
                    🔗 {text.transitionsTitle[language]}
                  </h2>

                  <div className="space-y-3">
                    {Object.entries(transitions).map(([key, values]) => (
                      <div key={key} className="bg-blue-900 bg-opacity-40 p-3 rounded-lg min-h-[70px] flex items-center justify-center">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {values[language].map((word, i) => (
                            <button
                              key={i}
                              onClick={() => toggleTransition(word)}
                              className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                                selectedTransitions.includes(word)
                                  ? 'bg-yellow-500 text-blue-950 font-bold scale-105'
                                  : 'bg-gray-900 bg-opacity-60 text-gray-200 hover:bg-gray-700'
                              }`}
                            >
                              {word}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MythMakersWorkshop;
