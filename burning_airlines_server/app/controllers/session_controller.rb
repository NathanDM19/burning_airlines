class SessionController < ApplicationController

  def new
  end

  def create
    user = User.find_by name: params[:name]
    # raise "hell"
    if user.present? && user.authenticate( params[:password])
      session[:user_id] = user.id
      redirect_to flights_path
    else
      flash[:error] = "Invalid name or password"
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end
end
