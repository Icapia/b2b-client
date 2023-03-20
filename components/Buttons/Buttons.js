import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const ButtonDefault = styled(Button)(({ theme }) => ({
  fontSize: 15,
  padding: '14px 12px',
  border: '1px solid',
  lineHeight: 1.15,
  backgroundColor: '#D89972',
  borderColor: '#D89972',
  borderRadius: 3,
  textTransform: "none",
  color: "#FFF",
  boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.1);',
  fontFamily: [
    'Poppins',
    'sans-serif'
  ].join(','),
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#CF895D',
    borderColor: '#E3B687',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:active': {
    backgroundColor: '#CF895D',
    borderColor: '#CF895D',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:focus': {
  },
}));
export const ButtonTransparent = styled(Button)(({ theme }) => ({
  fontSize: 15,
  padding: '14px 12px',
  border: '1px solid',
  lineHeight: 1.15,
  backgroundColor: 'transparent',
  borderColor: 'transparent',
  borderRadius: 3,
  textTransform: "none",
  color: "#D89972",
  boxShadow: 'none',
  fontFamily: [
    'Poppins',
    'sans-serif'
  ].join(','),
  fontWeight: 500,
  '&:hover': {
    color: "#A7A6A6",
    backgroundColor: 'transparent',
  },
}));
export const ButtonClose = styled(Button)(({ theme }) => ({
  fontSize: 15,
  padding: '14px 12px',
  border: '1px solid',
  lineHeight: 1.15,
  backgroundColor: '#FFF',
  borderColor: '#FFF',
  color: '#A7A6A6',
  borderRadius: 3,
  textTransform: "none",
  boxShadow: 'none',
  fontFamily: [
    'Poppins',
    'sans-serif'
  ].join(','),
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    boxShadow: 'none',
    color: '#E3B687'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#FFF',
    borderColor: '#FFF',
  },
  '&:focus': {
  },
}));
export const ButtonEdit = styled(Button)(({ theme }) => ({
  fontSize: 15,
  padding: '4px 5px 5px 4px',
  width: 45,
  height: 45,
  minWidth: 45,
  border: '1px solid #E6E6E6',
  lineHeight: 1.15,
  backgroundColor: '#fff',
  borderColor: '#E6E6E6',
  borderRadius: "50%",
  textTransform: "none",
  boxShadow: 'none',
  fontFamily: [
    'Poppins',
    'sans-serif'
  ].join(','),
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#fff',
    borderColor: '#CF895D',
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: '#fff',
    borderColor: '#CF895D',
    boxShadow: 'none',
  },
  '&:focus': {
  },
}));
export const CssTextField = styled(TextField)({
  '& label': {
    color: '#A7A6A6',
    fontFamily: 'Poppins'
  },
  '& label.Mui-hover': {
    color: '#D89972',
  },
  '& label.Mui-focused': {
    color: '#D89972',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#D89972',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      transition: '.15s linear',
      borderColor: '#E6E6E6',
    },
    '&:hover fieldset': {
      borderColor: '#D89972',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#D89972',
    },
  },
  '& .Mui-disabled': {
    transition: '.15s linear',
    borderColor: '#E6E6E6',
  },
});
export const ButtonDelete = styled(Button)(({ theme }) => ({
  fontSize: 14,
  padding: "12px 14px",
  border: '0px',
  minHeight: "45px",
  lineHeight: 1.15,
  backgroundColor: '#FA7F73',
  borderColor: '#FA7F73',
  borderRadius: 3,
  textTransform: "none",
  boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.1);',
  color: "#FFF",
  fontFamily: [
    'Poppins',
    'sans-serif'
  ].join(','),
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#F86B5E',
    borderColor: '#F86B5E',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:active': {
    backgroundColor: '#F86B5E',
    borderColor: '#F86B5E',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:focus': {
  },
}));
export const ButtonChat = styled(Button)(({ theme }) => ({
  fontSize: 14,
  width: "45px",
  height: "45px",
  minWidth: "45px",
  border: '0px',
  lineHeight: 1.15,
  backgroundColor: '#D89972',
  borderColor: '#D89972',
  borderRadius: 3,
  textTransform: "none",
  boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.1);',
  fontFamily: [
    'Poppins',
    'sans-serif'
  ].join(','),
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#CF895D',
    borderColor: '#E3B687',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:active': {
    backgroundColor: '#CF895D',
    borderColor: '#CF895D',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:focus': {
  },
}));
export const ButtonFrozzen = styled(Button)(({ theme }) => ({
  fontSize: 14,
  padding: "12px 14px",
  border: '0px',
  lineHeight: 1.15,
  minHeight: "45px",
  backgroundColor: '#47E790',
  borderColor: '#47E790',
  borderRadius: 3,
  textTransform: "none",
  boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.1);',
  color: "#FFF",
  fontFamily: [
    'Poppins',
    'sans-serif'
  ].join(','),
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#2ED97C',
    borderColor: '#2ED97C',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:active': {
    backgroundColor: '#2ED97C',
    borderColor: '#2ED97C',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:focus': {
  },
}));
export const ButtonBlocked = styled(Button)(({ theme }) => ({
  fontSize: 14,
  padding: "12px 14px",
  border: '0px',
  lineHeight: 1.15,
  minHeight: "45px",
  backgroundColor: '#FFB946',
  borderColor: '#FFB946',
  borderRadius: 3,
  textTransform: "none",
  boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.1);',
  color: "#FFF",
  fontFamily: [
    'Poppins',
    'sans-serif'
  ].join(','),
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#F6AA2B',
    borderColor: '#F6AA2B',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:active': {
    backgroundColor: '#F6AA2B',
    borderColor: '#F6AA2B',
    boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
  },
  '&:focus': {
  },
}));