import { useEffect } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { searchMovies, getMovies } from "../../store/moviesSlice";
import { searchTvShows, getTvShows } from "../../store/tvShowsSlice";

const validationSchema = yup.object({
  search: yup.string().matches(/^[aA-zZ\s]+$/, "Only letters are allowed for this field "),
});

function SearchBar() {
  const dispatch = useDispatch();

  // global state
  const currentLocation = useSelector(({ movies }) => movies.currentLocation);

  //formik setup
  const formik = useFormik({
    initialValues: { search: "" },
    validationSchema: validationSchema,
    validateOnChange: true,
    onSubmit: (values) => {
      if (currentLocation === "movies") {
        dispatch(searchMovies(`/api/movies/${values.search}`, "POST", {}));
      } else if (currentLocation === "tvShows") {
        dispatch(searchTvShows(`/api/tvShows/${values.search}`, "POST", {}));
      }
    },
  });

  useEffect(() => {
    if (formik.values.search.length > 2) {
      if (currentLocation === "movies") {
        dispatch(searchMovies(`/api/movies/${formik.values.search}`, "POST", {}));
      } else if (currentLocation === "tvShows") {
        dispatch(searchTvShows(`/api/tvShows/${formik.values.search}`, "POST", {}));
      }
    }
  }, [formik.values.search]);

  return (
    <div className="Search-wrapp">
      <form onSubmit={formik.handleSubmit} className="search">
        <TextField
          label="Search"
          name="search"
          id="search"
          type="text"
          value={formik.values.search}
          onChange={formik.handleChange}
          error={formik.touched.search && Boolean(formik.errors.search)}
          helperText={formik.touched.search && formik.errors.search}
          variant="outlined"
          onKeyUp={(e) => {
            if ((e.key === "Backspace" && formik.values.search.length === 0) || (e.key === "Delete" && formik.values.search.length === 0)) {
              if (currentLocation === "movies") {
                dispatch(getMovies(`/api/movies/10`, "GET", {}));
              } else if (currentLocation === "tvShows") {
                dispatch(getTvShows(`/api/tvShows/10`, "GET", {}));
              }
            }
          }}
          required
          fullWidth
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit">
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </div>
  );
}

export default SearchBar;
