import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from 'components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://www.investopedia.com/thmb/_PhHOxRxJe6EtHVY2UUIn7Bm87I=/5372x3581/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1245748917-99e3329a7b8147e8ab648806220ce153.jpg"
                    alt=""
                />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>hha.2907</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <p className={cx('name')}>Đặng Hoàng Hà</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>29.07M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>20.02M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
