/* eslint-disable react/jsx-no-target-blank */
import { social_media } from '../../stub/social-media';
import styles from '../../styles/components/shared/Footer.module.css';
import Icon from '../reusable/Icon';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {social_media.map((social_media, index) => (
          <a href={social_media.url} target='_blank' key={index + 1}>
            <Icon imageUrl={social_media.imageUrl} />
          </a>
        ))}
      </div>
      <span className={styles.footerText}>
        Emmanuel Dushime © {new Date().getFullYear()}.
      </span>
    </div>
  );
};

export default Footer;
