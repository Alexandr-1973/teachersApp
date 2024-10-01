import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import css from "./CustomSelect.module.css";
import {
  changeLanguage,
  changeLevel,
  changePrice,
} from "../../redux/filters/filtersSlice";
import { useDispatch } from "react-redux";

const CustomSelect = ({ options, title, widthElem, selectValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOptionClick = (option) => {
    if (title === "Languages") {
      dispatch(changeLanguage(option));
    }

    if (title === "Level of knowledge") {
      dispatch(changeLevel(option));
    }

    if (title === "Max price") {
      dispatch(changePrice(Number(option)));
    }

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
