import { Stethoscope } from 'lucide-react';

export default function DoctorAvatar({ name, size = 'large' }) {
  const initials = name
    .split(' ')
    .filter(w => !w.endsWith('.') && w[0] === w[0].toUpperCase())
    .map(w => w[0])
    .join('')
    .slice(0, 2);

  const sizeClasses = size === 'large'
    ? 'w-64 h-72 text-5xl rounded-2xl'
    : 'w-20 h-20 text-xl rounded-full';

  return (
    <div className={`${sizeClasses} bg-gradient-to-br from-primary-400 to-primary-700 flex flex-col items-center justify-center text-white font-heading font-bold shadow-2xl relative overflow-hidden`}>
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/10" />
      <span className="relative z-10">{initials}</span>
      <Stethoscope className="relative z-10 mt-2 opacity-60" size={size === 'large' ? 28 : 16} />
    </div>
  );
}
