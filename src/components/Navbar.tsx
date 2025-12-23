import { useState, useRef, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { Notifications } from './Notifications';
import type { User, Notification } from '@/types';
import userAvatar from '@/assets/sarah-avatar.png';

interface NavbarProps {
  user: User;
  notifications: Notification[];
}

const navItems = [
  { label: 'Home', href: '/', active: true },
  { label: 'Opportunities', href: '#', active: false },
  { label: 'Assigning & Tracking', href: 'assign', active: false },
  { label: 'My Applications', href: '#', active: false },
];

export function Navbar({ user, notifications }: NavbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-[64px] bg-card border-b border-border-light flex items-center justify-between px-8 relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-[24px] font-bold text-text-primary tracking-tight">
          UST <span className="font-light">IJP</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={item.active ? 'nav-link-active' : 'nav-link'}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 hover:bg-muted rounded-full transition-colors"
          >
            <Bell className="w-5 h-5 text-text-primary" strokeWidth={1.5} />
            {notifications.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-danger text-card text-[10px] font-medium flex items-center justify-center rounded-full">
                {notifications.length}
              </span>
            )}
          </button>

          {showNotifications && (
            <Notifications
              notifications={notifications}
              onClose={() => setShowNotifications(false)}
            />
          )}
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-sm font-medium text-text-primary leading-tight">{user.name}</div>
            <div className="text-xs text-text-muted leading-tight">{user.role}</div>
          </div>
          <img
            src={userAvatar}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
