
export  const blobUrlConverter = (srcUlr: string) => {
    // Convert the blob URL to a File object

    var url = fetch(srcUlr)
      .then((response) => response.blob())
      .then(async (blob) => {
        const file = new File([blob], 'filename.jpg', { type: 'image/jpeg' }); 
        const bufferProm = await blob.arrayBuffer()
        // console.log(bufferProm)

       return bufferProm
      });
      // console.log(url)
      
      return url;
  };
  