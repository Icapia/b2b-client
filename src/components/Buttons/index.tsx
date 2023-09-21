import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

export const ButtonDefault = styled(Button)(({ theme }) => ({
	fontSize: 14,
	padding: '14px 12px',
	border: '1px solid',
	lineHeight: 1.15,
	backgroundColor: '#E9794A',
	borderColor: '#E9794A',
	borderRadius: 8,
	textTransform: 'none',
	color: '#ffffff',
	boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.1);',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontWeight: 600,
	'&:hover': {
		backgroundColor: '#E26630',
		borderColor: '#E26630',
		boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
	},
	'&:active': {
		backgroundColor: '#E26630',
		borderColor: '#E26630',
		boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
	},
	'&:focus': {},
}))

export const ButtonBlack = styled(Button)(({ theme }) => ({
	fontSize: 15,
	padding: '14px 12px',
	border: '1px solid',
	lineHeight: 1.15,
	backgroundColor: '#292929',
	borderColor: '#292929',
	borderRadius: 8,
	textTransform: 'none',
	color: '#ffffff',
	boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.1);',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontWeight: 600,
	'&:hover': {
		backgroundColor: '#202020',
		borderColor: '#202020',
		boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
	},
	'&:active': {
		backgroundColor: '#202020',
		borderColor: '#202020',
		boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
	},
	'&:focus': {},
}))

export const ButtonTransparent = styled(Button)(({ theme }) => ({
	fontSize: 15,
	padding: '14px 12px',
	border: '1px solid',
	lineHeight: 1.15,
	backgroundColor: 'transparent',
	borderColor: 'transparent',
	borderRadius: 3,
	textTransform: 'none',
	color: '#E9794A',
	boxShadow: 'none',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontWeight: 600,
	'&:hover': {
		color: '#A7A6A6',
		backgroundColor: 'transparent',
	},
}))

export const ButtonTransparentNoPadding = styled(Button)(({ theme }) => ({
	fontSize: 15,
	padding: '10px 0px',
	border: '1px solid',
	lineHeight: 1.15,
	backgroundColor: 'transparent',
	borderColor: 'transparent',
	borderRadius: 3,
	textTransform: 'none',
	color: '#E9794A',
	boxShadow: 'none',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontWeight: 600,
	'&:hover': {
		color: '#A7A6A6',
		backgroundColor: 'transparent',
	},
}))

export const ButtonRedTransparent = styled(Button)(({ theme }) => ({
	fontSize: 15,
	padding: '14px 12px',
	border: '1px solid',
	lineHeight: 1.15,
	backgroundColor: 'transparent',
	borderColor: 'transparent',
	borderRadius: 3,
	textTransform: 'none',
	color: '#F29B8F',
	boxShadow: 'none',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontWeight: 600,
	'&:hover': {
		color: '#F29B8F',
		backgroundColor: 'transparent',
	},
}))

export const ButtonRemove = styled(Button)(({ theme }) => ({
	fontSize: 15,
	padding: '14px 12px',
	border: '1px solid',
	lineHeight: 1.15,
	backgroundColor: 'transparent',
	borderColor: '#F29B8F',
	borderRadius: 8,
	textTransform: 'none',
	color: '#F29B8F',
	boxShadow: 'none',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontWeight: 600,
	'&:hover': {
		color: '#F29B8F',
		backgroundColor: 'rgba(242, 155, 143, .15)',
	},
}))

export const ButtonRemoveSmall = styled(Button)(({ theme }) => ({
	fontSize: 15,
	padding: '10px 12px',
	marginLeft: '10px',
	border: '1px solid',
	lineHeight: 1.15,
	backgroundColor: 'transparent',
	borderColor: '#F29B8F',
	borderRadius: 8,
	textTransform: 'none',
	color: '#F29B8F',
	boxShadow: 'none',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontWeight: 600,
	'&:hover': {
		color: '#F29B8F',
		backgroundColor: 'rgba(242, 155, 143, .15)',
	},
}))

export const ButtonBlackTransparent = styled(Button)(({ theme }) => ({
	fontSize: 15,
	padding: '14px 12px',
	border: '1px solid',
	lineHeight: 1.15,
	backgroundColor: 'transparent',
	borderColor: 'transparent',
	borderRadius: 3,
	textTransform: 'none',
	color: '#292929',
	boxShadow: 'none',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontWeight: 600,
	'&:hover': {
		color: '#292929',
		backgroundColor: 'transparent',
	},
}))

