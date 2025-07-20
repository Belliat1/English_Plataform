'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import LogoutButton from './LogoutButton';

interface UserProfileProps {
  name: string;
  role: string;
  avatar: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, role, avatar }) => {
  const { theme } = useTheme();

  return (
    <div className="w-full p-4 rounded-lg bg-background-3 flex flex-col justify-between h-full">
      {/* Enlace al perfil */}
      <Link
        href="/perfil"
        className="hover:no-underline"
        aria-label="Ir al perfil"
      >
        <div
          className="flex items-center gap-4 hover:bg-background-2 p-2 rounded-md transition-colors"
          role="link"
        >
          <Image
            src={avatar}
            alt={`Avatar de ${name}`}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-foreground">{name}</p>
            <p className="text-xs text-muted">{role}</p>
          </div>
        </div>
      </Link>

      {/* Cerrar sesión al final */}
      <div className="mt-6 border-t border-[var(--color-neutral-200)] pt-4 flex justify-center">
        <LogoutButton />
      </div>
    </div>
  );
};

export default UserProfile;
