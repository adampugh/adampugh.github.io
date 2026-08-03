import { getLocale } from '@/paraglide/runtime'

export function syncHtmlLang() {
  document.documentElement.lang = getLocale()
}
