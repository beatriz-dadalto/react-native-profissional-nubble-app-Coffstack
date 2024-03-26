import {parseISO, differenceInSeconds, format} from 'date-fns';
/**
 * @description Identificar a data e ver o tempo dela relativo ao momento
 * atual. Exemplo: 2 dias, 1 semana, 3 meses.
 * @param dateISO Recebe a data em  formato ISO 8601 que é uma norma
 * internacional para representação de data e hora emitida pela
 * Organização Internacional para Padronização.
 * @function format retorna a data em formato especificado quando
 * a data for muito antiga.
 * @returns Retorna a data formatada no padrão do app.
 */
function formatRelative(dateISO: string): string {
  const date = parseISO(dateISO);
  const now = new Date();

  const diffInSeconds = differenceInSeconds(now, date);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} s`;
  }

  const diffInMinutes = Math.round(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} m`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} h`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} d`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} sem`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} m`;
  }

  return format(date, 'dd/MM/yyyy');
}

export const dateUtils = {
  formatRelative,
};
