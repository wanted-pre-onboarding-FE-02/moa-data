import ReactDatePicker from 'react-datepicker';
import styles from './datePicker.module.scss';

interface IDateProps {
  startDate: null | Date;
  endDate: null | Date;
  handleDateChange(dates: [Date | null, Date | null]): void;
}

const DatePicker = ({ startDate, endDate, handleDateChange }: IDateProps) => {
  return (
    <div className={styles.aaa}>
      <ReactDatePicker
        onChange={handleDateChange}
        disabledKeyboardNavigation
        selectsRange
        inline
        minDate={new Date('2022-01-01')}
        maxDate={new Date('2022-05-06')}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
};

export default DatePicker;
