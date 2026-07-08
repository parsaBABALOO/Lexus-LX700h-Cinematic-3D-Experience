import './globals.css';

export const metadata = {
  title: 'LEXUS LX700h',
  description: '3D Lexus LX700h Luxury Hybrid Experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}