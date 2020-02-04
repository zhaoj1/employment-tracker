Rails.application.routes.draw do
  
  resources :users, :jobs, :interviews, :meetups, :algos
  
  post '/signup', to: "users#create"
  post "/login", to: "auth#login"
  post "/jobs/new", to: "jobs#create"
  post "/interviews/new", to: "interviews#create"
  post "/meetups/new", to: "meetups#create"
  post "/algos/new", to: "algos#create"

end