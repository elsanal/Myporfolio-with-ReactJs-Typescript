import {
  AppBar,
  Logout,
  TitlePortal,
  ToggleThemeButton,
  UserMenu,
  defaultTheme
} from "react-admin";
import { createTheme } from "@mui/material/styles";
import { MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useUserMenu } from "react-admin";

const MyAppBar = () => {
  const darkTheme = createTheme({
    palette: { mode: "dark" }
  });
  const SettingsMenuItem = () => {
    const { onClose } = useUserMenu();
    return (
      <MenuItem onClick={onClose}>
        <ListItemIcon>
          <SettingsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Settings</ListItemText>
      </MenuItem>
    );
  };
  return (
    <AppBar
      userMenu={
        <UserMenu>
          <SettingsMenuItem />
          <Logout />
        </UserMenu>
      }
    >
      <TitlePortal />
      <ToggleThemeButton lightTheme={defaultTheme} darkTheme={darkTheme} />
    </AppBar>
  );
};

export default MyAppBar;
