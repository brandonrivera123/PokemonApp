import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import styles from "./styles/ripple.module.css";

/**
 * Adds Ripples to component
 * @param {number} rippleCount // Number of ripples
 * @param {number} duration // Duration of ripple effect
 * @param {function} cleanUpFunction // Function to clean up ripple effects
 */
const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
  useLayoutEffect(() => {
    let bounce = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

/**
 *
 * @param {*} param0
 * @returns
 */
export const Ripple = ({ duration = 850, color = "#fff", ...props }) => {
  const [rippleArray, setRippleArray] = useState([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event) => {
    // const testdocument = document.body.getBoundingClientRect();
    // console.log(event.pageX);
    // console.log(event.pageY);
    // console.log(window.scrollY);
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    // console.log(rippleContainer);
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const diameter = size / 2;
    const x = event.pageX - rippleContainer.x - diameter;
    const y = event.pageY - rippleContainer.y - window.scrollY - diameter;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <div
      className={styles.container}
      duration={duration}
      color={color}
      onMouseDown={addRipple}
      {...props}
    >
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={"span" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </div>
  );
};

Ripple.propTypes = {
  duration: PropTypes.number,
  color: PropTypes.string,
};
