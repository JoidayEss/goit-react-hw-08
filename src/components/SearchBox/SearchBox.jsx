import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    const filterValue = e.target.value;
    console.log("Filter value:", filterValue);

    dispatch(changeFilter(filterValue));
  };
  return (
    <>
      <div className={s.search}>
        <p className={s.search_p}>Find contacts by name</p>
        <input
          className={s.input}
          type="text"
          onChange={handleChange}
          value={filter}
        />
      </div>
    </>
  );
};

export default SearchBox;
