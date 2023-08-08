import {List,Datagrid,TextField,EditButton,Create,SimpleList} from "react-admin";
import { Edit, SimpleForm, TextInput } from "react-admin";
import {ArrayInput,SimpleFormIterator,ImageInput,ImageField} from "react-admin";
import MyUrlField from "../components/MyUrlField";
import {transform, updateDate, postFilters, PostTitle, Small, postRowStyle} from '../components/modules'


export const ProjectList = (props: React.ComponentType<any>) => {
const size = Small();
  return (
    <List {...props}
    title="List of posts"
    sort={{field:'description',order:'asc'}}
    // filter={{ title: true }}
    filters={postFilters}
    >
      {size ? (
        <SimpleList
          primaryText={(record)=> record.title}
          secondaryText={(record) => record.description}
          tertiaryText={(record) => record.technology}
        />
      ) : (
        <Datagrid rowStyle={postRowStyle}>
          <TextField source="title" sx={{color:"black" }} />
          <TextField source="platform" sx={{color:"black" }} />
          <TextField source="technology" sx={{color:"black" }} />
          <MyUrlField source="github" />
          <EditButton sx={{color:"black" }} />
        </Datagrid>
      )}
    </List>
  );
};

export const ProjectEdit = (props: React.ComponentType<any>) => {
  return (
    <Edit
      title={<PostTitle />}
      transform={updateDate}
      {...props}
      redirect="list">
      <SimpleForm className="m-auto w-full sm:w-9/12 md:1/2">
      <TextInput source="title" className="w-full sm:max-w-lg sm:w-full"/>      
      <TextInput source="github" className="w-full sm:max-w-lg sm:w-full"/>
      <TextInput source="technology" className="w-full sm:max-w-lg sm:w-full"/>
      <TextInput source="platform" className="w-full sm:max-w-lg sm:w-full"/>
      <TextInput source="description" multiline rows={5} className="w-full sm:w-full sm:max-w-2xl"/>
      <ArrayInput source="images">
        <SimpleFormIterator>
          <ImageInput
            source="src"
            accept="image/*.jpg,.jpeg,.png,.jpg"
            label=""
            helperText="Select an image">
            <ImageField source="src" />
          </ImageInput>
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="socials">
        <SimpleFormIterator>
          <ImageInput
            source="src"
            accept="image/*.jpg,.jpeg,.png,.jpg"
            label=""
            helperText="Select an image">
            <ImageField source="src" />
          </ImageInput>
          <TextInput source="link" className="w-full sm:w-96"/>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
    </Edit>
  );
};

export const ProjectCreate = () => (
  <Create transform={transform} redirect="list" className="p-0 m-0">
    <SimpleForm className="m-auto w-full sm:w-9/12 md:1/2">
      <TextInput source="title" className="w-full sm:max-w-lg sm:w-full"/>      
      <TextInput source="github" className="w-full sm:max-w-lg sm:w-full"/>
      <TextInput source="technology" className="w-full sm:max-w-lg sm:w-full"/>
      <TextInput source="platform" className="w-full sm:max-w-lg sm:w-full"/>
      <TextInput source="description" multiline rows={5} className="w-full sm:w-full sm:max-w-2xl"/>
      <ArrayInput source="images">
        <SimpleFormIterator>
          <ImageInput
            source="src"
            accept="image/*.jpg,.jpeg,.png,.jpg"
            label=""
            helperText="Select an image">
            <ImageField source="src" />
          </ImageInput>
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="socials">
        <SimpleFormIterator>
          <ImageInput
            source="src"
            accept="image/*.jpg,.jpeg,.png,.jpg"
            label=""
            helperText="Select an image">
            <ImageField source="src" />
          </ImageInput>
          <TextInput source="link" className="w-full sm:w-96"/>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
