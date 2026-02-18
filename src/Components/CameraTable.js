/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 18/02/2026 - 19:11:36
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/02/2026
    * - Author          : DHANUSH
    * - Modification    : 
**/
export default function CameraTable({ data, onToggle, onDelete }) {
  return (
    <table className="w-full border bg-white shadow rounded">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3">Name</th>
          <th className="p-3">Location</th>
          <th className="p-3">Status</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((cam) => (
          <tr key={cam.id} className="border-t hover:bg-gray-50">
            <td className="p-3">{cam.name}</td>
            <td className="p-3">{cam.location}</td>

            <td className="p-3">
              <button
                onClick={() =>
                  onToggle(
                    cam.id,
                    cam.status === "Active" ? "Inactive" : "Active",
                  )
                }
                className={`px-3 py-1 rounded text-sm ${
                  cam.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200"
                }`}
              >
                {cam.status}
              </button>
            </td>

            <td className="p-3">
              <button
                onClick={() => onDelete(cam.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
