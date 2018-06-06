Rails.application.routes.draw do
  get "/flights/json" => "flights#json"
  get "airplanes/json" => "airplanes#json"
  resources :airplanes
  delete "/airplanes/:id" => "airplanes#destroy"
  resources :flights
  delete "/flights/:id" => "flights#destroy"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
