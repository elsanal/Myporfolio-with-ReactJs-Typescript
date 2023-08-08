import {List,Datagrid,TextField,EditButton,Create,SimpleList, RichTextField} from "react-admin";
import { Edit, SimpleForm, TextInput } from "react-admin";
import {ArrayInput,SimpleFormIterator,ImageInput,ImageField} from "react-admin";
import MyUrlField from "../components/MyUrlField";
import {transform, updateDate, postFilters, PostTitle, Small, postRowStyle} from '../components/modules'
import { RichTextInput } from "ra-input-rich-text";


export const ServiceList = (props: React.ComponentType<any>) => {
const size = Small();
  return (
    <List {...props} filters={postFilters}>
      {size ? (
        <SimpleList
          primaryText={(record)=> record.title}
          secondaryText={(record) => record.description}
        />
      ) : (
        <Datagrid rowStyle={postRowStyle}>
          <TextField source="title" sx={{color:"black" }} />
          <RichTextField source="description" sx={{color:"black" }} />
          <ImageField source='image.src'/>
          <EditButton sx={{color:"black" }} />
        </Datagrid>
      )}
    </List>
  );
};

export const ServiceEdit = (props: React.ComponentType<any>) => {
  return (
    <Edit
      title={<PostTitle />}
      transform={updateDate}
      {...props}
      redirect="list">
      <SimpleForm className="m-auto w-full sm:w-9/12 md:1/2">
      <TextInput source="title" className="w-full sm:max-w-lg sm:w-full"/>      
      <TextInput source="icon_id" className="w-full sm:max-w-lg sm:w-full"/>
      <RichTextInput source="description" className="w-full sm:w-full sm:max-w-2xl"/>
      <ImageInput
            source="image"
            accept="image/*.jpg,.jpeg,.png,.jpg"
            label=""
            helperText="Select an image">
            <ImageField source="src" />
      </ImageInput>
      
    </SimpleForm>
    </Edit>
  );
};

export const ServiceCreate = () => (
  <Create transform={transform} redirect="list" className="p-0 m-0">
    <SimpleForm className="m-auto w-full sm:w-9/12 md:1/2">
      <TextInput source="title" className="w-full sm:max-w-lg sm:w-full"/>      
      <TextInput source="icon_id" className="w-full sm:max-w-lg sm:w-full"/>
      <RichTextInput source="description" className="w-full sm:w-full sm:max-w-2xl"/>
      <ImageInput
            source="image"
            accept="image/*.jpg,.jpeg,.png,.jpg"
            label=""
            helperText="Select an image">
            <ImageField source="src" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
