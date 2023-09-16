import MovieListWrapper from '@/components/Movies/MovieWrapper/MovieListWrapper'

export default function Home() {

  return (
    <main className="main-bg min-h-screen flex-col items-center justify-between p-24">
        <MovieListWrapper heading={"movies you must watch"}/>
    </main>
  )
}
