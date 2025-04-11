import type { ICardData } from '@/types/IDataCard';
import card1 from '@/assets/images/card-1.png';
import card2 from '@/assets/images/card-2.png';
import card3 from '@/assets/images/card-3.png';

export const cards: ICardData[] = [
  {
    text: 'Identificar los posibles <strong>síntomas de un uso excesivo de dispositivos</strong>, como la dificultad para conciliar el sueño, la sensación de ansiedad, la falta de concentración o los cambios de estado de ánimo, entre otros.',
    image: card1
  },
  {
    text: 'Reconocer las <strong>posibles adicciones</strong> que pueden surgir de este uso excesivo de las pantallas, como la <strong>nomofobia, el vamping, el phubbing o el síndrome FOMO</strong>. Esto permitirá a las personas jóvenes reflexionar sobre sus propios hábitos digitales.',
    image: card2
  },
  {
    text: 'Conocer las <strong>herramientas de desconexión digital en sus dispositivos</strong> para mejorar su tiempo de conexión y establecer límites saludables, promoviendo así un equilibrio más positivo entre su vida digital y su bienestar personal.',
    image: card3
  }
]