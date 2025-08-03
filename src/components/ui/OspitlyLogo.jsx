export default function OspitlyLogo({ cssClass }) {
  return (
    <img 
      src="/ospitly-logo.png" 
      alt="Ospitly Logo" 
      className={`${cssClass} dark:brightness-0 dark:invert transition-all duration-300`}
    />
  );
}