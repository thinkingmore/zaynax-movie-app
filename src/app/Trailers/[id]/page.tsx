"use client"
import React, { useEffect, useState } from "react";
import VideoPlayer from "@/components/Movies/MoviePlayer/VideoPlayer";
import { getMovieVideos } from "@/utils/api/tmdb";

export default function MovieTrailers({ params: { id } }) {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieVideos = async () => {
        try {
            const data = await getMovieVideos(id);
            const result = data?.results;
            const video = result?.filter(video => video.type === 'Trailer');
            setMovie(video[0]);
        } catch (error) {
            console.error("Error fetching movie videos:", error);
        }
        };
        
        fetchMovieVideos();
    }, [id]);

  return (
    <main className="main-bg flex-col items-center text-white py-4">
      <div className="w-72 mx-auto flex items-center justify-center">
        <VideoPlayer videoKey={movie?.key}/>
      </div>
    </main>
  );
}
