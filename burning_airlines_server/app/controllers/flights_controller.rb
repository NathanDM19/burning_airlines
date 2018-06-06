class FlightsController < ApplicationController

  skip_before_action :verify_authenticity_token
  def new
    @airplanes = Airplane.all
    @flight = Flight.new
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

  def post
   reservation = Reservation.create row: params['row'], column: params['column'], user_id: params['user_id'], flight_id: params['flight_id']
 end

  def show
    @flight = Flight.find params[:id]
    @columns = (1..@flight.airplane.columns).to_a
    @rows = (1..@flight.airplane.rows).to_a
    @list = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I"]

    # puts @columns
    # puts @rows
    # raise 'hell'

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
    render json: Flight.all, include: [:airplane , {reservations: {include: [:user]} } ]
  end
  private
  def flight_params
    params.require(:flight).permit(:date, :from_airport, :to_airport, :airplane_id)
  end
end
