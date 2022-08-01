Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get 'login', to: 'sessions#create'
  # get 'login', action: :create, controller: 'sessions'

  # resources :movies
  # resources :characters

  resources :movies do
    resources :characters
  end
end
