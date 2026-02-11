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
    // Use <a> for hash links (smooth scrolling) to matched Header behavior
    // Use <Link> for page routes (SPA navigation)
    const isAnchor = href.startsWith('#');
    
    if (isAnchor) {
         return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
         );
    }

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
