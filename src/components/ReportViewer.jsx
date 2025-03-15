import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ReportViewer = () => {
  const { id } = useParams();
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    const docRef = doc(db, "medical_metadata", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) setReport(docSnap.data());
  };

  return (
    <div className="p-6">
      {report ? (
        <>
          <h1 className="text-2xl font-bold">{report.file_name}</h1>
          <p><strong>Status:</strong> {report.status}</p>
          <h2 className="text-lg font-semibold mt-4">Extracted Text</h2>
          <p className="border p-4 rounded bg-gray-100">{report.extracted_text}</p>
        </>
      ) : (
        <p>Loading report...</p>
      )}
    </div>
  );
};

export default ReportViewer;
