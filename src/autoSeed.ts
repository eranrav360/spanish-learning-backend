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
    } else {
      console.log('✓ Database already has data, skipping seed');
    }
  } catch (error) {
    console.error('❌ Auto-seed error:', error);
  }
}
