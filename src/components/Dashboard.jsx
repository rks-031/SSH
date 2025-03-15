import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [reports, setReports] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) navigate("/");
    fetchReports();
  }, []);

  const fetchReports = async () => {
    const querySnapshot = await getDocs(collection(db, "medical_metadata"));
    setReports(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Medical Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map(report => (
          <div key={report.id} className="border p-4 rounded shadow cursor-pointer"
               onClick={() => navigate(`/report/${report.id}`)}>
            <h2 className="text-lg font-semibold">{report.file_name}</h2>
            <p><strong>Status:</strong> {report.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
