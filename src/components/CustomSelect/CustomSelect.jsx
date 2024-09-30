import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import css from "./CustomSelect.module.css";

const CustomSelect = ({ options, title, widthElem, selectValue, toggleOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("any");

  const handleOptionClick = (option) => {

toggleOptions(option);
    // setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={css.customSelect} style={{ width: widthElem }}>
      <p className={css.title}>{title}</p>
      <div className={css.selectLabel} onClick={() => setIsOpen(!isOpen)}>
        {selectValue} {title === "Price" && selectValue !== "any" && "$"}
        <MdOutlineKeyboardArrowDown className={css.arrow} />
      </div>
      {isOpen && (
        <ul className={css.options}>
          {options.map((option, index) => (
            <li
              key={index}
              className={
                option === selectValue ? css.selectedOption : css.option
              }
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