export const ButtonClose = styled(Button)(({ theme }) => ({
	fontSize: 15,
	padding: '14px 12px',
	border: '1px solid',
	lineHeight: 1.15,
	backgroundColor: '#F6F6F6',
	borderColor: '#F6F6F6',
	color: '#292929',
	borderRadius: 8,
	textTransform: 'none',
	boxShadow: 'none',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontWeight: 600,
	'&:hover': {
		backgroundColor: '#E6E6E6',
		borderColor: '#E6E6E6',
		boxShadow: 'none',
		color: '#494949',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#FFF',
		borderColor: '#FFF',
	},
	'&:focus': {},
}))
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
	borderRadius: '50%',
	textTransform: 'none',
	boxShadow: 'none',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontWeight: 600,
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
	'&:focus': {},
}))
export const CssTextField = styled(TextField)({
	'& label': {
		color: '#A7A6A6',
		fontFamily: 'Poppins',
	},
	'& label.Mui-hover': {
		color: '#E9794A',
	},
	'& label.Mui-focused': {
		color: '#E9794A',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: '#E9794A',
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			transition: '.15s linear',
			borderColor: '#E6E6E6',
		},
		'&:hover fieldset': {
			borderColor: '#E9794A',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#E9794A',
		},
	},
	'& .Mui-disabled': {
		transition: '.15s linear',
		borderColor: '#E6E6E6',
	},
})
export const ButtonDelete = styled(Button)(({ theme }) => ({
	fontSize: 14,
	padding: '12px 14px',
	border: '0px',
	minHeight: '45px',
	lineHeight: 1.15,
	backgroundColor: '#FA7F73',
	borderColor: '#FA7F73',
	borderRadius: 3,
	textTransform: 'none',
	boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.1);',
	color: '#FFF',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontWeight: 600,
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
	'&:focus': {},
}))
export const ButtonChat = styled(Button)(({ theme }) => ({
	fontSize: 14,
	width: '45px',
	height: '45px',
	minWidth: '45px',
	border: '0px',
	lineHeight: 1.15,
	backgroundColor: '#E9794A',
	borderColor: '#E9794A',
	borderRadius: 3,
	textTransform: 'none',
	boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.1);',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontWeight: 600,
	'&:hover': {
		backgroundColor: '#CF895D',
		borderColor: '#E26630',
		boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
	},
	'&:active': {
		backgroundColor: '#CF895D',
		borderColor: '#CF895D',
		boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
	},
	'&:focus': {},
}))
export const ButtonFrozzen = styled(Button)(({ theme }) => ({
	fontSize: 14,
	padding: '12px 14px',
	border: '0px',
	lineHeight: 1.15,
	minHeight: '45px',
	backgroundColor: '#47E790',
	borderColor: '#47E790',
	borderRadius: 8,
	textTransform: 'none',
	boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.1);',
	color: '#FFF',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontWeight: 600,
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
	'&:focus': {},
}))
export const ButtonBlocked = styled(Button)(({ theme }) => ({
	fontSize: 14,
	padding: '12px 14px',
	border: '0px',
	lineHeight: 1.15,
	minHeight: '45px',
	backgroundColor: '#FFB946',
	borderColor: '#FFB946',
	borderRadius: 3,
	textTransform: 'none',
	boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.1);',
	color: '#FFF',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontWeight: 600,
	'&:hover': {
		backgroundColor: '#E26630',
		borderColor: '#E26630',
		boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
	},
	'&:active': {
		backgroundColor: '#E26630',
		borderColor: '#E26630',
		boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
	},
	'&:focus': {},
}))

export const ButtonImage = styled(Button)(({ theme }) => ({
	padding: '12px 14px',
	border: '0px',
	lineHeight: 1.15,
	minHeight: '45px',
	backgroundColor: 'transparent',
	borderColor: 'transparent',
	borderRadius: 3,
	textTransform: 'none',
	boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.1);',
	color: '#FFF',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontWeight: 600,
	'&:hover': {
		backgroundColor: '#E26630',
		borderColor: '#E26630',
		boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
	},
	'&:active': {
		backgroundColor: '#E26630',
		borderColor: '#E26630',
		boxShadow: '4px 4px 8px 0px rgba(207, 137, 93, 0.3);',
	},
	'&:focus': {},
}))
