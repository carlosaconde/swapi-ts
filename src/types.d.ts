export interface DataCharacter {
    count:    number;
    next:     string;
    previous: null;
    results:  ResultCharacter[];
  }
  export interface DataStarship {
    count:    number;
    next:     string;
    previous: null;
    results:  ResultStarship[];
  }
  export interface DataFilms {
    count:    number;
    next:     null;
    previous: null;
    results:  ResultFilms[];
}

export interface ResultFilms {
    title:         string;
    episode_id:    number;
    opening_crawl: string;
    director:      string;
    producer:      string;
    release_date:  Date;
    characters:    string[];
    planets:       string[];
    starships:     string[];
    vehicles:      string[];
    species:       string[];
    created:       Date;
    edited:        Date;
    url:           string;
}
  export interface ResultCharacter {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: Gender;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
  }
  
  export enum Gender {
    Female = "female",
    Male = "male",
    NA = "n/a",
  }
  export interface ResultStarship {
    name:                   string;
    model:                  string;
    manufacturer:           string;
    cost_in_credits:        string;
    length:                 string;
    max_atmosphering_speed: string;
    crew:                   string;
    passengers:             string;
    cargo_capacity:         string;
    consumables:            string;
    hyperdrive_rating:      string;
    MGLT:                   string;
    starship_class:         string;
    pilots:                 string[];
    films:                  string[];
    created:                Date;
    edited:                 Date;
    url:                    string;
  }