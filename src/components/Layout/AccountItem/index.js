import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://idsb.tmgrup.com.tr/ly/uploads/images/2022/12/19/247181.jpg"
                alt="avatar"
            ></img>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    Dang Hoang Ha
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>hha.2907</span>
            </div>
        </div>
    );
}

export default AccountItem;
