import Lesson from './models/Lesson';
import Exercise from './models/Exercise';

const lessonsData = [
  {
    title: 'ברכות בסיסיות',
    description: 'למד איך להגיד שלום ולהתנהג בנימוס',
    level: 1,
    icon: '👋',
    color: '#58CC02',
    totalExercises: 6,
  },
  {
    title: 'מספרים 1-10',
    description: 'למד לספור בספרדית',
    level: 2,
    icon: '🔢',
    color: '#FF9600',
    totalExercises: 5,
  },
  {
    title: 'משפחה',
    description: 'מילים על בני משפחה',
    level: 3,
    icon: '👨‍👩‍👧‍👦',
    color: '#CE82FF',
    totalExercises: 6,
  },
  {
    title: 'צבעים',
    description: 'למד את כל הצבעים בספרדית',
    level: 4,
    icon: '🎨',
    color: '#1CB0F6',
    totalExercises: 5,
  },
  {
    title: 'אוכל ומשקאות',
    description: 'מילים על אוכל ומשקאות',
    level: 5,
    icon: '🍕',
    color: '#FF4B4B',
    totalExercises: 6,
  },
  {
    title: 'בעלי חיים',
    description: 'שמות של בעלי חיים בספרדית',
    level: 6,
    icon: '🐶',
    color: '#FF6B6B',
    totalExercises: 6,
  },
  {
    title: 'ימות השבוע',
    description: 'למד את שמות ימות השבוע',
    level: 7,
    icon: '📅',
    color: '#4ECDC4',
    totalExercises: 5,
  },
  {
    title: 'גוף האדם',
    description: 'חלקי הגוף בספרדית',
    level: 8,
    icon: '👤',
    color: '#95E1D3',
    totalExercises: 6,
  },
  {
    title: 'בגדים',
    description: 'שמות של פריטי לבוש',
    level: 9,
    icon: '👕',
    color: '#F38181',
    totalExercises: 5,
  },
  {
    title: 'מזג אויר ועונות',
    description: 'תיאור מזג האוויר והעונות',
    level: 10,
    icon: '⛅',
    color: '#AA96DA',
    totalExercises: 6,
  },
  {
    title: 'מקומות בעיר',
    description: 'מקומות חשובים בעיר',
    level: 11,
    icon: '🏙️',
    color: '#FCBF49',
    totalExercises: 6,
  },
  {
    title: 'פעלים בסיסיים',
    description: 'פעלים נפוצים בספרדית',
    level: 12,
    icon: '🏃',
    color: '#F77F00',
    totalExercises: 6,
  },
  {
    title: 'תחביבים וספורט',
    description: 'פעילויות פנאי ותחביבים',
    level: 13,
    icon: '⚽',
    color: '#06D6A0',
    totalExercises: 5,
  },
  {
    title: 'בבית',
    description: 'חפצים וחדרים בבית',
    level: 14,
    icon: '🏠',
    color: '#118AB2',
    totalExercises: 6,
  },
  {
    title: 'רגשות ותחושות',
    description: 'תיאור רגשות ומצבי רוח',
    level: 15,
    icon: '😊',
    color: '#EF476F',
    totalExercises: 5,
  },
];

