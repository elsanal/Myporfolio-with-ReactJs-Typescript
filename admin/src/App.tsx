import './App.css';
import { Admin, Layout, LayoutProps} from 'react-admin';
import { Resource } from 'react-admin';
import { ProjectList, ProjectEdit, ProjectCreate } from './pages/project'
import ProjectIcon from "@mui/icons-material/Topic";
import AboutIcon from "@mui/icons-material/PersonPin";
import ServiceIcon from "@mui/icons-material/Work";
import ResumeIcon from "@mui/icons-material/Summarize";
import { Dashboard } from './pages/Dashboard';
import dataProvider from './authDataProvider/dataProvider';
import  MyAppBar  from './components/MyAppBar';
import { ServiceList, ServiceEdit, ServiceCreate } from './pages/service';
import { AboutList, AboutEdit, AboutCreate } from './pages/about';
import { ResumeList, ResumeEdit, ResumeCreate } from './pages/resume';


function App() {
  const MyLayout = (props: JSX.IntrinsicAttributes & LayoutProps) => <Layout {...props} appBar={MyAppBar} />;
  return (
    <Admin 
    //authProvider={authProvider}
    dataProvider={dataProvider} 
    dashboard={Dashboard}
    layout={MyLayout}>
      <Resource name="project" list={ProjectList} edit={ProjectEdit} create={ProjectCreate} 
                icon={ProjectIcon} recordRepresentation="title"/>
      <Resource name="service" list={ServiceList} edit={ServiceEdit} create={ServiceCreate} 
                icon={ServiceIcon} recordRepresentation="title"/>
      <Resource name="resume" list={ResumeList} edit={ResumeEdit} create={ResumeCreate} 
                icon={ResumeIcon} recordRepresentation="title"/>
      <Resource name="about" list={AboutList} edit={AboutEdit} create={AboutCreate} 
                icon={AboutIcon} recordRepresentation="title"/>
    </Admin>
  );
}

export default App;
