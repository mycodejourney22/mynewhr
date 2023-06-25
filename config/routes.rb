Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # namespace :api do
  #   namespace :v1 do
  #     get 'employees/index'
  #     get 'employees/new'
  #     post 'employees/create'
  #   end
  # end

  root 'pages#index'
  # resources :employees do
  #   resources :references, only: [:create]
  # end

  namespace :api do
    namespace :v1 do
      resources :employees
      resources :references
    end
  end

  get '*path', to: 'pages#index', via: :all
end
