/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 18/02/2026 - 19:10:10
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/02/2026
    * - Author          : DHANUSH
    * - Modification    : 
**/
import axios from "axios";

const api = axios.create({
  baseURL: "https://hiring-assignment.wobot.ai/api/v1",
  headers: {
    Authorization: "Bearer 4ApVMIn5sTxeW7GQ5VWeWiy",
  },
});

export const fetchCameras = async () => {
  const res = await api.get("/fetch/cameras");
  return res.data;
};

export const updateStatus = async (id, status) => {
  return api.post("/update/camera/status", { id, status });
};
