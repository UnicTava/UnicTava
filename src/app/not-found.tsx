import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      flexDirection: 'column',
      gap: '20px',
      color: '#F6F6F6',
      backgroundColor: '#0A0A0A'
    }}>
      <h1 style={{ fontSize: '3rem' }}>404</h1>
      <p style={{ fontSize: '1.2rem' }}>Página não encontrada</p>
      <Link href="/" style={{ color: '#605CCF', textDecoration: 'none', fontSize: '1rem' }}>
        Voltar ao início
      </Link>
    </div>
  )
}