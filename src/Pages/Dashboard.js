/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 18/02/2026 - 19:10:27
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 18/02/2026
 * - Author          : DHANUSH
 * - Modification    :
 **/
import { useEffect, useMemo, useState } from "react";
import { fetchCameras, updateStatus } from "../Api/CameraApi";
import CameraTable from "../Components/CameraTable";
import SearchBar from "../Components/SearchBar";
import Pagination from "../Components/Pagination";

export default function Dashboard() {
  const [cameras, setCameras] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");

  const itemsPerPage = 5;

  const filtered = useMemo(() => {
    return cameras
      .filter((cam) =>
        (cam.name || "").toLowerCase().includes(search.toLowerCase()),
      )
      .filter((cam) => {
        if (statusFilter === "all") return true;

        return (cam.status || "").toLowerCase() === statusFilter.toLowerCase();
      });
  }, [cameras, search, statusFilter]);

  useEffect(() => {
    const load = async () => {
      const res = await fetchCameras();
      setCameras(res.data.cameras);
    };

    load();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [search, statusFilter]);

  const paginated = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  const handleToggle = async (id, status) => {
    await updateStatus(id, status);
    setCameras((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)));
  };

  const handleDelete = (id) => {
    setCameras((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Cameras</h1>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-4 mb-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <SearchBar value={search} onChange={setSearch} />

      <CameraTable
        data={paginated}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />

      <Pagination
        total={filtered.length}
        page={page}
        setPage={setPage}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
}
