export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full p-4 mx-auto container">
        <iframe
            src="http://localhost:8000/"
            title="Embedded Jupyter Notebook"
            className="w-full h-full"
        >
        
        </iframe>
      </div>
  );
}
