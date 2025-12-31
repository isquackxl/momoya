import PropTypes from 'prop-types';
import styles from './rejectModel.module.scss';
import Model from '../model/Model';

const RejectModel = (props) => {
  const {
    visible,
    onClose,
    src,
    info,
  } = props;

  return (
    <Model visible={visible} onClose={onClose}>
      <div className={styles.rejectModel}>
        <img src={src} alt="暂无图片" />
        <div className={styles.info}>{info}</div>
      </div>
    </Model>
  );
};

RejectModel.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  src: PropTypes.string,
  info: PropTypes.string,
};

RejectModel.defaultProps = {
  visible: false,
  onClose: () => {},
  src: '',
  info: '',
};

export default RejectModel;
