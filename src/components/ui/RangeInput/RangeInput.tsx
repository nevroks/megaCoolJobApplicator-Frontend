import { useState } from "react";
import styles from "./style.module.css";

const RangeInput = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(50);

  const handleReset = () => {
    setMinValue(0);
    setMaxValue(50);
  };
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 7);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 7);
    setMaxValue(value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.rangeGroupe}>
        <div className={styles.rangeInputGroupe}>
          <div className={styles.InputsDefaultMinGroup}>
            <div className={styles.Min}>Min</div>
            <div className={styles.GroupMin}>
              <div className={styles.RectangleMin} />
              <div className={styles.MinSum}>{minValue*1000}</div>
            </div>
          </div>
          <div className={styles.InputsDefaultMaxGroup}>
            <div className={styles.Max}>Max</div>
            <div className={styles.GroupMax}>
              <div className={styles.RectangleMax} />
              <div className={styles.MaxSum}>{maxValue*1500}</div>
            </div>
          </div>
          <div className={styles.Dash}>-</div>
        </div>
        <div className={styles.ButtonsColoredContainer}>
          <button className={styles.Apply}>Apply</button>
        </div>
        <div className={styles.ButtonsDefaultContainer}>
          <button onClick={handleReset} className={styles.Reset}>
            Reset
          </button>
        </div>
        <div className={styles.ScaleLineContainer}>
          <div
            className={styles.FilledTrack}
            style={{
              left: `${minValue}%`,
              width: `${maxValue - minValue}%`,
            }}
          />
          <input
            className={styles.ScaleLine}
            type="range"
            min={0}
            max={100}
            value={minValue}
            onChange={handleMinChange}
          />
          <input
            className={styles.ScaleLine}
            type="range"
            min={0}
            max={100}
            value={maxValue}
            onChange={handleMaxChange}
          />
        </div>
        <div className={styles.SalaryRange}>Salary Range</div>
      </div>
    </div>
  );
};

export default RangeInput;

{
  /* <div className={styles.ScaleLine} />
          <div className={styles.ValueLine} />
          <div className={styles.CircleMin} />
          <div className={styles.CircleMax} /> */
}
