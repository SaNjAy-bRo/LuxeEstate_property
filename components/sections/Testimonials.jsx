import Container from '../ui/Container';
import styles from './Testimonials.module.css';

export default function Testimonials({ testimonials = [] }) {
  if (!testimonials.length) return null;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.heading}>What Our Clients Say</h2>
        </div>
        
        <div className={styles.grid}>
          {testimonials.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.content}>"{item.content}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{item.name[0]}</div>
                <div>
                  <h4 className={styles.name}>{item.name}</h4>
                  <p className={styles.role}>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
