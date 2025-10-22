import {Filme} from "@/types/types"
import tmdbApi from "./axios"

type Data = {
    results: Filme[]
}

export const getTrendingMovies = async () => {
    const res = await tmdbApi.get<Data>("/trending/movie/week?language=pt-BR")

    return res.data.results;
}

export const getUpcomingMovies = async () => {
    const res = await tmdbApi.get<Data>("https://api.themoviedb.org/3/movie/upcoming?language=pt-BR")

    return res.data.results;
}

export const getTopRatedMovies = async () => {
    const res = await tmdbApi.get<Data>("https://api.themoviedb.org/3/movie/top_rated?language=pt-BR")

    return res.data.results;
}

export const getNowPlayingMovies = async () => {
    const res = await tmdbApi.get<Data>("https://api.themoviedb.org/3/movie/now_playing?language=pt-BR")

    return res.data.results;
}

export const getMovieDetails = async (id : number) : Promise<Filme | undefined> => {
    const res = await tmdbApi.get<Filme>(`/movie/${id}?language=pt-BR`);

    return res.data;
}
