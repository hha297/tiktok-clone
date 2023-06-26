import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Wrapper as PopperWrapper } from 'components/Popper';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy interactive delay={[800, 800]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://www.investopedia.com/thmb/_PhHOxRxJe6EtHVY2UUIn7Bm87I=/5372x3581/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1245748917-99e3329a7b8147e8ab648806220ce153.jpg"
                    alt=""
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>hha.2907</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                    </p>
                    <p className={cx('name')}>Đặng Hoàng Hà</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
