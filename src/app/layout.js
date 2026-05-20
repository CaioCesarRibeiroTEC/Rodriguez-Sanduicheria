import './globals.css'
import StyledComponentsRegistry from '../lib/registry'
import { UserStore } from '../context/userContext'
import { AppShell } from '../components/AppShell' 

// ESSAS DUAS LINHAS ESTAVAM FALTANDO:
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        

        <ToastContainer 
            position="bottom-right" 
            autoClose={3000} 
            theme="colored" 
        />
      </body>
    </html>
  )
}