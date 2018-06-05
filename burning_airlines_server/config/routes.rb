Rails.application.routes.draw do

  get 'reservations/new'
  get 'reservations/create'
  get 'reservations/index'
  get 'reservations/show'
  get 'reservations/edit'
  get 'reservations/update'
  get 'reservations/destroy'
  get "/flights/json" => "flights#json"
  resources :airplanes
  delete "/airplanes/:id" => "airplanes#destroy"
  resources :flights
  delete "/flights/:id" => "flights#destroy"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
