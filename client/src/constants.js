export const API_URL = process.env.NODE_EMV === "test" ? "http://mocked-api-url" : import.meta.env.VITE_API_URL;
