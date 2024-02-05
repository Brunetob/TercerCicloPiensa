// gol.ts
import { instance } from "./base.api";

export interface Gol {
  id: number;
  gol_number: number;
  timestamp: string; // Asegúrate de que el tipo de timestamp sea correcto
}

const endpoint = "gol";

export const gol = {
  getAll: function (): Promise<Gol[]> {
    return instance.get<Gol[]>(endpoint)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching gol data:", error);
        throw error;
      });
  }
};
