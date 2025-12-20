import { X } from 'lucide-react';
import type { Notification } from '@/types';
import userAvatar from '@/assets/sarah-avatar.png';

interface NotificationsProps {
  notifications: Notification[];
  onClose: () => void;
}

export function Notifications({ notifications, onClose }: NotificationsProps) {
  return (
    <div className="absolute top-full right-0 mt-2 w-[400px] bg-primary rounded-lg shadow-dropdown animate-slide-down overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-primary-foreground/20">
        <h3 className="text-card text-base font-medium">
          Notifications ({notifications.length})
        </h3>
        <button
          onClick={onClose}
          className="p-1 hover:bg-primary-foreground/10 rounded transition-colors"
        >
          <X className="w-4 h-4 text-card" />
        </button>
      </div>

      {/* Notification Items */}
      <div className="max-h-[320px] overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start gap-3 px-4 py-3 border-b border-primary-foreground/10 last:border-b-0 hover:bg-primary-foreground/5 transition-colors"
          >
            <img
              src={userAvatar}
              alt={notification.user.name}
              className="w-8 h-8 rounded-full flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-card text-sm leading-relaxed">
                <span className="font-medium">{notification.user.name}</span>{' '}
                {notification.message}{' '}
                <span className="font-medium text-secondary">{notification.soId}</span>
              </p>
            </div>
            <span className="text-card/70 text-xs whitespace-nowrap flex-shrink-0">
              {notification.timestamp}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
