"use client";

import { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { submitContactForm } from '@/lib/api';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.overlay}></div>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Get In Touch</h2>
          <p className={styles.subheading}>Have questions? We are here to help you.</p>
          
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="4" 
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textarea}
              ></textarea>
            </div>
            
            <Button 
              type="submit" 
              variant="primary" 
              className={styles.submitBtn}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>
            
            {status === 'success' && <p className={styles.success}>Message sent successfully!</p>}
            {status === 'error' && <p className={styles.error}>Something went wrong. Please try again.</p>}
          </form>
        </div>
      </Container>
    </section>
  );
}
