class UsersController < ApplicationController
  
  def index
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    redirect_to @user
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    redirect_to @user
  end

  def show
    @user = User.find(params[:id])
  end

  def delete
  end

  def destroy
  end


  private

  def user_params
    params.require(:user).permit(:name, :email, :username, :address)
  end


end
