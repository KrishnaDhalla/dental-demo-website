import * as Icons from 'lucide-react';

export default function DynamicIcon({ name, size = 24, className = '' }) {
  const Icon = Icons[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
}
