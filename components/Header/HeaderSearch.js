import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from "../../public/image/sidebar-icons/header/Search.svg";
import Link from "next/link";

export default function HeaderSearch(props) {


  return (
    <>
      <Autocomplete
        autoComplete={false}
        id="country-select-demo"
        sx={{ width: 300 }}
        options={tabs}
        disableClearable
        freeSolo
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Link href={option.url}>
            <a>
              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                <img
                  loading="lazy"
                  width="20"
                  src={`http://localhost:3000/${option.image}`}
                  srcSet={`http://localhost:3000/${option.image}`}
                  alt=""
                />
                {option.label}
              </Box>
            </a>
          </Link>
        )}
        renderInput={(params) => (
          <div className={"header__search"}>
            <TextField
              autoComplete={false}
              id={"header__search"}
              {...params}
              placeholder="Globals Search"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            />
            <button>
              <SearchIcon></SearchIcon>
            </button>
          </div>
        )}
      />
    </>
  );
}

const tabs = [
  {
    image: '/image/sidebar-icons/Chart/Black.svg',
    label: 'Dashboard',
    url: '/dashboard'
  },
  {
    image: '/image/sidebar-icons/Chart_alt/Black.svg',
    label: 'Analytics',
    url: '/analytics'
  },
  {
    image: '/image/sidebar-icons/User/Black.svg',
    label: 'Users',
    url: '/users'
  },
  {
    image: '/image/sidebar-icons/Chat/Black.svg',
    label: 'Chat Manager',
    url: '/chat-manager'
  },
  {
    image: '/image/sidebar-icons/Bell/Black.svg',
    label: 'Notifications',
    url: '/notifications'
  },
  {
    image: '/image/sidebar-icons/User_box/Black.svg',
    label: 'CRM Users',
    url: '/crm-users'
  },
  {
    image: '/image/sidebar-icons/Setting_alt_line/Black.svg  ',
    label: 'Global Settings',
    url: '/settings'
  },
];