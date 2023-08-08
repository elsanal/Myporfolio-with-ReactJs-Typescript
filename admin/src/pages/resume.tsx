import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Create,
  SimpleList,
  NumberInput,
  FileField,
  FileInput,
  NumberField,
  RichTextField,
  FunctionField,
  ArrayField,
  DateField,
  UrlField
} from "react-admin";
import { Edit, SimpleForm, TextInput } from "react-admin";
import {
  ArrayInput,
  SimpleFormIterator,
  ImageInput,
  ImageField
} from "react-admin";
import MyUrlField from "../components/MyUrlField";
import {
  transform,
  updateDate,
  postFilters,
  PostTitle,
  Small,
  postRowStyle
} from "../components/modules";
import { RichTextInput } from "ra-input-rich-text";

export const ResumeList = (props: React.ComponentType<any>) => {
  const size = Small();
  return (
    <List {...props} filters={postFilters}>
      {size ? (
        <SimpleList primaryText={(record) => record.skills} />
      ) : (
        <>
          <Datagrid>
            <ArrayField source="languages">
              <Datagrid>
                <TextField source="language" />
                <TextField source="level" />
              </Datagrid>
            </ArrayField>
            <ArrayField source="skills">
              <Datagrid>
                <TextField source="skill" />
                <TextField source="level" />
              </Datagrid>
            </ArrayField>
            <EditButton
              sx={{
                color: "white",
                background: "black",
                padding: 10,
                fontSize: 20
              }}
            />
          </Datagrid>
          <Datagrid>
            <ArrayField source="experiences">
              <Datagrid>
                <RichTextField source="description" />
              </Datagrid>
            </ArrayField>
            <EditButton
              sx={{
                color: "white",
                background: "black",
                padding: 10,
                fontSize: 20
              }}
            />
          </Datagrid>
        </>
      )}
    </List>
  );
};

export const ResumeEdit = (props: React.ComponentType<any>) => {
  return (
    <Edit
      title={<PostTitle />}
      transform={updateDate}
      {...props}
      redirect="list"
    >
      <SimpleForm className="m-auto w-full sm:w-9/12 md:1/2">
        <ArrayInput source="languages">
          <SimpleFormIterator>
            <TextInput
              source="language"
              className="w-full sm:max-w-lg sm:w-full"
            />
            <TextInput
              source="level"
              className="w-full sm:max-w-lg sm:w-full"
            />
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="skills">
          <SimpleFormIterator>
            <TextInput
              source="skill"
              className="w-full sm:max-w-lg sm:w-full"
            />
            <TextInput
              source="level"
              className="w-full sm:max-w-lg sm:w-full"
            />
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="experiences">
          <SimpleFormIterator>
            <RichTextInput
              source="description"
              className="w-full sm:w-full sm:max-w-2xl"
            />
          </SimpleFormIterator>
        </ArrayInput>
        <FileInput source="attachments">
          <FileField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Edit>
  );
};

export const ResumeCreate = () => (
  <Create transform={transform} redirect="list" className="p-0 m-0">
    <SimpleForm className="m-auto w-full sm:w-9/12 md:1/2">
      <ArrayInput source="languages">
        <SimpleFormIterator>
          <TextInput
            source="language"
            className="w-full sm:max-w-lg sm:w-full"
          />
          <TextInput source="level" className="w-full sm:max-w-lg sm:w-full" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="skills">
        <SimpleFormIterator>
          <TextInput source="skill" className="w-full sm:max-w-lg sm:w-full" />
          <TextInput source="level" className="w-full sm:max-w-lg sm:w-full" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="experiences">
        <SimpleFormIterator>
          <RichTextInput
            source="description"
            className="w-full sm:w-full sm:max-w-2xl"
          />
        </SimpleFormIterator>
      </ArrayInput>
      <FileInput source="attachments">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);
