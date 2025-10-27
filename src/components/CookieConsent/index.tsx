'use client'

import { useEffect, useRef } from 'react'
import { useLocale } from 'next-intl'
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import * as CookieConsent from 'vanilla-cookieconsent'
import styles from './CookieConsent.module.css'

const CookieConsentBanner = () => {
  const locale = useLocale()
  const isInitialized = useRef(false)

  useEffect(() => {
    const cookieLocale = locale === 'pt-BR' ? 'pt' : locale

    // Se já foi inicializado, apenas atualiza o idioma
    if (isInitialized.current) {
      CookieConsent.setLanguage(cookieLocale)
      return
    }

    // Primeira inicialização
    isInitialized.current = true
    CookieConsent.run({
      // Mode de consentimento (opt-in = usuário precisa aceitar explicitamente)
      mode: 'opt-in',

      // Revisão a cada 12 meses (365 dias)
      revision: 1,

      // Idioma atual baseado no next-intl
      language: {
        default: cookieLocale,

        translations: {
          pt: {
            consentModal: {
              title: 'Utilizamos Cookies',
              description: 'Este site utiliza cookies para melhorar sua experiência. Cookies essenciais são necessários para o funcionamento básico, enquanto outros nos ajudam a entender como você usa nosso site.',
              acceptAllBtn: 'Aceitar Todos',
              acceptNecessaryBtn: 'Rejeitar Opcionais',
              showPreferencesBtn: 'Gerenciar Preferências',
              footer: '<a href="/pt-BR/politica-privacidade">Política de Privacidade</a>\n<a href="/pt-BR/politica-cookies">Política de Cookies</a>'
            },
            preferencesModal: {
              title: 'Preferências de Cookies',
              acceptAllBtn: 'Aceitar Todos',
              acceptNecessaryBtn: 'Rejeitar Opcionais',
              savePreferencesBtn: 'Salvar Preferências',
              closeIconLabel: 'Fechar',
              serviceCounterLabel: 'Serviço|Serviços',
              sections: [
                {
                  title: 'Uso de Cookies',
                  description: 'Utilizamos cookies para garantir funcionalidades básicas do site e melhorar sua experiência online. Você pode escolher aceitar ou recusar cada categoria quando desejar. Para mais detalhes sobre cookies e dados sensíveis, leia a <a href="/pt-BR/politica-privacidade" class="cc-link">Política de Privacidade</a> e a <a href="/pt-BR/politica-cookies" class="cc-link">Política de Cookies</a> completas.'
                },
                {
                  title: 'Cookies Estritamente Necessários',
                  description: 'Estes cookies são essenciais para o funcionamento adequado do site. Sem eles, alguns recursos não funcionarão corretamente. Eles são definidos apenas em resposta às suas ações, como preferência de idioma e configurações de privacidade. Você pode configurar seu navegador para bloquear esses cookies, mas algumas partes do site podem não funcionar.',
                  linkedCategory: 'necessary'
                },
                {
                  title: 'Cookies de Análise',
                  description: 'Estes cookies nos ajudam a entender como os visitantes interagem com o site, coletando e reportando informações anonimamente. Isso nos permite melhorar continuamente nosso site.',
                  linkedCategory: 'analytics',
                  cookieTable: {
                    headers: {
                      name: 'Cookie',
                      domain: 'Domínio',
                      expiration: 'Expiração',
                      description: 'Descrição'
                    },
                    body: [
                      {
                        name: '_ga',
                        domain: location.hostname,
                        expiration: '2 anos',
                        description: 'Cookie do Google Analytics para distinguir usuários'
                      },
                      {
                        name: '_ga_*',
                        domain: location.hostname,
                        expiration: '2 anos',
                        description: 'Cookie do Google Analytics para persistir estado da sessão'
                      }
                    ]
                  }
                },
                {
                  title: 'Mais Informações',
                  description: 'Para dúvidas sobre nossa política de cookies e suas escolhas, entre em contato conosco através do email <a href="mailto:privacidade@unictava.com">privacidade@unictava.com</a>.'
                }
              ]
            }
          },
          en: {
            consentModal: {
              title: 'We Use Cookies',
              description: 'This website uses cookies to improve your experience. Essential cookies are necessary for basic functionality, while others help us understand how you use our site.',
              acceptAllBtn: 'Accept All',
              acceptNecessaryBtn: 'Reject Optional',
              showPreferencesBtn: 'Manage Preferences',
              footer: '<a href="/en/politica-privacidade">Privacy Policy</a>\n<a href="/en/politica-cookies">Cookie Policy</a>'
            },
            preferencesModal: {
              title: 'Cookie Preferences',
              acceptAllBtn: 'Accept All',
              acceptNecessaryBtn: 'Reject Optional',
              savePreferencesBtn: 'Save Preferences',
              closeIconLabel: 'Close',
              serviceCounterLabel: 'Service|Services',
              sections: [
                {
                  title: 'Cookie Usage',
                  description: 'We use cookies to ensure basic website functionality and improve your online experience. You can choose to accept or reject each category at any time. For more details about cookies and sensitive data, please read our complete <a href="/en/politica-privacidade" class="cc-link">Privacy Policy</a> and <a href="/en/politica-cookies" class="cc-link">Cookie Policy</a>.'
                },
                {
                  title: 'Strictly Necessary Cookies',
                  description: 'These cookies are essential for the proper functioning of the website. Without them, some features will not work correctly. They are only set in response to your actions, such as language preference and privacy settings. You can set your browser to block these cookies, but some parts of the site may not work.',
                  linkedCategory: 'necessary'
                },
                {
                  title: 'Analytics Cookies',
                  description: 'These cookies help us understand how visitors interact with the website by collecting and reporting information anonymously. This allows us to continuously improve our website.',
                  linkedCategory: 'analytics',
                  cookieTable: {
                    headers: {
                      name: 'Cookie',
                      domain: 'Domain',
                      expiration: 'Expiration',
                      description: 'Description'
                    },
                    body: [
                      {
                        name: '_ga',
                        domain: location.hostname,
                        expiration: '2 years',
                        description: 'Google Analytics cookie to distinguish users'
                      },
                      {
                        name: '_ga_*',
                        domain: location.hostname,
                        expiration: '2 years',
                        description: 'Google Analytics cookie to persist session state'
                      }
                    ]
                  }
                },
                {
                  title: 'More Information',
                  description: 'For questions about our cookie policy and your choices, please contact us at <a href="mailto:privacidade@unictava.com">privacidade@unictava.com</a>.'
                }
              ]
            }
          },
          it: {
            consentModal: {
              title: 'Utilizziamo i Cookie',
              description: 'Questo sito utilizza i cookie per migliorare la tua esperienza. I cookie essenziali sono necessari per le funzionalità di base, mentre altri ci aiutano a capire come utilizzi il nostro sito.',
              acceptAllBtn: 'Accetta Tutti',
              acceptNecessaryBtn: 'Rifiuta Opzionali',
              showPreferencesBtn: 'Gestisci Preferenze',
              footer: '<a href="/it/politica-privacidade">Informativa sulla Privacy</a>\n<a href="/it/politica-cookies">Politica sui Cookie</a>'
            },
            preferencesModal: {
              title: 'Preferenze sui Cookie',
              acceptAllBtn: 'Accetta Tutti',
              acceptNecessaryBtn: 'Rifiuta Opzionali',
              savePreferencesBtn: 'Salva Preferenze',
              closeIconLabel: 'Chiudi',
              serviceCounterLabel: 'Servizio|Servizi',
              sections: [
                {
                  title: 'Utilizzo dei Cookie',
                  description: 'Utilizziamo i cookie per garantire le funzionalità di base del sito web e migliorare la tua esperienza online. Puoi scegliere di accettare o rifiutare ogni categoria in qualsiasi momento. Per maggiori dettagli sui cookie e sui dati sensibili, leggi la nostra <a href="/it/politica-privacidade" class="cc-link">Informativa sulla Privacy</a> e <a href="/it/politica-cookies" class="cc-link">Politica sui Cookie</a> complete.'
                },
                {
                  title: 'Cookie Strettamente Necessari',
                  description: 'Questi cookie sono essenziali per il corretto funzionamento del sito web. Senza di essi, alcune funzionalità non funzioneranno correttamente. Vengono impostati solo in risposta alle tue azioni, come la preferenza della lingua e le impostazioni sulla privacy. Puoi configurare il tuo browser per bloccare questi cookie, ma alcune parti del sito potrebbero non funzionare.',
                  linkedCategory: 'necessary'
                },
                {
                  title: 'Cookie Analitici',
                  description: 'Questi cookie ci aiutano a capire come i visitatori interagiscono con il sito web raccogliendo e riportando informazioni in modo anonimo. Questo ci consente di migliorare continuamente il nostro sito web.',
                  linkedCategory: 'analytics',
                  cookieTable: {
                    headers: {
                      name: 'Cookie',
                      domain: 'Dominio',
                      expiration: 'Scadenza',
                      description: 'Descrizione'
                    },
                    body: [
                      {
                        name: '_ga',
                        domain: location.hostname,
                        expiration: '2 anni',
                        description: 'Cookie di Google Analytics per distinguere gli utenti'
                      },
                      {
                        name: '_ga_*',
                        domain: location.hostname,
                        expiration: '2 anni',
                        description: 'Cookie di Google Analytics per mantenere lo stato della sessione'
                      }
                    ]
                  }
                },
                {
                  title: 'Ulteriori Informazioni',
                  description: 'Per domande sulla nostra politica sui cookie e sulle tue scelte, contattaci all\'indirizzo email <a href="mailto:privacidade@unictava.com">privacidade@unictava.com</a>.'
                }
              ]
            }
          }
        }
      },

      // Categorias de cookies
      categories: {
        necessary: {
          enabled: true,
          readOnly: true
        },
        analytics: {
          enabled: false,
          readOnly: false,
          autoClear: {
            cookies: [
              {
                name: /^(_ga|_gid)/
              }
            ]
          }
        }
      }
    })
  }, [locale])

  return null
}

export default CookieConsentBanner
