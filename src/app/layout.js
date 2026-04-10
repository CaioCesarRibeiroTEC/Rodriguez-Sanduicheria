import './globals.css'
import StyledComponentsRegistry from '../lib/registry'
import { UserStore } from '../context/userContext'
import { AppShell } from '../components/AppShell' 

export const metadata = {
  title: 'Rodrigues Sanduicheria',
  description: 'O melhor sanduíche da região!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <UserStore>
            <AppShell>
              {children}
            </AppShell>
          </UserStore>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}