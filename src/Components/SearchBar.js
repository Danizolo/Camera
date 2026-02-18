/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 18/02/2026 - 19:11:24
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/02/2026
    * - Author          : DHANUSH
    * - Modification    : 
**/
export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search cameras..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border px-4 py-2 rounded mb-4 w-full"
    />
  );
}
