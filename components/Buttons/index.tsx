import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const ButtonDefault = styled(Button)(({ theme }) => ({
  fontSize: 14,
  padding: "15px 40px",
  border: "1px solid",
  lineHeight: 1.15,
  backgroundColor: "#E68512",
  borderColor: "#E68512",
  borderRadius: 10,
  textTransform: "none",
  color: "#ffffff",
  boxShadow: "4px 4px 8px 0px rgba(207, 137, 93, 0.1);",
  fontFamily: ["Poppins", "sans-serif"].join(","),
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#D47709",
    borderColor: "#D47709",
    boxShadow: "4px 4px 8px 0px rgba(207, 137, 93, 0.3);",
  },
  "&:active": {
    backgroundColor: "#D47709",
    borderColor: "#D47709",
    boxShadow: "4px 4px 8px 0px rgba(207, 137, 93, 0.3);",
  },
  "&:focus": {},
}));

export const ButtonBlack = styled(Button)(({ theme }) => ({
  fontSize: 15,
  padding: "15px 40px",
  border: "1px solid",
  lineHeight: 1.15,
  backgroundColor: "#292929",
  borderColor: "#292929",
  borderRadius: 10,
  textTransform: "none",
  color: "#ffffff",
  boxShadow: "4px 4px 8px 0px rgba(207, 137, 93, 0.1);",
  fontFamily: ["Poppins", "sans-serif"].join(","),
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#202020",
    borderColor: "#202020",
    boxShadow: "4px 4px 8px 0px rgba(207, 137, 93, 0.3);",
  },
  "&:active": {
    backgroundColor: "#202020",
    borderColor: "#202020",
    boxShadow: "4px 4px 8px 0px rgba(207, 137, 93, 0.3);",
  },
  "&:focus": {},
}));

export const ButtonTransparent = styled(Button)(({ theme }) => ({
  fontSize: 15,
  padding: "14px 12px",
  border: "1px solid",
  lineHeight: 1.15,
  backgroundColor: "transparent",
  borderColor: "transparent",
  borderRadius: 3,
  textTransform: "none",
  color: "#E68512",
  boxShadow: "none",
  fontFamily: ["Poppins", "sans-serif"].join(","),
  fontWeight: 500,
  "&:hover": {
    color: "#A7A6A6",
    backgroundColor: "transparent",
  },
}));

export const ButtonBlackTransparent = styled(Button)(({ theme }) => ({
  fontSize: 15,
  padding: "8px 12px",
  border: "1px solid",
  lineHeight: 1.15,
  backgroundColor: "transparent",
  borderColor: "transparent",
  borderRadius: 3,
  textTransform: "none",
  color: "#292929",
  boxShadow: "none",
  fontFamily: ["Poppins", "sans-serif"].join(","),
  fontWeight: 500,
  "&:hover": {
    color: "#292929",
    backgroundColor: "transparent",
  },
}));

