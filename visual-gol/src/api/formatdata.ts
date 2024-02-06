// formatData.ts
interface Gol {
    id: number;
    golNumber: number;
    timestamp: string;
}

const formatGolData = (data: any): Gol[] => {
    // Aquí puedes realizar cualquier lógica de formato necesario
    return data.map((gol: any) => ({
        id: gol.id,
        golNumber: gol.golNumber,
        timestamp: gol.timestamp,
    }));
};

export type { Gol }; // Utiliza 'export type' para reexportar un tipo
export { formatGolData }; // Exporta la función como antes