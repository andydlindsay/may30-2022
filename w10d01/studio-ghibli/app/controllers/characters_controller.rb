class CharactersController < ApplicationController
  def index
    @movie = Movie.find params[:movie_id]
    @characters = @movie.characters

    render json: {
      movie: @movie,
      characters: @characters
    }
  end
end
