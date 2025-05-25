import { id } from 'date-fns/locale';
import { format } from 'date-fns';

export const thisYear = () => {
  return format(new Date(), 'yyyy', { locale: id });
};