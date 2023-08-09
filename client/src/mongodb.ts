
interface Props{
  collection: string;
  setResponse:React.Dispatch< React.SetStateAction<any>>;
  id?:string;
}

const connect_to_database = async({collection, setResponse}:Props)=>{
  const url = `${process.env.REACT_APP_API_URL}/${collection}`;

  await fetch(url).then((response)=>{

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

export default connect_to_database  