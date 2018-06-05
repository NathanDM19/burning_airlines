class FlightsController < ApplicationController
  def new
    @airplanes = Airplane.all
    # raise "hell"
  end

  def create
    flight = Flight.create flight_params
    # raise "hell"
    if flight.persisted?
      redirect_to flights_path
    end
    flash[:flight_error] = flight.errors.full_messages
  end

  def index
    @flights = Flight.all
  end

  def show
  end

  def edit
    @flight = Flight.find params[:id]
    @airplanes = Airplane.all
  end

  def update
    flight = Flight.find params[:id]
    flight.update flight_params
    redirect_to flights_path
  end

  def destroy
    flight = Flight.find params[:id]
    flight.destroy
    redirect_to flights_path
  end

  def json
    render json: Flight.all
  end
  private
  def flight_params
    params.require(:flight).permit(:date, :from_airport, :to_airport, :airplane_id)
  end
end
