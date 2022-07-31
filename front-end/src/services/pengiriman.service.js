import http from "../../http-common";

class PengirimanDataService {
  getAll() {
    return http.get("/pengiriman");
  }
  get(id) {
    return http.get(`/pengiriman/${id}`);
  }
  create(data) {
    return http.post("/pengiriman", data);
  }
  update(id, data) {
    return http.put(`/pengiriman/${id}`, data);
  }
  delete(id) {
    return http.delete(`/pengiriman/${id}`);
  }
  deleteAll() {
    return http.delete(`/pengiriman`);
  }
}
export default new PengirimanDataService();