const generateExercises = (lessonId: string, lessonLevel: number) => {
  switch (lessonLevel) {
    case 1:
      return [
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "שלום" בספרדית?', correctAnswer: 'Hola', options: ['Hola', 'Adiós', 'Gracias', 'Por favor'] },
        { lessonId, type: 'translation', question: 'בוקר טוב', correctAnswer: 'Buenos días' },
        { lessonId, type: 'multipleChoice', question: 'מה המשמעות של "Gracias"?', correctAnswer: 'תודה', options: ['תודה', 'סליחה', 'להתראות', 'בבקשה'] },
        { lessonId, type: 'translation', question: 'להתראות', correctAnswer: 'Adiós' },
        { lessonId, type: 'fillInBlank', question: '¿Cómo estás? - ___ bien', correctAnswer: 'Muy', hint: 'מאוד' },
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "בבקשה" בספרדית?', correctAnswer: 'Por favor', options: ['Por favor', 'Gracias', 'De nada', 'Perdón'] },
      ];
    case 2:
      return [
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "1" בספרדית?', correctAnswer: 'Uno', options: ['Uno', 'Dos', 'Tres', 'Cuatro'] },
        { lessonId, type: 'translation', question: 'שלושה', correctAnswer: 'Tres' },
        { lessonId, type: 'multipleChoice', question: 'מה המספר "Cinco"?', correctAnswer: '5', options: ['3', '4', '5', '6'] },
        { lessonId, type: 'fillInBlank', question: 'Uno, dos, ___, cuatro', correctAnswer: 'tres', hint: '3' },
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "10" בספרדית?', correctAnswer: 'Diez', options: ['Ocho', 'Nueve', 'Diez', 'Once'] },
      ];
    case 3:
      return [
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "אמא" בספרדית?', correctAnswer: 'Madre', options: ['Padre', 'Madre', 'Hermano', 'Hermana'] },
        { lessonId, type: 'translation', question: 'אבא', correctAnswer: 'Padre' },
        { lessonId, type: 'multipleChoice', question: 'מה המשמעות של "Hermano"?', correctAnswer: 'אח', options: ['אח', 'אחות', 'בן', 'בת'] },
        { lessonId, type: 'translation', question: 'אחות', correctAnswer: 'Hermana' },
        { lessonId, type: 'fillInBlank', question: 'Mi ___ es muy grande', correctAnswer: 'familia', hint: 'משפחה' },
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "בן" בספרדית?', correctAnswer: 'Hijo', options: ['Hijo', 'Hija', 'Padre', 'Abuelo'] },
      ];
    case 4:
      return [
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "אדום" בספרדית?', correctAnswer: 'Rojo', options: ['Rojo', 'Azul', 'Verde', 'Amarillo'] },
        { lessonId, type: 'translation', question: 'כחול', correctAnswer: 'Azul' },
        { lessonId, type: 'multipleChoice', question: 'מה הצבע "Verde"?', correctAnswer: 'ירוק', options: ['אדום', 'כחול', 'ירוק', 'צהוב'] },
        { lessonId, type: 'fillInBlank', question: 'El sol es ___', correctAnswer: 'amarillo', hint: 'צהוב' },
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "שחור" בספרדית?', correctAnswer: 'Negro', options: ['Blanco', 'Negro', 'Gris', 'Rosa'] },
      ];
    case 5:
      return [
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "מים" בספרדית?', correctAnswer: 'Agua', options: ['Agua', 'Leche', 'Café', 'Té'] },
        { lessonId, type: 'translation', question: 'לחם', correctAnswer: 'Pan' },
        { lessonId, type: 'multipleChoice', question: 'מה המשמעות של "Manzana"?', correctAnswer: 'תפוח', options: ['תפוח', 'בננה', 'תפוז', 'תות'] },
        { lessonId, type: 'fillInBlank', question: 'Me gusta el ___', correctAnswer: 'café', hint: 'קפה' },
        { lessonId, type: 'translation', question: 'גבינה', correctAnswer: 'Queso' },
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "בשר" בספרדית?', correctAnswer: 'Carne', options: ['Carne', 'Pescado', 'Pollo', 'Arroz'] },
      ];

    case 6: // בעלי חיים
      return [
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "כלב" בספרדית?', correctAnswer: 'Perro', options: ['Perro', 'Gato', 'Pájaro', 'Pez'] },
        { lessonId, type: 'translation', question: 'חתול', correctAnswer: 'Gato' },
        { lessonId, type: 'multipleChoice', question: 'מה המשמעות של "Caballo"?', correctAnswer: 'סוס', options: ['סוס', 'פרה', 'חזיר', 'תרנגולת'] },
        { lessonId, type: 'fillInBlank', question: 'El ___ vuela en el cielo', correctAnswer: 'pájaro', hint: 'ציפור' },
        { lessonId, type: 'translation', question: 'דג', correctAnswer: 'Pez' },
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "פרפר" בספרדית?', correctAnswer: 'Mariposa', options: ['Mariposa', 'Abeja', 'Hormiga', 'Araña'] },
      ];

    case 7: // ימות השבוע
      return [
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "יום ראשון" בספרדית?', correctAnswer: 'Domingo', options: ['Domingo', 'Lunes', 'Martes', 'Sábado'] },
        { lessonId, type: 'translation', question: 'יום שני', correctAnswer: 'Lunes' },
        { lessonId, type: 'multipleChoice', question: 'מה היום "Viernes"?', correctAnswer: 'יום שישי', options: ['יום חמישי', 'יום שישי', 'יום שבת', 'יום ראשון'] },
        { lessonId, type: 'fillInBlank', question: 'Hoy es ___, mañana es jueves', correctAnswer: 'miércoles', hint: 'יום רביעי' },
        { lessonId, type: 'translation', question: 'יום שבת', correctAnswer: 'Sábado' },
      ];

    case 8: // גוף האדם
      return [
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "ראש" בספרדית?', correctAnswer: 'Cabeza', options: ['Cabeza', 'Cara', 'Ojos', 'Boca'] },
        { lessonId, type: 'translation', question: 'יד', correctAnswer: 'Mano' },
        { lessonId, type: 'multipleChoice', question: 'מה המשמעות של "Ojos"?', correctAnswer: 'עיניים', options: ['עיניים', 'אוזניים', 'אף', 'פה'] },
        { lessonId, type: 'fillInBlank', question: 'Camino con mis ___', correctAnswer: 'piernas', hint: 'רגליים' },
        { lessonId, type: 'translation', question: 'לב', correctAnswer: 'Corazón' },
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "שיער" בספרדית?', correctAnswer: 'Pelo', options: ['Pelo', 'Cara', 'Diente', 'Brazo'] },
      ];

    case 9: // בגדים
      return [
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "חולצה" בספרדית?', correctAnswer: 'Camisa', options: ['Camisa', 'Pantalón', 'Zapatos', 'Sombrero'] },
        { lessonId, type: 'translation', question: 'מכנסיים', correctAnswer: 'Pantalón' },
        { lessonId, type: 'multipleChoice', question: 'מה המשמעות של "Zapatos"?', correctAnswer: 'נעליים', options: ['נעליים', 'גרביים', 'כפפות', 'חגורה'] },
        { lessonId, type: 'fillInBlank', question: 'En invierno uso ___', correctAnswer: 'abrigo', hint: 'מעיל' },
        { lessonId, type: 'translation', question: 'שמלה', correctAnswer: 'Vestido' },
      ];

    case 10: // מזג אויר ועונות
      return [
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "קיץ" בספרדית?', correctAnswer: 'Verano', options: ['Verano', 'Invierno', 'Primavera', 'Otoño'] },
        { lessonId, type: 'translation', question: 'חורף', correctAnswer: 'Invierno' },
        { lessonId, type: 'multipleChoice', question: 'מה המשמעות של "Lluvia"?', correctAnswer: 'גשם', options: ['שמש', 'גשם', 'שלג', 'רוח'] },
        { lessonId, type: 'fillInBlank', question: 'Hace ___ hoy', correctAnswer: 'calor', hint: 'חום' },
        { lessonId, type: 'translation', question: 'אביב', correctAnswer: 'Primavera' },
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "שלג" בספרדית?', correctAnswer: 'Nieve', options: ['Nieve', 'Lluvia', 'Sol', 'Viento'] },
      ];

    case 11: // מקומות בעיר
      return [
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "בית ספר" בספרדית?', correctAnswer: 'Escuela', options: ['Escuela', 'Hospital', 'Tienda', 'Museo'] },
        { lessonId, type: 'translation', question: 'בית חולים', correctAnswer: 'Hospital' },
        { lessonId, type: 'multipleChoice', question: 'מה המשמעות של "Biblioteca"?', correctAnswer: 'ספרייה', options: ['ספרייה', 'בנק', 'פארק', 'תחנה'] },
        { lessonId, type: 'fillInBlank', question: 'Voy al ___ para comprar', correctAnswer: 'supermercado', hint: 'סופרמרקט' },
        { lessonId, type: 'translation', question: 'מסעדה', correctAnswer: 'Restaurante' },
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "תחנת רכבת" בספרדית?', correctAnswer: 'Estación de tren', options: ['Estación de tren', 'Aeropuerto', 'Calle', 'Plaza'] },
      ];

    case 12: // פעלים בסיסיים
      return [
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "לאכול" בספרדית?', correctAnswer: 'Comer', options: ['Comer', 'Beber', 'Dormir', 'Hablar'] },
        { lessonId, type: 'translation', question: 'לשתות', correctAnswer: 'Beber' },
        { lessonId, type: 'multipleChoice', question: 'מה המשמעות של "Caminar"?', correctAnswer: 'ללכת', options: ['ללכת', 'לרוץ', 'לקפוץ', 'לשבת'] },
        { lessonId, type: 'fillInBlank', question: 'Me gusta ___ música', correctAnswer: 'escuchar', hint: 'להאזין' },
        { lessonId, type: 'translation', question: 'לישון', correctAnswer: 'Dormir' },
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "לקרוא" בספרדית?', correctAnswer: 'Leer', options: ['Leer', 'Escribir', 'Ver', 'Pensar'] },
      ];

    case 13: // תחביבים וספורט
      return [
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "כדורגל" בספרדית?', correctAnswer: 'Fútbol', options: ['Fútbol', 'Baloncesto', 'Tenis', 'Natación'] },
        { lessonId, type: 'translation', question: 'מוסיקה', correctAnswer: 'Música' },
        { lessonId, type: 'multipleChoice', question: 'מה המשמעות של "Pintura"?', correctAnswer: 'ציור', options: ['ציור', 'ריקוד', 'שחייה', 'קריאה'] },
        { lessonId, type: 'fillInBlank', question: 'Me encanta jugar al ___', correctAnswer: 'tenis', hint: 'טניס' },
        { lessonId, type: 'translation', question: 'ריקוד', correctAnswer: 'Baile' },
      ];

    case 14: // בבית
      return [
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "מטבח" בספרדית?', correctAnswer: 'Cocina', options: ['Cocina', 'Baño', 'Dormitorio', 'Sala'] },
        { lessonId, type: 'translation', question: 'חדר שינה', correctAnswer: 'Dormitorio' },
        { lessonId, type: 'multipleChoice', question: 'מה המשמעות של "Mesa"?', correctAnswer: 'שולחן', options: ['שולחן', 'כיסא', 'ספה', 'מיטה'] },
        { lessonId, type: 'fillInBlank', question: 'La comida está en el ___', correctAnswer: 'refrigerador', hint: 'מקרר' },
        { lessonId, type: 'translation', question: 'חלון', correctAnswer: 'Ventana' },
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "דלת" בספרדית?', correctAnswer: 'Puerta', options: ['Puerta', 'Pared', 'Techo', 'Piso'] },
      ];

    case 15: // רגשות ותחושות
      return [
        { lessonId, type: 'multipleChoice', question: 'איך אומרים "שמח" בספרדית?', correctAnswer: 'Feliz', options: ['Feliz', 'Triste', 'Enojado', 'Cansado'] },
        { lessonId, type: 'translation', question: 'עצוב', correctAnswer: 'Triste' },
        { lessonId, type: 'multipleChoice', question: 'מה המשמעות של "Emocionado"?', correctAnswer: 'מתרגש', options: ['מתרגש', 'עייף', 'כועס', 'מפחד'] },
        { lessonId, type: 'fillInBlank', question: 'Estoy muy ___ hoy', correctAnswer: 'contento', hint: 'מרוצה' },
        { lessonId, type: 'translation', question: 'אוהב', correctAnswer: 'Enamorado' },
      ];

    default:
      return [];
  }
};

