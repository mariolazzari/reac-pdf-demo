import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Report from "./Report";

function App() {
  return (
    <div>
      <h1>PDF</h1>

      <PDFViewer width={300} height={300}>
        <Report />
      </PDFViewer>

      <PDFDownloadLink document={<Report />} fileName="report.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "123"
        }
      </PDFDownloadLink>

      <PDFViewer
        src="test.pdf#toolbar=0"
        style={{ width: "100vw", height: "100vh" }}
      />
    </div>
  );
}

export default App;
