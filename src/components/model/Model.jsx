import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './model.module.scss';

const Model = (props) => {
  const {
    visible = false,
    onClose = () => {},
    children = null,
    width = '60%',
  } = props;

  const closeHandler = (e) => {
    e.stopPropagation();
    onClose();
  };

  const model = () => (
    <div className={styles.model} onClick={closeHandler}>
      <div className={styles.container} style={{ width }}>{children}</div>
    </div>
  );

  return visible && createPortal(model(), document.body);
};

Model.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  width: PropTypes.string,
};

export default Model;
