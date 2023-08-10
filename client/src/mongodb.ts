
interface Props{
  collection: string;
  setResponse:React.Dispatch< React.SetStateAction<any>>;
  id?:string;
}

const connect_to_database = async({collection, setResponse}:Props)=>{
  const url = `${process.env.REACT_APP_API_URL}/${collection}`;

  await fetch(url,{
    method: 'GET',
    
  }).then((response)=>{
     return response.body?.getReader()
   }).then((reader) => {
    function readStream() {
      reader?.read().then(async ({ done, value }) => {
        if (done) {

          return;
        }
        const decoder = new TextDecoder("utf-8");
        const decodedString = decoder.decode(value);
        try {
          const res = JSON.parse(decodedString);
          console.log(res)
          setResponse(res);
          
        } catch (error) {
          // console.log(error);
        } 
        readStream();
      });
    }
    readStream();
  });
  }

const getPost = async({collection, setResponse}:Props)=> {
  try {
    await connect_to_database({collection:collection, setResponse:setResponse});
   } catch (error) {
    console.log(error);
     alert("there is an error");
   }
}

export default getPost 