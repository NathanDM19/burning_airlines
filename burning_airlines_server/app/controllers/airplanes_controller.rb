class AirplanesController < ApplicationController
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