// app/layout.tsx
import '../../../styles/globals.css';
import Providers from '../../providers';

export const metadata = {
  title: "Plataforma de Inglés",
  description: "Aprende inglés paso a paso",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
