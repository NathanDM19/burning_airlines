class AirplanesController < ApplicationController

  before_action :check_if_logged_in, only: [:index, :show, :new]
  before_action :check_if_admin, except: [:index, :show]
  
  def new
    @airplane = Airplane.new
  end

  def create
    Airplane.create airplane_params
    redirect_to airplanes_path
  end

  def index
    @airplanes = Airplane.all
  end

  def show
    @airplane = Airplane.find params[:id]
    @columns = (1..@airplane.columns).to_a
    @rows = (1..@airplane.rows).to_a
    @list = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I"]
  end

  def edit
    @airplane = Airplane.find params[:id]
  end

  def update
    airplane = Airplane.find params[:id]
    airplane.update airplane_params
    redirect_to airplanes_path
  end

  def destroy
    airplane = Airplane.find params[:id]
    airplane.destroy
    redirect_to airplanes_path
  end

  def json
    render json: Airplane.all
  end

  private
  def airplane_params
    params.require(:airplane).permit(:name, :rows, :columns)
  end
end
