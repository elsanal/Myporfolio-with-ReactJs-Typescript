import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ReferenceInput, TextInput, useRecordContext } from "react-admin";
import { blobUrlConverter } from "../authDataProvider/convertBlobUrl";

/////////// get the time to 
const timestamp = Date.now().toString();
 export const transform = (data: any) => ({
    ...data,
    id: timestamp,
    image:{src:blobUrlConverter(data.image.src)},
    createdate: Date.now(),
    updatedate: Date.now()
  });

//////// record the update time  
export const updateDate = (data: any) => ({
    ...data,
    updatedate: Date.now()
  });
  
 // search on a list
 export const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="title" label="Title" reference="project" />
];

//////// Change the app bar title when editing a post
export const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ""}</span>;
  };

// ///////// row styles
const sixMonth = 6;
const year = 12;
export const postOld = (createdate: Date) => {
    return parseInt(
      (
        (+new Date(Date.now()).valueOf() - +new Date(createdate).valueOf()) /
        (1000 * 60 * 60 * 24 * 30)
      ).toString()
    );
  };
export const postRowStyle = (record: { createdate: Date }) => ({
    backgroundColor:
      postOld(record.createdate) < sixMonth
        ? "green"
        : postOld(record.createdate) < year
        ? "yellow"
        : "red",
    color: "black",
    fontWeight: "bold",
    fontColor: "black"
  });

//////////// screen size and theme
const theme = createTheme();
export const Small = ()=>{
    return useMediaQuery(() => theme.breakpoints.down("sm"))
};  