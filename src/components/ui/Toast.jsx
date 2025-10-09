import { useState, useEffect } from 'react';
import { CheckCircleIcon, ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Toast({ 
  message, 
  type = 'success', // success, error, info
  isVisible, 
  onClose, 
  duration = 5000,
  position = 'top-right' // top-right, top-left, bottom-right, bottom-left
}) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose?.();
    }, 300); // Wait for animation to complete
  };

  if (!isVisible) return null;

  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-4 left-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      default:
        return 'top-4 right-4';
    }
  };

  const getTypeStyles = () => {
    switch (type) {
      case 'error':
        return {
          bg: 'bg-red-500',
          icon: ExclamationCircleIcon,
          iconColor: 'text-white'
        };
      case 'info':
        return {
          bg: 'bg-blue-500',
          icon: CheckCircleIcon,
          iconColor: 'text-white'
        };
      default:
        return {
          bg: 'bg-green-500',
          icon: CheckCircleIcon,
          iconColor: 'text-white'
        };
    }
  };

  const styles = getTypeStyles();
  const IconComponent = styles.icon;

  return (
    <div 
      className={`fixed ${getPositionClasses()} z-50 transition-all duration-300 transform ${
        isAnimating 
          ? 'translate-x-0 opacity-100 scale-100' 
          : 'translate-x-full opacity-0 scale-95'
      }`}
    >
      <div className={`${styles.bg} text-white px-6 py-4 rounded-lg shadow-xl border border-white/20 backdrop-blur-sm max-w-sm min-w-80`}>
        <div className="flex items-start gap-3">
          <IconComponent className={`h-6 w-6 ${styles.iconColor} flex-shrink-0 mt-0.5`} />
          
          <div className="flex-1">
            <p className="font-semibold text-sm leading-relaxed">
              {message}
            </p>
          </div>
          
          <button
            onClick={handleClose}
            className="text-white/80 hover:text-white transition-colors flex-shrink-0 ml-2"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white/40 rounded-full transition-all ease-linear"
            style={{
              animation: `toast-shrink ${duration}ms linear`
            }}
          />
        </div>
      </div>
    </div>
  );
}

// Hook per gestire i toast facilmente
export function useToast() {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success', duration = 5000) => {
    const id = Date.now() + Math.random();
    const newToast = { id, message, type, duration, isVisible: true };
    
    setToasts(prev => [...prev, newToast]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const ToastContainer = () => (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );

  return { showToast, ToastContainer };
}