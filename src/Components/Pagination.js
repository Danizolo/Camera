/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 18/02/2026 - 19:11:49
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/02/2026
    * - Author          : DHANUSH
    * - Modification    : 
**/
export default function Pagination({ total, page, setPage, itemsPerPage }) {
  const pages = Math.ceil(total / itemsPerPage);

  return (
    <div className="flex gap-2 mt-4">
      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`px-3 py-1 border rounded ${
            page === i + 1 ? "bg-black text-white" : ""
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
