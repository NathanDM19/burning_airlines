class FlightsController < ApplicationController
  def new
    @flight = Flight.new
    @airplanes = Airplane.all
  end

  def create
    puts "hello"
    flight = Flight.create flight_params
    flash[:flight_error] = flight.errors.full_messages
    
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
    params.require(:flight).permit(:date, :from_airport, :to_airport)
  end
end