export const ButtonClose = styled(Button)(({ theme }) => ({
  fontSize: 15,
  padding: "15px 43px",
  border: "1px solid",
  lineHeight: 1.15,
  backgroundColor: "#E6E6E6",
  borderColor: "#E6E6E6",
  color: "#292929",
  borderRadius: 10,
  textTransform: "none",
  boxShadow: "none",
  fontFamily: ["Poppins", "sans-serif"].join(","),
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#E1E1E1",
    borderColor: "#E1E1E1",
    boxShadow: "none",
    color: "#494949",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#FFF",
    borderColor: "#FFF",
  },
  "&:focus": {},
}));
export const ButtonEdit = styled(Button)(({ theme }) => ({
  fontSize: 15,
  padding: "4px 5px 5px 4px",
  width: 45,
  height: 45,
  minWidth: 45,
  border: "1px solid #E6E6E6",
  lineHeight: 1.15,
  backgroundColor: "#fff",
  borderColor: "#E6E6E6",
  borderRadius: "50%",
  textTransform: "none",
  boxShadow: "none",
  fontFamily: ["Poppins", "sans-serif"].join(","),
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#fff",
    borderColor: "#CF895D",
    boxShadow: "none",
  },
  "&:active": {
    backgroundColor: "#fff",
    borderColor: "#CF895D",
    boxShadow: "none",
  },
  "&:focus": {},
}));
export const CssTextField = styled(TextField)({
  "& label": {
    color: "#A7A6A6",
    fontFamily: "Poppins",
  },
  "& label.Mui-hover": {
    color: "#E68512",
  },
  "& label.Mui-focused": {
    color: "#E68512",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#E68512",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      transition: ".15s linear",
      borderColor: "#E6E6E6",
    },
    "&:hover fieldset": {
      borderColor: "#E68512",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#E68512",
    },
  },
  "& .Mui-disabled": {
    transition: ".15s linear",
    borderColor: "#E6E6E6",
  },
});
export const ButtonDelete = styled(Button)(({ theme }) => ({
  fontSize: 14,
  padding: "12px 14px",
  border: "0px",
  minHeight: "45px",
  lineHeight: 1.15,
  backgroundColor: "#FA7F73",
  borderColor: "#FA7F73",
  borderRadius: 3,
  textTransform: "none",
  boxShadow: "4px 4px 8px 0px rgba(207, 137, 93, 0.1);",
  color: "#FFF",
  fontFamily: ["Poppins", "sans-serif"].join(","),
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#F86B5E",
    borderColor: "#F86B5E",
    boxShadow: "4px 4px 8px 0px rgba(207, 137, 93, 0.3);",
  },
  "&:active": {
    backgroundColor: "#F86B5E",
    borderColor: "#F86B5E",
    boxShadow: "4px 4px 8px 0px rgba(207, 137, 93, 0.3);",
  },
  "&:focus": {},
}));
export const ButtonChat = styled(Button)(({ theme }) => ({
  fontSize: 14,
  width: "45px",
  height: "45px",
  minWidth: "45px",
  border: "0px",
  lineHeight: 1.15,
  backgroundColor: "#E68512",
  borderColor: "#E68512",
  borderRadius: 3,
  textTransform: "none",
  boxShadow: "4px 4px 8px 0px rgba(207, 137, 93, 0.1);",
  fontFamily: ["Poppins", "sans-serif"].join(","),
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#CF895D",
    borderColor: "#E3B687",
    boxShadow: "4px 4px 8px 0px rgba(207, 137, 93, 0.3);",
  },
  "&:active": {
    backgroundColor: "#CF895D",
    borderColor: "#CF895D",
    boxShadow: "4px 4px 8px 0px rgba(207, 137, 93, 0.3);",
  },
  "&:focus": {},
}));
export const ButtonFrozzen = styled(Button)(({ theme }) => ({
  fontSize: 14,
  padding: "12px 14px",
  border: "0px",
  lineHeight: 1.15,
  minHeight: "45px",
  backgroundColor: "#47E790",
  borderColor: "#47E790",
  borderRadius: 10,
  textTransform: "none",
  boxShadow: "4px 4px 8px 0px rgba(207, 137, 93, 0.1);",
  color: "#FFF",
  fontFamily: ["Poppins", "sans-serif"].join(","),
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#2ED97C",
    borderColor: "#2ED97C",
    boxShadow: "4px 4px 8px 0px rgba(207, 137, 93, 0.3);",
  },
  "&:active": {
    backgroundColor: "#2ED97C",
    borderColor: "#2ED97C",
    boxShadow: "4px 4px 8px 0px rgba(207, 137, 93, 0.3);",
  },
  "&:focus": {},
}));
export const ButtonBlocked = styled(Button)(({ theme }) => ({
  fontSize: 14,
  padding: "12px 14px",
  border: "0px",
  lineHeight: 1.15,
  minHeight: "45px",
  backgroundColor: "#FFB946",
  borderColor: "#FFB946",
  borderRadius: 3,
  textTransform: "none",
  boxShadow: "4px 4px 8px 0px rgba(207, 137, 93, 0.1);",
  color: "#FFF",
  fontFamily: ["Poppins", "sans-serif"].join(","),
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#F6AA2B",
    borderColor: "#F6AA2B",
    boxShadow: "4px 4px 8px 0px rgba(207, 137, 93, 0.3);",
  },
  "&:active": {
    backgroundColor: "#F6AA2B",
    borderColor: "#F6AA2B",
    boxShadow: "4px 4px 8px 0px rgba(207, 137, 93, 0.3);",
  },
  "&:focus": {},
}));