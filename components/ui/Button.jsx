import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: styles.primary,
    secondary: styles.secondary,
    outline: styles.outline,
    outlineWhite: styles.outlineWhite,
  };
  const variantClass = variants[variant] || variants.primary;
  const classes = `${styles.button} ${variantClass} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={classes} 
      {...props}
    >
      {children}
    </button>
  );
}
