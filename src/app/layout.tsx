// app/layout.jsx
import { UserProvider } from '@auth0/nextjs-auth0/client';

type props = {
    children: any;
}

const RootLayout: React.FC<props> = ({ children }) => {
  return (
    <html lang="en">
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}

export default RootLayout;