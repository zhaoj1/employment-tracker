Rails.application.routes.draw do
  
  resources :users do 
    resources :jobs, :interviews, :meetups, :algos do
      resources :notes
    end
  end
  
  post '/signup', to: "users#create"
  post "/login", to: "auth#login"
  # post '/users/:id/jobs', to: 'users#myJobs'

end