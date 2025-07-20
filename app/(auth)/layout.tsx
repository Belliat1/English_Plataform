// app/(auth)/layout.tsx
'use client';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      {children}
    </div>
  );
}
