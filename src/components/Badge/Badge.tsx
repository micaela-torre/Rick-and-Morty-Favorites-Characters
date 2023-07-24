import React from 'react';
import styles from './badge.module.css';
import { BadgeProps } from './interface_badge';

const Badge = ({ children, color = '#b5b5b5' }: BadgeProps) => {
  return (
    <div className={styles.badge_container} style={{ background: color }}>
      {children}
    </div>
  );
};

export default Badge;
