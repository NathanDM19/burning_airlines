class FlightsController < ApplicationController
  def new
    @airplanes = Airplane.all
    @flight = Flight.new
  end

  def create
    # a = Flight.new
    # info = params[:flight]
    # a.date = info[:date]
    # a.from_airport = info[:from_airport]
    # a.to_airport = info[:to_airport]
    # a.airplane_id = info[:airplane_id].to_i
    # a.save
    Flight.create flight_params
    redirect_to flights_path
  end

  def index
    @flights = Flight.all
  end

  def show
  end

  def edit
    @flight = Flight.find params[:id]
  end

  def update
    flight = Flight.find params[:id]
    Flight.update flight_params
    redirect_to flights_path
  end

  def destroy
    flight = Flight.find params[:id]
    flight.destroy
    redirect_to flights_path
  end

  private
  def flight_params
    params.require(:flight).permit(:date, :from_airport, :to_airport, :airplane_id)
  end
end
