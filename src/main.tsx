import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import App from './App'
import '@fontsource/darker-grotesque/400.css'
import '@fontsource/darker-grotesque/700.css'
import '@fontsource/bbh-bogle/400.css'
import '@fontsource/dela-gothic-one/400.css'
import '@fontsource/sawarabi-gothic/japanese-400.css'
import { syncHtmlLang } from './utils/syncHtmlLang'

// this sets the default language
syncHtmlLang()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
