import { Box, makeStyles } from '@material-ui/core';
import { Header, SideBar } from 'components/common';
import Dashboard from 'features/dashboard/Dashboard';
import StudentFeatures from 'features/student/StudentFeatures';
import { Route, Switch } from 'react-router-dom';

const useStyless = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridAutoRows: 'auto 1fr',
    gridTemplateColumns: '240px 1fr',
    gridTemplateAreas: `"header header" "sidebar main"`,
    minHeight: '100vh',
  },
  header: {
    gridArea: 'header',
  },
  sidebar: {
    gridArea: 'sidebar',
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
  },
  main: {
    gridArea: 'main',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 3),
  },
}));
export default function AdminLayout() {
  const classes = useStyless();
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Header />
      </Box>
      <Box className={classes.sidebar}>
        <SideBar />
      </Box>
      <Box className={classes.main}>
        <Switch>
          <Route path="/admin/dashboard">
            <Dashboard />
          </Route>
          <Route path="/admin/students">
            <StudentFeatures />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}
