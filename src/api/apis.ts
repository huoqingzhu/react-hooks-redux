import request from "../utils/reques";

export function article() {
  return request({
    url: "/profile ",
    method: "get"
  });
}