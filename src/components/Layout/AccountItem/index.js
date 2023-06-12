import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'components/Image';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://scontent.fqlf1-2.fna.fbcdn.net/v/t39.30808-6/325784857_690291016086296_6871624399450856440_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tuIX-hp0ejgAX92BilC&_nc_oc=AQmSBXqEPiFcw0xyZJ8jfb1THhnV9DwdoFbv7Bl3n4OIhB3vdbEjD5kNrCNd3q9U8rc&_nc_ht=scontent.fqlf1-2.fna&oh=00_AfC8BrE2REhGgLJskJ_MNsn1Otu5oy895v8TZroBjnMqEQ&oe=648BF5B4"
                alt="avatar"
            ></Image>
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
