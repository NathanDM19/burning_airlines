class ApplicationController < ActionController::Base
  before_action :fetch_user

  def check_if_logged_in
    unless @user.present?
      flash[:errors] = @user.errors.full_messages
      redirect_to login_path
    end
  end

  private

  def fetch_user
    if session[:user_id].present?
      @user = User.find_by id: session[:user_id]
    end

    session[:user_id] = nil unless @user.present?
  end

  def check_if_admin
    unless @user.isAdmin
      flash[:error] = @user.errors.full_messages
      redirect_to login_path
    end
  end
end
