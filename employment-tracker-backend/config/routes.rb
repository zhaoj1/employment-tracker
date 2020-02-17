Rails.application.routes.draw do
  
  resources :users do 
    resources :jobs, :interviews, :meetups, :algorithms, :notes
  end
  
  post '/signup', to: "users#create"
  post "/login", to: "auth#login"

end