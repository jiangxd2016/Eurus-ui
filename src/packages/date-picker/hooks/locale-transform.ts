import { dayjs } from '@/utils/date';
import { useI18n } from '@/packages/locale';

export default function useLocaleTransform() {
  const { locale: i18nLocale, t } = useI18n();
  dayjs.locale(i18nLocale.value.toLowerCase());

  const transform: typeof t = (key: string, ...args: any[]): any => {
    return t(key, ...args);
  };

  return transform;
}
