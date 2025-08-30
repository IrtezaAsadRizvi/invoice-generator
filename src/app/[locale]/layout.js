import Navigation from '@/components/navigation/Navigation'
import StoreProvider from '@/state/StoreProvider'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params; // <-- await it

  if (!locale || !routing.locales.includes(locale)) notFound()
  const messages = await getMessages({ locale })

  return (
    <StoreProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Navigation />
        {children}
      </NextIntlClientProvider>
    </StoreProvider>
  )
}


