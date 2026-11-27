import React from 'react';
import {
  Building2,
  Camera,
  ClipboardCheck,
  Compass,
  Flower2,
  Music,
  Palette,
  Sparkles,
  Users,
  UtensilsCrossed,
} from 'lucide-react';
import { ServiceItem } from '../data/eventsData';

const ICON_MAP = {
  Compass,
  Building2,
  Flower2,
  Palette,
  Camera,
  UtensilsCrossed,
  Music,
  Sparkles,
  Users,
  ClipboardCheck,
};

export function ServiceIcon({
  name,
  className = 'w-6 h-6',
}: {
  name: ServiceItem['icon'];
  className?: string;
}) {
  const IconComponent = ICON_MAP[name];
  return <IconComponent className={className} strokeWidth={1.45} />;
}
