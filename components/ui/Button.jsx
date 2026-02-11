import styles from './Button.module.css';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: styles.primary,
    secondary: styles.secondary,
    outline: styles.outline,
    outlineWhite: styles.outlineWhite,
  };
  const variantClass = variants[variant] || variants.primary;
  
  return (
    <button 
      className={`${styles.button} ${variantClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}