export async function autoSeedIfEmpty() {
  try {
    const count = await Lesson.countDocuments();

    if (count === 0) {
      console.log('📦 Database is empty, seeding data...');

      const lessons = await Lesson.insertMany(lessonsData);
      console.log('📚 Inserted lessons');

      for (const lesson of lessons) {
        const exercises = generateExercises(lesson._id.toString(), lesson.level);
        await Exercise.insertMany(exercises);
      }
      console.log('✏️  Inserted exercises');
      console.log('🎉 Auto-seeding completed!');
    } else if (count < lessonsData.length) {
      console.log(`📦 Found ${count} lessons, adding ${lessonsData.length - count} new lessons...`);

      // Get existing lesson levels
      const existingLessons = await Lesson.find({}, { level: 1 });
      const existingLevels = new Set(existingLessons.map(l => l.level));

      // Add only new lessons
      const newLessons = lessonsData.filter(l => !existingLevels.has(l.level));

      if (newLessons.length > 0) {
        const addedLessons = await Lesson.insertMany(newLessons);
        console.log(`📚 Added ${addedLessons.length} new lessons`);

        for (const lesson of addedLessons) {
          const exercises = generateExercises(lesson._id.toString(), lesson.level);
          await Exercise.insertMany(exercises);
        }
        console.log('✏️  Added exercises for new lessons');
        console.log('🎉 Update completed!');
      }
    } else {
      console.log('✓ Database already has all lessons');
    }
  } catch (error) {
    console.error('❌ Auto-seed error:', error);
  }
}
