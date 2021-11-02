/* eslint-disable prettier/prettier */
export class CardsDto {
  id?: number;
  nombre: string;
  apellido: string;
  foto: string;
  rarezas: RarityClass;
  posiciones: PositionClass;
  equipos: TeamClass;
  series: SeriesClass;
}

class RarityClass {
  id: number;
  rareza: string;
}

class PositionClass {
  id: number;
  posicion: string;
}

class TeamClass {
  id: number;
  equipo: string;
}

class SeriesClass {
  id: number;
  serie: string;
}
