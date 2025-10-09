import { HomeModernIcon } from '@heroicons/react/24/solid';

export default function OspitlyLogo({ size = 'normal' }) {
  const sizes = {
    small: 'h-6 text-base',
    normal: 'h-8 text-xl',
    large: 'h-10 text-2xl'
  };

  const iconSize = sizes[size] || sizes.normal;
  const textSize = size === 'small' ? 'text-base' : size === 'large' ? 'text-2xl' : 'text-xl';

  return (
    <div className="flex items-center gap-2">
      <div className="bg-gradient-to-br from-primary to-orange-400 p-1.5 rounded-lg shadow-md">
        <HomeModernIcon className={`${iconSize.split(' ')[0]} text-white`} />
      </div>
      <span className={`${textSize} font-bold text-gray-900 dark:text-white transition-colors`}>
        Ospitly
      </span>
    </div>
  );
}