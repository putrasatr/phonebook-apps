import { apiClient } from "network/apiClient";

export const getPost = () => apiClient.get("/api/posts");
