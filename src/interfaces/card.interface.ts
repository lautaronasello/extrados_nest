/* eslint-disable prettier/prettier */
export interface CardsInterface {
  id?: number;
  nombre: string;
  apellido: string;
  foto: string;
  rarezas: RarityClass;
  posiciones: PositionClass;
  equipos: TeamClass;
  series: SeriesClass;
}

interface RarityClass {
  id: number;
  rareza: string;
}

interface PositionClass {
  id: number;
  posicion: string;
}

interface TeamClass {
  id: number;
  equipo: string;
}

interface SeriesClass {
  id: number;
  serie: string;
}
