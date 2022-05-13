import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';

const cx = classNames.bind(styles);

function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p9-sign-sg.tiktokcdn.com/tiktok-obj/1664046035987457~c5_300x300.webp?x-expires=1652284800&x-signature=iDk2UFkmRCxo1Mg4b59AJ8cH7Uo%3D" alt="Hoang" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Pham Thi Mai Hien</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usname')}>LeCongHoang</span>
            </div>
        </div>
);

}
export default AcountItem;
