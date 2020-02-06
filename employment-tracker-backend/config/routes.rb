Rails.application.routes.draw do
  
  resources :users, :jobs, :interviews, :meetups, :algos
  
  post '/signup', to: "users#create"
  post "/login", to: "auth#login"

end