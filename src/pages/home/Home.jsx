import { useEffect, useState, useRef, Fragment } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './home.module.scss';
import yayaAvatar from '../../assets/image/yayaAvatar.jpg';
import momoAvatar from '../../assets/image/momoAvatar.jpg';

// Our official day - 我们在一起的时间
const ANNIVERSARY = new Date(2025, 11, 12, 22, 2, 0); // 2025-12-12 22:02:00

const Home = () => {
  const timer = useRef(null);
  const [duration, setDuration] = useState('......');
  const [showAnniversary, setShowAnniversary] = useState(false);

  useEffect(() => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    timer.current = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - ANNIVERSARY.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setDuration(`${days} 天 ${hours} 时 ${minutes} 分 ${seconds} 秒`);
    }, 1000);

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
    };
  });

  return (
    <div className={styles.home}>
      <p className={styles.question}>“表白可以醒酒吗？”</p>
      {/* 顶部的主体表达 */}
      <div className={styles.linkus}>
        <div className={styles.parter}>
          <img className={styles.avatar} src={yayaAvatar} alt="" />
          <div className={styles.name}>江江</div>
        </div>
        <div className={styles.like}>❤️</div>
        <div className={styles.parter}>
          <img className={styles.avatar} src={momoAvatar} alt="" />
          <div className={styles.name}>萌萌</div>
        </div>
      </div>

      {/* 恋爱时长 */}
      <div className={styles.anniversary} onClick={() => setShowAnniversary(prev => !prev)}>
        {showAnniversary ? (
          <motion.div
            key="anniversary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <span className={styles.highlight}>2025/12/12 22:02</span>
            <span>我们在一起啦</span>
          </motion.div>
        ) : (
          <motion.div
            key="duration"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <span>这是我们走过的</span>
            <span className={styles.highlight}>{duration}</span>
          </motion.div>
        )}
      </div>

      {/* 其他部分 */}
      <div className={styles.others}>
        <Link className={styles.link} to="/confess">👉 恋爱申请书</Link>
      </div>

      <p className={styles.answer}>“表白不可以，但你可以！”</p>
    </div>
  );
};

export default Home;
