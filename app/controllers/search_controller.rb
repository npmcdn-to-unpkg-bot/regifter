class SearchController < ApplicationController
  def index
    @gifts = if params[:query].present?
               Gift.search(params[:query])
             else
               Gift.all
    end
  end

  # def autocomplete
  #   binding.pry
  #   render json: Gift.where('name ilike ?', "%#{params[:query]}%")
  # end

  # def create
  #   binding.pry
  # end
end
