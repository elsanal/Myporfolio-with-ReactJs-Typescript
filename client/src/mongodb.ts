
interface Props{
  collection: string;
  setResponse:React.Dispatch< React.SetStateAction<any>>;
  id?:string;
}

const connect_to_database = async({collection, setResponse}:Props)=>{
  const url = `${process.env.REACT_APP_API_URL}/${collection}`;
   await fetch(url)
      .then(((response: { json: () => any; }) => response.json())) 
      .then((data: any) => {
        setResponse(data)
      })
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