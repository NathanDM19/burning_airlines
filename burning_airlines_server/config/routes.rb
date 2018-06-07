Rails.application.routes.draw do
  root to: "session#new"
  get "/login" => "session#new"
  post "/login" => 'session#create'
  delete "/login" => "session#destroy"

  resources :users

  get "/flights/json" => "flights#json"

  post "/flights/json" => "flights#post"
  get "/flights/jsonReservations" => "flights#reservations"
  resources :airplanes
  delete "/airplanes/:id" => "airplanes#destroy"
  resources :flights
  delete "/flights/:id" => "flights#destroy"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
