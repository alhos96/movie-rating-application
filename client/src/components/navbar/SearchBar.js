import { TextField, InputAdornment, IconButton } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  search: yup.string().matches(/^[aA-zZ\s]+$/, "Only letters are allowed for this field "),
});

function SearchBar({ setSearch }) {
  //formik setup
  const formik = useFormik({
    initialValues: { search: "" },
    validationSchema: validationSchema,
    validateOnChange: true,
    onSubmit: (values) => {
      setSearch(values.search);
    },
  });

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
