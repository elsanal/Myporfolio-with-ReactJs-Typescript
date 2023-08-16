
type Url={
    url: string;
    filename:string
}

function DownloadPDF({url,filename}:Url) {

  const downloadPDF = () => {
    
    const aElement = document.createElement('a');  
    const href = url //URL.createObjectURL(res);
    aElement.href = href;
    aElement.setAttribute('download', filename);
    aElement.setAttribute('target', '_blank');
    aElement.click();
    URL.revokeObjectURL(href);

  };

  return (
    <div>
      <button onClick={downloadPDF}
          type="button"  className="flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
  
            <span className="self-center text-xl ml-2 font-semibold 
            whitespace-nowrap text-white">
              CV
            </span>
          </button>
    </div>
  );
}

export default DownloadPDF;
