import PropTypes from 'prop-types';
import styles from './acceptModel.module.scss';
import Model from '../model/Model';
import accept from '../../assets/image/accept.png';

const AcceptModel = (props) => {
  return (
    <Model {...props} width="86%">
      <div className={styles.acceptModel}>
        <div className={styles.title}>
          <p>欧耶！</p>
          <p>我就知道你会同意的~</p>
        </div>
        <div className={styles.content}>
          <p className={styles.toRight}>⭐ momo & yaya</p>
          <p className={styles.toRight}>⭐ 2025.12.12</p>
          <p>BIBOBIBO~</p>
          <p>请多指教</p>
          <p>嗯~就这样，渐渐地越来越喜欢彼此❤️</p>
          <img src={accept} alt="" />
        </div>
      </div>
    </Model>
  );
};

AcceptModel.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

AcceptModel.defaultProps = {
  visible: false,
  onClose: () => {},
};

export default AcceptModel;
