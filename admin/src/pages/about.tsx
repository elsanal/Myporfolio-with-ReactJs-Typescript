import {List,Datagrid,TextField,EditButton,Create,SimpleList, NumberInput, NumberField, RichTextField, ArrayField} from "react-admin";
import { Edit, SimpleForm, TextInput } from "react-admin";
import {ArrayInput,SimpleFormIterator,ImageInput,ImageField} from "react-admin";
import MyUrlField from "../components/MyUrlField";
import {transform, updateDate, postFilters, PostTitle, Small, postRowStyle} from '../components/modules'
import { RichTextInput } from "ra-input-rich-text";


export const AboutList = (props: React.ComponentType<any>) => {
const size = Small();
  return (
    <List {...props} filters={postFilters}>
      {size ? (
        <SimpleList
          primaryText={(record)=> "SANA ALOUTE"}
          secondaryText={(record) => record.phone}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <><Datagrid rowStyle={postRowStyle}>
            <RichTextField source="introduction" sx={{ color: "black" }} />
            <TextField source="email" sx={{ color: "black" }} />
            <NumberField source="phone" sx={{ color: "black" }} />
            <EditButton sx={{ color: "black" }} />
          </Datagrid>
          <Datagrid>
          <ArrayField source="network">
                <Datagrid sx={{background: 'orange', width:'fit-content'}}>
                  <ImageField label='' source="src.src"/>
                  <MyUrlField source="link"/>
                </Datagrid>
            </ArrayField>
          </Datagrid>
        </>
      )}
    </List>
  );
};

export const AboutEdit = (props: React.ComponentType<any>) => {
  return (
    <Edit
      title={<PostTitle/>}
      transform={updateDate}
      {...props}
      redirect="list">
      <SimpleForm className="m-auto w-full sm:w-9/12 md:1/2">
      <RichTextInput source="introduction" className="w-full sm:w-full sm:max-w-2xl"/>
      <TextInput source="email" type="email" className="w-full sm:max-w-lg sm:w-full"/>
      <NumberInput source="phone" className="w-full sm:max-w-lg sm:w-full"/>
      <ArrayInput source="network">
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
      <ImageInput
            source="profile"
            accept="image/*.jpg,.jpeg,.png,.jpg"
            label=""
            helperText="Select an image">
            <ImageField source="src" />
      </ImageInput>
    </SimpleForm>
    </Edit>
  );
};

export const AboutCreate = () => (
  <Create transform={transform} redirect="list" className="p-0 m-0">
    <SimpleForm className="m-auto w-full sm:w-9/12 md:1/2">
      <RichTextInput source="introduction" className="w-full sm:w-full sm:max-w-2xl"/>
      <TextInput source="email" type="email" className="w-full sm:max-w-lg sm:w-full"/>
      <NumberInput source="phone" className="w-full sm:max-w-lg sm:w-full"/>
      <ArrayInput source="network">
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
      <ImageInput
            source="profile"
            accept="image/*.jpg,.jpeg,.png,.jpg"
            label=""
            helperText="Select an image">
            <ImageField source="src" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
